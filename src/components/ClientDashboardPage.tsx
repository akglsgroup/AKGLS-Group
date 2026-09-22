import React from 'react';
import ManagerDashboardPage from './ManagerDashboardPage';

interface ClientDashboardPageProps {
  onBackToHome?: () => void;
  onNavigateHome?: () => void;
}

/**
 * ClientDashboardPage has transitioned to the Manager / CRM Dashboard.
 * Replaces the previous performance-only view with a unified operational CRM:
 * - Unified list of all inbound leads, client contacts, and services taken
 * - Complete CRUD management for internal employees, associates, and agents
 * - Services taken delivery tracking and recurring monthly retainer pipeline
 * - Omnichannel communication logs (WhatsApp, Calls, Emails, Meetings)
 */
export default function ClientDashboardPage({ onBackToHome, onNavigateHome }: ClientDashboardPageProps) {
  return (
    <ManagerDashboardPage 
      onNavigateHome={onNavigateHome || onBackToHome} 
      onBackToHome={onBackToHome || onNavigateHome}
    />
  );
}
