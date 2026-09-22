import { 
  collection, 
  doc, 
  setDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc, 
  onSnapshot, 
  Unsubscribe 
} from 'firebase/firestore';
import { db } from './firebase';
import { CrmClient, CrmTeamMember, CrmCommunication } from './types/crm';
import { 
  INITIAL_CRM_CLIENTS, 
  INITIAL_CRM_TEAM, 
  INITIAL_CRM_COMMUNICATIONS 
} from './crmData';

const LOCAL_STORAGE_CLIENTS_KEY = 'akgls_crm_clients';
const LOCAL_STORAGE_TEAM_KEY = 'akgls_crm_team';
const LOCAL_STORAGE_COMM_KEY = 'akgls_crm_communications';

// Helper to safely get local storage items with fallback
function getLocalItem<T>(key: string, defaultVal: T): T {
  if (typeof window === 'undefined') return defaultVal;
  try {
    const val = localStorage.getItem(key);
    if (!val) {
      localStorage.setItem(key, JSON.stringify(defaultVal));
      return defaultVal;
    }
    return JSON.parse(val);
  } catch (err) {
    console.warn(`[CRM Storage] Error reading ${key} from localStorage:`, err);
    return defaultVal;
  }
}

function setLocalItem<T>(key: string, value: T): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.warn(`[CRM Storage] Error writing ${key} to localStorage:`, err);
  }
}

// ==========================================
// CLIENTS MANAGEMENT
// ==========================================

export async function getCrmClientsFromFirestore(): Promise<CrmClient[]> {
  try {
    const colRef = collection(db, 'crm_clients');
    const snapshot = await getDocs(colRef);
    if (snapshot.empty) {
      // Seed default clients to Firestore if empty
      const initial = getLocalItem<CrmClient[]>(LOCAL_STORAGE_CLIENTS_KEY, INITIAL_CRM_CLIENTS);
      for (const client of initial) {
        await saveCrmClientToFirestore(client);
      }
      return initial;
    }
    const clients: CrmClient[] = [];
    snapshot.forEach((d) => {
      clients.push(d.data() as CrmClient);
    });
    setLocalItem(LOCAL_STORAGE_CLIENTS_KEY, clients);
    return clients;
  } catch (err) {
    console.warn('[CRM Firebase] Using local fallback for clients:', err);
    return getLocalItem<CrmClient[]>(LOCAL_STORAGE_CLIENTS_KEY, INITIAL_CRM_CLIENTS);
  }
}

export function subscribeToCrmClients(
  onUpdate: (clients: CrmClient[]) => void
): Unsubscribe {
  // Return local initial first
  const localClients = getLocalItem<CrmClient[]>(LOCAL_STORAGE_CLIENTS_KEY, INITIAL_CRM_CLIENTS);
  onUpdate(localClients);

  const colRef = collection(db, 'crm_clients');
  return onSnapshot(
    colRef,
    (snapshot) => {
      if (!snapshot.empty) {
        const clients: CrmClient[] = [];
        snapshot.forEach((d) => {
          clients.push(d.data() as CrmClient);
        });
        setLocalItem(LOCAL_STORAGE_CLIENTS_KEY, clients);
        onUpdate(clients);
      }
    },
    (err) => {
      console.warn('[CRM Firebase] Client subscription notice:', err?.message || err);
    }
  );
}

export async function saveCrmClientToFirestore(client: CrmClient): Promise<boolean> {
  // Update local storage first
  const current = getLocalItem<CrmClient[]>(LOCAL_STORAGE_CLIENTS_KEY, INITIAL_CRM_CLIENTS);
  const existingIdx = current.findIndex(c => c.id === client.id);
  let updatedList: CrmClient[];
  if (existingIdx >= 0) {
    updatedList = [...current];
    updatedList[existingIdx] = client;
  } else {
    updatedList = [client, ...current];
  }
  setLocalItem(LOCAL_STORAGE_CLIENTS_KEY, updatedList);

  try {
    const docRef = doc(db, 'crm_clients', client.id);
    const cleanData: Record<string, any> = {};
    for (const [k, v] of Object.entries(client)) {
      if (v !== undefined) cleanData[k] = v;
    }
    await setDoc(docRef, cleanData, { merge: true });
    return true;
  } catch (err) {
    console.warn('[CRM Firebase] Error persisting client to Firestore:', err);
    return true; // Still true because local cache saved successfully
  }
}

export async function deleteCrmClientFromFirestore(clientId: string): Promise<boolean> {
  const current = getLocalItem<CrmClient[]>(LOCAL_STORAGE_CLIENTS_KEY, INITIAL_CRM_CLIENTS);
  const updated = current.filter(c => c.id !== clientId);
  setLocalItem(LOCAL_STORAGE_CLIENTS_KEY, updated);

  try {
    const docRef = doc(db, 'crm_clients', clientId);
    await deleteDoc(docRef);
    return true;
  } catch (err) {
    console.warn('[CRM Firebase] Error deleting client from Firestore:', err);
    return true;
  }
}

// ==========================================
// TEAM / EMPLOYEES & ASSOCIATES MANAGEMENT
// ==========================================

export async function getCrmTeamFromFirestore(): Promise<CrmTeamMember[]> {
  try {
    const colRef = collection(db, 'crm_team');
    const snapshot = await getDocs(colRef);
    if (snapshot.empty) {
      const initial = getLocalItem<CrmTeamMember[]>(LOCAL_STORAGE_TEAM_KEY, INITIAL_CRM_TEAM);
      for (const member of initial) {
        await saveCrmTeamMemberToFirestore(member);
      }
      return initial;
    }
    const team: CrmTeamMember[] = [];
    snapshot.forEach((d) => {
      team.push(d.data() as CrmTeamMember);
    });
    setLocalItem(LOCAL_STORAGE_TEAM_KEY, team);
    return team;
  } catch (err) {
    console.warn('[CRM Firebase] Using local fallback for team members:', err);
    return getLocalItem<CrmTeamMember[]>(LOCAL_STORAGE_TEAM_KEY, INITIAL_CRM_TEAM);
  }
}

export function subscribeToCrmTeam(
  onUpdate: (team: CrmTeamMember[]) => void
): Unsubscribe {
  const localTeam = getLocalItem<CrmTeamMember[]>(LOCAL_STORAGE_TEAM_KEY, INITIAL_CRM_TEAM);
  onUpdate(localTeam);

  const colRef = collection(db, 'crm_team');
  return onSnapshot(
    colRef,
    (snapshot) => {
      if (!snapshot.empty) {
        const team: CrmTeamMember[] = [];
        snapshot.forEach((d) => {
          team.push(d.data() as CrmTeamMember);
        });
        setLocalItem(LOCAL_STORAGE_TEAM_KEY, team);
        onUpdate(team);
      }
    },
    (err) => {
      console.warn('[CRM Firebase] Team subscription notice:', err?.message || err);
    }
  );
}

export async function saveCrmTeamMemberToFirestore(member: CrmTeamMember): Promise<boolean> {
  const current = getLocalItem<CrmTeamMember[]>(LOCAL_STORAGE_TEAM_KEY, INITIAL_CRM_TEAM);
  const existingIdx = current.findIndex(m => m.id === member.id);
  let updatedList: CrmTeamMember[];
  if (existingIdx >= 0) {
    updatedList = [...current];
    updatedList[existingIdx] = member;
  } else {
    updatedList = [member, ...current];
  }
  setLocalItem(LOCAL_STORAGE_TEAM_KEY, updatedList);

  try {
    const docRef = doc(db, 'crm_team', member.id);
    const cleanData: Record<string, any> = {};
    for (const [k, v] of Object.entries(member)) {
      if (v !== undefined) cleanData[k] = v;
    }
    await setDoc(docRef, cleanData, { merge: true });
    return true;
  } catch (err) {
    console.warn('[CRM Firebase] Error persisting team member to Firestore:', err);
    return true;
  }
}

export async function deleteCrmTeamMemberFromFirestore(memberId: string): Promise<boolean> {
  const current = getLocalItem<CrmTeamMember[]>(LOCAL_STORAGE_TEAM_KEY, INITIAL_CRM_TEAM);
  const updated = current.filter(m => m.id !== memberId);
  setLocalItem(LOCAL_STORAGE_TEAM_KEY, updated);

  try {
    const docRef = doc(db, 'crm_team', memberId);
    await deleteDoc(docRef);
    return true;
  } catch (err) {
    console.warn('[CRM Firebase] Error deleting team member from Firestore:', err);
    return true;
  }
}

// ==========================================
// COMMUNICATIONS LOGS MANAGEMENT
// ==========================================

export async function getCrmCommunicationsFromFirestore(): Promise<CrmCommunication[]> {
  try {
    const colRef = collection(db, 'crm_communications');
    const snapshot = await getDocs(colRef);
    if (snapshot.empty) {
      const initial = getLocalItem<CrmCommunication[]>(LOCAL_STORAGE_COMM_KEY, INITIAL_CRM_COMMUNICATIONS);
      for (const comm of initial) {
        await saveCrmCommunicationToFirestore(comm);
      }
      return initial;
    }
    const comms: CrmCommunication[] = [];
    snapshot.forEach((d) => {
      comms.push(d.data() as CrmCommunication);
    });
    comms.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    setLocalItem(LOCAL_STORAGE_COMM_KEY, comms);
    return comms;
  } catch (err) {
    console.warn('[CRM Firebase] Using local fallback for communications:', err);
    return getLocalItem<CrmCommunication[]>(LOCAL_STORAGE_COMM_KEY, INITIAL_CRM_COMMUNICATIONS);
  }
}

export function subscribeToCrmCommunications(
  onUpdate: (comms: CrmCommunication[]) => void
): Unsubscribe {
  const localComms = getLocalItem<CrmCommunication[]>(LOCAL_STORAGE_COMM_KEY, INITIAL_CRM_COMMUNICATIONS);
  onUpdate(localComms);

  const colRef = collection(db, 'crm_communications');
  return onSnapshot(
    colRef,
    (snapshot) => {
      if (!snapshot.empty) {
        const comms: CrmCommunication[] = [];
        snapshot.forEach((d) => {
          comms.push(d.data() as CrmCommunication);
        });
        comms.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setLocalItem(LOCAL_STORAGE_COMM_KEY, comms);
        onUpdate(comms);
      }
    },
    (err) => {
      console.warn('[CRM Firebase] Communications subscription notice:', err?.message || err);
    }
  );
}

export async function saveCrmCommunicationToFirestore(comm: CrmCommunication): Promise<boolean> {
  const current = getLocalItem<CrmCommunication[]>(LOCAL_STORAGE_COMM_KEY, INITIAL_CRM_COMMUNICATIONS);
  const existingIdx = current.findIndex(c => c.id === comm.id);
  let updatedList: CrmCommunication[];
  if (existingIdx >= 0) {
    updatedList = [...current];
    updatedList[existingIdx] = comm;
  } else {
    updatedList = [comm, ...current];
  }
  updatedList.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  setLocalItem(LOCAL_STORAGE_COMM_KEY, updatedList);

  try {
    const docRef = doc(db, 'crm_communications', comm.id);
    const cleanData: Record<string, any> = {};
    for (const [k, v] of Object.entries(comm)) {
      if (v !== undefined) cleanData[k] = v;
    }
    await setDoc(docRef, cleanData, { merge: true });
    return true;
  } catch (err) {
    console.warn('[CRM Firebase] Error persisting communication to Firestore:', err);
    return true;
  }
}

export async function deleteCrmCommunicationFromFirestore(commId: string): Promise<boolean> {
  const current = getLocalItem<CrmCommunication[]>(LOCAL_STORAGE_COMM_KEY, INITIAL_CRM_COMMUNICATIONS);
  const updated = current.filter(c => c.id !== commId);
  setLocalItem(LOCAL_STORAGE_COMM_KEY, updated);

  try {
    const docRef = doc(db, 'crm_communications', commId);
    await deleteDoc(docRef);
    return true;
  } catch (err) {
    console.warn('[CRM Firebase] Error deleting communication from Firestore:', err);
    return true;
  }
}
