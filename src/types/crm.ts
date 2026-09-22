export type CrmServiceCategory = 
  | 'webdev' 
  | 'seo' 
  | 'ppc' 
  | 'smm' 
  | 'content' 
  | 'maintenance' 
  | 'aiseo' 
  | 'branding';

export type CrmServiceStatus = 'Active' | 'In Progress' | 'Under Review' | 'Completed' | 'Paused';

export type CrmPricingModel = 'Monthly Retainer' | 'One-Time Project' | 'Milestone';

export interface CrmService {
  id: string;
  name: string;
  category: CrmServiceCategory;
  status: CrmServiceStatus;
  pricingModel: CrmPricingModel;
  budgetOrFee: number;
  currency: 'INR' | 'USD';
  startDate: string;
  renewalDate?: string;
  deliverablesSummary: string;
  progressPercentage: number; // 0-100
}

export type CrmCommunicationChannel = 'Call' | 'WhatsApp' | 'Email' | 'Meeting' | 'Support Ticket';
export type CrmCommunicationStatus = 'Resolved' | 'Action Required' | 'Follow-up Scheduled';

export interface CrmCommunication {
  id: string;
  clientId: string;
  clientName: string;
  companyName: string;
  date: string;
  channel: CrmCommunicationChannel;
  loggedByEmployeeId: string;
  loggedByEmployeeName: string;
  summary: string;
  discussionNotes: string;
  nextFollowUpDate?: string;
  status: CrmCommunicationStatus;
}

export type CrmClientStatus = 'Active' | 'Onboarding' | 'Proposal' | 'Paused' | 'Past';

export interface CrmClient {
  id: string;
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  websiteUrl: string;
  industry: string;
  status: CrmClientStatus;
  assignedTeamMemberId: string;
  assignedTeamMemberName: string;
  servicesTaken: CrmService[];
  totalMonthlyRetainer: number;
  currency: 'INR' | 'USD';
  contractStartDate: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export type CrmTeamMemberType = 'Internal Employee' | 'Agent / Associate' | 'Freelance Consultant';
export type CrmTeamMemberStatus = 'Active' | 'On Leave' | 'Inactive';

export interface CrmTeamMember {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  type: CrmTeamMemberType;
  status: CrmTeamMemberStatus;
  assignedClientsCount: number;
  specialties: string[];
  joinDate: string;
  notes?: string;
}
