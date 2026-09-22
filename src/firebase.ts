import { initializeApp, getApps, getApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc, 
  query, 
  orderBy, 
  onSnapshot, 
  getDocFromServer,
  Unsubscribe
} from 'firebase/firestore';
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged,
  User 
} from 'firebase/auth';
import { LeadRecord, UserProfile, ChatMessageRecord } from './types';
import appletConfig from '../firebase-applet-config.json';

// Resolved configuration targeting the provisioned project
const resolvedConfig = {
  projectId: 
    (typeof import.meta !== 'undefined' && import.meta.env?.VITE_FIREBASE_PROJECT_ID) ||
    appletConfig?.projectId ||
    'realtors-directory',
  appId: 
    (typeof import.meta !== 'undefined' && import.meta.env?.VITE_FIREBASE_APP_ID) ||
    appletConfig?.appId ||
    '1:815514143958:web:bd2705889a88216d4d0d77',
  apiKey: 
    (typeof import.meta !== 'undefined' && import.meta.env?.VITE_FIREBASE_API_KEY) ||
    appletConfig?.apiKey ||
    'AIzaSyBorb2F2oE1DQrn2j2abPC9v35ICOjN6GQ',
  authDomain: 
    (typeof import.meta !== 'undefined' && import.meta.env?.VITE_FIREBASE_AUTH_DOMAIN) ||
    appletConfig?.authDomain ||
    'realtors-directory.firebaseapp.com',
  firestoreDatabaseId: 
    (typeof import.meta !== 'undefined' && import.meta.env?.VITE_FIREBASE_DATABASE_ID) ||
    appletConfig?.firestoreDatabaseId ||
    'ai-studio-akglsgroupsite-ecb433f8-a78e-41eb-99fb-e422adef4b3e',
  storageBucket: 
    (typeof import.meta !== 'undefined' && import.meta.env?.VITE_FIREBASE_STORAGE_BUCKET) ||
    appletConfig?.storageBucket ||
    'realtors-directory.firebasestorage.app',
  messagingSenderId: 
    (typeof import.meta !== 'undefined' && import.meta.env?.VITE_FIREBASE_MESSAGING_SENDER_ID) ||
    appletConfig?.messagingSenderId ||
    '815514143958',
};

// Initialize Firebase App instance safely (singleton with safe fallback for build/SSR)
const app = getApps().length > 0 
  ? getApp() 
  : initializeApp({
      ...resolvedConfig,
      apiKey: resolvedConfig.apiKey || 'AIzaSy_DEV_PLACEHOLDER_KEY_FOR_BUILD'
    });

// Initialize Firestore targeting default or named database
export const db = (resolvedConfig.firestoreDatabaseId && resolvedConfig.firestoreDatabaseId !== '(default)') 
  ? getFirestore(app, resolvedConfig.firestoreDatabaseId)
  : getFirestore(app);

// Initialize Firebase Authentication
export const authInstance: ReturnType<typeof getAuth> = getAuth(app);
export const auth = authInstance;

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

/**
 * Sign in using Firebase Google Auth Popup
 */
export async function signInWithGoogle(): Promise<{ user: User | null; error?: string }> {
  try {
    const result = await signInWithPopup(authInstance, googleProvider);
    if (result.user) {
      // Sync or update user profile in Firestore
      await syncUserProfileToFirestore(result.user);
    }
    return { user: result.user };
  } catch (err: any) {
    console.error('Google Sign-In Error:', err);
    return { user: null, error: err?.message || 'Google sign-in was interrupted.' };
  }
}

/**
 * Log out authenticated user
 */
export async function logoutUser(): Promise<void> {
  try {
    await signOut(authInstance);
  } catch (err) {
    console.error('Logout error:', err);
  }
}

/**
 * Subscribe to Firebase Auth state change
 */
export function subscribeToAuthState(callback: (user: User | null) => void): Unsubscribe {
  return onAuthStateChanged(authInstance, callback);
}

/**
 * Synchronize user profile into Firestore collection /users/{userId}
 */
export async function syncUserProfileToFirestore(
  userOrUid: User | string, 
  additionalData?: Partial<UserProfile>
): Promise<UserProfile> {
  const uid = typeof userOrUid === 'string' ? userOrUid : userOrUid.uid;
  const user = typeof userOrUid === 'string' ? null : userOrUid;
  const userRef = doc(db, 'users', uid);
  const now = new Date().toISOString();

  let existingData: Partial<UserProfile> = {};
  try {
    const snap = await getDoc(userRef);
    if (snap.exists()) {
      existingData = snap.data() as UserProfile;
    }
  } catch (e) {
    console.warn('Profile read before write notice:', e);
  }

  const profile: UserProfile = {
    uid: uid,
    email: user?.email || additionalData?.email || existingData.email || '',
    displayName: user?.displayName || additionalData?.displayName || existingData.displayName || (user?.email?.split('@')[0]) || 'User',
    photoURL: user?.photoURL || additionalData?.photoURL || existingData.photoURL || '',
    company: additionalData?.company || existingData.company || '',
    domain: additionalData?.domain || existingData.domain || '',
    customLogo: additionalData?.customLogo || existingData.customLogo || '',
    role: (user?.email === 'amrish.singh01@gmail.com' || existingData.email === 'amrish.singh01@gmail.com') ? 'admin' : (existingData.role || 'client'),
    createdAt: existingData.createdAt || now,
    lastLoginAt: now
  };

  try {
    await setDoc(userRef, profile, { merge: true });
  } catch (err) {
    console.error('Error saving user profile to Firestore:', err);
  }

  return profile;
}

/**
 * Fetch a user profile from Firestore /users/{userId}
 */
export async function getUserProfile(userId: string): Promise<UserProfile | null> {
  try {
    const userRef = doc(db, 'users', userId);
    const snap = await getDoc(userRef);
    if (snap.exists()) {
      return snap.data() as UserProfile;
    }
  } catch (err) {
    console.error('Failed to get user profile from Firestore:', err);
  }
  return null;
}

export const getUserProfileFromFirestore = getUserProfile;

export async function updateUserProfileInFirestore(userId: string, data: Partial<UserProfile>): Promise<void> {
  const userRef = doc(db, 'users', userId);
  await setDoc(userRef, { ...data, updatedAt: new Date().toISOString() }, { merge: true });
}

/**
 * Save chat message to Firestore under /users/{userId}/chat_messages/{messageId}
 */
export async function saveChatMessageToFirestore(userId: string, message: ChatMessageRecord): Promise<boolean> {
  try {
    const msgRef = doc(db, 'users', userId, 'chat_messages', message.id);
    const cleanMsg: Record<string, any> = {};
    for (const [k, v] of Object.entries(message)) {
      if (v !== undefined) {
        cleanMsg[k] = v;
      }
    }
    await setDoc(msgRef, cleanMsg, { merge: true });
    return true;
  } catch (err) {
    console.error('Failed to save chat message to Firestore:', err);
    return false;
  }
}

/**
 * Subscribe to real-time chat history for an authenticated user
 */
export function subscribeToChatHistory(
  userId: string,
  onUpdate: (messages: ChatMessageRecord[]) => void
): Unsubscribe {
  const colRef = collection(db, 'users', userId, 'chat_messages');
  return onSnapshot(
    colRef,
    (snapshot) => {
      const msgs: ChatMessageRecord[] = [];
      snapshot.forEach((d) => {
        msgs.push(d.data() as ChatMessageRecord);
      });
      // Sort in ascending chronological order for thread view
      msgs.sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
      onUpdate(msgs);
    },
    (err) => {
      console.warn('Chat history subscribe notice:', err);
    }
  );
}

/**
 * Clear chat history in Firestore for an authenticated user
 */
export async function clearChatHistoryFromFirestore(userId: string): Promise<void> {
  try {
    const colRef = collection(db, 'users', userId, 'chat_messages');
    const snap = await getDocs(colRef);
    for (const d of snap.docs) {
      await deleteDoc(d.ref);
    }
  } catch (err) {
    console.error('Failed to clear chat history in Firestore:', err);
  }
}

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
  };
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid || null,
      email: auth.currentUser?.email || null,
      emailVerified: auth.currentUser?.emailVerified || null,
      isAnonymous: auth.currentUser?.isAnonymous || null,
    },
    operationType,
    path,
  };
  console.error('Firestore Error:', JSON.stringify(errInfo));
  return new Error(JSON.stringify(errInfo));
}

// Connection test on boot
let connectionTested = false;
export async function testFirestoreConnection(): Promise<boolean> {
  if (connectionTested) return true;
  try {
    const testDoc = doc(db, 'leads', '_connection_check');
    await getDocFromServer(testDoc).catch(() => null);
    connectionTested = true;
    console.log('[Firebase] Connected to Firestore successfully');
    return true;
  } catch (err: any) {
    if (err instanceof Error && err.message.includes('the client is offline')) {
      console.warn('[Firebase] Firestore client is offline, using local cache / offline mode.');
    } else {
      console.warn('[Firebase] Note on initial connection:', err?.message || err);
    }
    return false;
  }
}

// Trigger connection check
if (typeof window !== 'undefined') {
  testFirestoreConnection();
}

/**
 * Save a lead directly to Firestore global database.
 */
export async function saveLeadToFirestore(lead: LeadRecord): Promise<boolean> {
  const path = `leads/${lead.id}`;
  try {
    const leadRef = doc(db, 'leads', lead.id);
    // Remove any undefined values to satisfy Firestore payload constraints
    const cleanLead: Record<string, any> = {};
    for (const [k, v] of Object.entries(lead)) {
      if (v !== undefined) {
        cleanLead[k] = v;
      }
    }
    await setDoc(leadRef, cleanLead, { merge: true });
    return true;
  } catch (err) {
    console.error(`Failed to save lead to Firestore (${path}):`, err);
    // Non-blocking log to ensure user experience remains seamless
    return false;
  }
}

/**
 * Real-time listener for global leads collection in Firestore.
 */
export function subscribeToGlobalLeads(
  onUpdate: (leads: LeadRecord[]) => void,
  onError?: (error: Error) => void
): Unsubscribe {
  const leadsCol = collection(db, 'leads');

  return onSnapshot(
    leadsCol,
    (snapshot) => {
      const records: LeadRecord[] = [];
      snapshot.forEach((d) => {
        const data = d.data() as LeadRecord;
        records.push({
          ...data,
          id: d.id || data.id,
        });
      });
      records.sort((a, b) => new Date(b.time || 0).getTime() - new Date(a.time || 0).getTime());
      onUpdate(records);
    },
    (error) => {
      const wrapped = handleFirestoreError(error, OperationType.LIST, 'leads');
      if (onError) onError(wrapped);
    }
  );
}

/**
 * Direct one-time fetch of all leads from Firestore (ideal for initial portal hydration)
 */
export async function getLeadsFromFirestore(): Promise<LeadRecord[]> {
  try {
    const leadsCol = collection(db, 'leads');
    const snapshot = await getDocs(leadsCol);
    const records: LeadRecord[] = [];
    snapshot.forEach((d) => {
      const data = d.data() as LeadRecord;
      records.push({
        ...data,
        id: d.id || data.id,
      });
    });
    records.sort((a, b) => new Date(b.time || 0).getTime() - new Date(a.time || 0).getTime());
    return records;
  } catch (err) {
    console.warn('[Firebase] getLeadsFromFirestore direct fetch notice:', err);
    return [];
  }
}

/**
 * Update a lead document in Firestore.
 */
export async function updateLeadInFirestore(
  leadId: string, 
  updates: Partial<LeadRecord>
): Promise<boolean> {
  const path = `leads/${leadId}`;
  try {
    const leadRef = doc(db, 'leads', leadId);
    const cleanUpdates: Record<string, any> = {};
    for (const [k, v] of Object.entries(updates)) {
      if (v !== undefined) {
        cleanUpdates[k] = v;
      }
    }
    await updateDoc(leadRef, cleanUpdates);
    return true;
  } catch (err) {
    handleFirestoreError(err, OperationType.UPDATE, path);
    return false;
  }
}

/**
 * Delete a lead document from Firestore.
 */
export async function deleteLeadFromFirestore(leadId: string): Promise<boolean> {
  const path = `leads/${leadId}`;
  try {
    const leadRef = doc(db, 'leads', leadId);
    await deleteDoc(leadRef);
    return true;
  } catch (err) {
    handleFirestoreError(err, OperationType.DELETE, path);
    return false;
  }
}

/**
 * Batch import or sync leads from localStorage into Firestore.
 */
export async function syncLocalLeadsToFirestore(): Promise<{ synced: number; failed: number }> {
  if (typeof window === 'undefined') return { synced: 0, failed: 0 };
  let synced = 0;
  let failed = 0;

  try {
    const localStr = localStorage.getItem('akgls_system_leads') || '[]';
    const leads: LeadRecord[] = JSON.parse(localStr);
    if (Array.isArray(leads) && leads.length > 0) {
      for (const lead of leads) {
        if (!lead.id) lead.id = 'lead_' + Math.random().toString(36).substring(2, 11);
        const ok = await saveLeadToFirestore(lead);
        if (ok) synced++;
        else failed++;
      }
    }
  } catch (err) {
    console.error('Error syncing local leads to Firestore:', err);
  }

  return { synced, failed };
}
