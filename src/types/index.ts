export interface ProductFeature {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  badge: string;
  iconName: string;
  screenshot: string;
  bullets: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
}

export interface WorkflowStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  inputData: string;
  aiBehavior: string;
  humanRole: string;
  outcome: string;
  screenshot: string;
  icon: string;
  featuresHighlight: string[];
}

export interface PersonaSimulation {
  id: string;
  name: string;
  role: string;
  debtAmount: number;
  overdueDays: number;
  riskSegment: 'Low' | 'Medium' | 'High';
  product: string;
  lastContact: string;
  propensityScore: number;
  suggestedPlanMonths: number;
  monthlyInstallment: number;
  suggestedStrategy: string;
  empathyNote: string;
  sampleMessage: {
    sms: string;
    emailSubject: string;
    emailBody: string;
    voiceScript: string;
  };
}

export interface ScreenshotItem {
  id: string;
  title: string;
  category: 'Customer 360' | 'Agent Workspace' | 'AI Intelligence' | 'Omnichannel' | 'Payment Engine' | 'Data Pipeline';
  image: string;
  description: string;
  highlights: string[];
}

export interface ArchitectureLayer {
  layer: string;
  component: string;
  role: string;
  technologies: string[];
  description: string;
  complianceNote: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}
