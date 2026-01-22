
export interface ServiceOption {
  id: string;
  label: string;
}

export const SERVICES_LIST: ServiceOption[] = [
  { id: 'lead-gen', label: 'Lead Generation' },
  { id: 'abm', label: 'Account Based Marketing' },
  { id: 'landing-pages', label: 'Landing Page Generation' },
  { id: 'email-marketing', label: 'Email Marketing' },
  { id: 'icp-profile', label: 'ICP Profile Creation' }
];

export const TARGET_INDUSTRIES = [
  { name: 'SaaS Companies', icon: 'Cloud' },
  { name: 'Manufacturing', icon: 'Factory' },
  { name: 'Logistics', icon: 'Truck' }
];
