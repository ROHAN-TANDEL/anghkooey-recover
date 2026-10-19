import { ProductFeature, WorkflowStep, PersonaSimulation, ScreenshotItem, ArchitectureLayer, FaqItem } from '../types';

export const PRODUCT_INFO = {
  name: "Anghkooey Recover",
  codeName: "anghkooey_recover",
  tagline: "Autonomous AI-Powered Debt Recovery & Resolution Platform",
  heroHeading: "Empathetic, Autonomous & Compliant Debt Recovery Intelligence",
  heroSubtitle: "Transform delinquent accounts into resolved payment plans. Anghkooey Recover combines predictive propensity scoring, generative empathy messaging, omnichannel Twilio & ElevenLabs automation, and an agent-assist cockpit into one unified enterprise system.",
  stats: [
    { label: "Recovery Rate Lift", value: "+38%", detail: "vs traditional collections" },
    { label: "Cost Per Account", value: "-62%", detail: "automated omnichannel flows" },
    { label: "Promise-to-Pay Ratio", value: "84.2%", detail: "sustainable payment plans" },
    { label: "Audit Compliance", value: "99.9%", detail: "FDCPA, TCPA & GDPR baked-in" }
  ]
};

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: 1,
    title: "Ingest & Sanitize Portfolio",
    subtitle: "Automated Data Pipeline & Anomaly Guard",
    description: "Upload delinquency portfolios via automated CSV, API hooks, or ERP connectors. The ingestion engine automatically validates IDs, phone formats, balances, detects anomalies, and segregates data into master records without manual cleanup.",
    inputData: "CSV Files / Core Banking APIs / Accounting Systems (ERP)",
    aiBehavior: "Automatic column mapping, phone/email validation, anomaly flags (missing IDs, negative balance alerts).",
    humanRole: "Review flagged warnings and confirm batch ingestion with a single click.",
    outcome: "Clean, synchronized master debtor registry ready for immediate segmentation.",
    screenshot: "/screenshots/data-upload-pipeline.png",
    icon: "Database",
    featuresHighlight: ["Real-time field validation", "Anomaly warning drawer", "Duplicate account deduplication", "Instant schema mapping"]
  },
  {
    step: 2,
    title: "Predictive Propensity & Risk Scoring",
    subtitle: "AI Behavioral Analysis & Likelihood Gauges",
    description: "Every account is analyzed against historical settlement data, payment behaviors, delinquency age, and customer profile to compute an exact Recovery Probability gauge (e.g., 72%) and assign Risk Segments (Low, Medium, High).",
    inputData: "Delinquency aging buckets, previous payment cycles, account balance, engagement signals.",
    aiBehavior: "Calculates recovery probability index (0-100%), recommends the exact negotiation posture (Empathetic / Structured / Urgent).",
    humanRole: "Examine AI recommendations and choose whether to auto-orchestrate or assign to agent queues.",
    outcome: "Prioritized work queues focusing collector effort where impact and likelihood are highest.",
    screenshot: "/screenshots/ai-assistant-suite.png",
    icon: "Brain",
    featuresHighlight: ["72% AI Recovery Probability Bar", "Behavioral Risk Profiling (High / Med / Low)", "Recommended Action Matrix", "Suggested Repayment Approaches"]
  },
  {
    step: 3,
    title: "Autonomous Omnichannel Outreach",
    subtitle: "Twilio SMS, Email Journeys & ElevenLabs Voice",
    description: "The system triggers multi-touch journeys across Email, SMS, and Conversational Voice. Messages adapt dynamically with customer names, balances, personalized payment links, and scheduled reminder cadences.",
    inputData: "Customer contact preferences, channel responsiveness, optimal contact time windows.",
    aiBehavior: "Generates tailored, empathetic copy; populates secure payment tokens; schedules activity reminders.",
    humanRole: "Inspect draft templates, test mobile preview modals, or execute bulk communication campaigns.",
    outcome: "Instant engagement without aggressive friction, generating self-service payment commitments.",
    screenshot: "/screenshots/communication-suite.png",
    icon: "Send",
    featuresHighlight: ["Twilio SMS integration with mobile preview", "Rich email template studio", "ElevenLabs voice synthesized outreach", "Scheduled calendar follow-ups"]
  },
  {
    step: 4,
    title: "Guided Agent Resolution Cockpit",
    subtitle: "4-Step Structured Workspace: Call → Discuss → Agree → Close",
    description: "When an agent picks up an account, the Agent Workspace provides a guided 4-step workflow: live call telemetry, objection handling cues, AI negotiation scripts, and instant payment plan generation.",
    inputData: "Live call connection, customer sentiment, debtor affordability constraints.",
    aiBehavior: "Provides real-time objection handling prompts and computes viable installment options that fit debtor income.",
    humanRole: "Conduct empathetic conversation, finalize payment terms with debtor agreement.",
    outcome: "Legally binding Promise-to-Pay (PTP) locked in with signed agreement schedule.",
    screenshot: "/screenshots/agent-workspace-flow.png",
    icon: "Headphones",
    featuresHighlight: ["Step-by-step resolution stages", "Live customer 360 sidebar", "Instant payment plan calculation modal", "Call notes and voice transcription sync"]
  },
  {
    step: 5,
    title: "Payment Plan Execution & Audit Vault",
    subtitle: "Automated Installment Tracking & Legal Compliance",
    description: "Payment plans are tracked across installment schedules with automated reminders before due dates. All interactions, promissory notes, letters, and identity documents are safely stored in an audit-ready vault.",
    inputData: "Agreed installments, payment gateway callbacks, proof of transfer documents.",
    aiBehavior: "Auto-reconciles incoming settlements; flags broken promises early for immediate soft re-engagement.",
    humanRole: "Monitor portfolio health dashboards, export compliance audit reports.",
    outcome: "Accelerated cash recovery, decreased write-offs, and 100% auditable regulatory compliance.",
    screenshot: "/screenshots/payment-plan-engine.png",
    icon: "ShieldCheck",
    featuresHighlight: ["Dynamic installment schedule table", "Automated receipt & reminder dispatch", "Tamper-evident document repository", "Historical activity audit trail"]
  }
];

export const PRODUCT_FEATURES: ProductFeature[] = [
  {
    id: "customer-360",
    title: "Customer 360 & Delinquency Registry",
    shortDesc: "Centralized debt cockpit with deep multi-criteria filtering and instant status visibility.",
    fullDesc: "Access all delinquent accounts in a high-density, performant interface. Filter by aging buckets (0-30, 31-60, 61-90, 90+ days), risk segment, product line, and collection status. Features instant '+ Add Customer' dialogs and pagination across tens of thousands of records.",
    badge: "Core Operations",
    iconName: "Users",
    screenshot: "/screenshots/customer-management-list.png",
    bullets: [
      "Real-time KPI metrics: Total Outstanding (€ 3.45M), Overdue percentage (66%), Active Promise-to-Pay (10%)",
      "Instant multi-criteria search by customer name, debtor ID, email, or telephone",
      "One-click drill-down to individual debtor profile without page reload latency",
      "Segment color-coded status badges: Overdue, Contacted, Promise to Pay, Not Contacted"
    ],
    metrics: [
      { label: "Portfolio Capacity", value: "100k+ Accounts" },
      { label: "Search Latency", value: "< 45ms" }
    ],
    tags: ["Data Grid", "Multi-Filter", "Debtor Registry", "Aging Buckets"]
  },
  {
    id: "ai-propensity",
    title: "AI Propensity & Behavioral Scoring",
    shortDesc: "Machine learning engine evaluating recovery likelihood and suggesting optimal settlement posture.",
    fullDesc: "Anghkooey Recover analyzes customer payment history and interaction telemetry to compute an AI Recovery Probability gauge (e.g. 72%). It outputs tailored negotiation strategies, empathy-centric copy, and a 4-step checklist for collectors to maximize recovery likelihood.",
    badge: "AI & ML Engine",
    iconName: "Sparkles",
    screenshot: "/screenshots/overview-customer-detail.png",
    bullets: [
      "Dynamic 72% Recovery Probability visual gauge with confidence scoring",
      "Suggested repayment approach based on income stability and debt size",
      "1-Click AI Empathy Message copy with dynamic debt placeholders",
      "Risk factor diagnostics highlighting income variance and broken promise likelihood"
    ],
    metrics: [
      { label: "Prediction Accuracy", value: "91.4%" },
      { label: "PTP Conversion Lift", value: "+28%" }
    ],
    tags: ["Propensity-to-Pay", "LLM Strategy", "Empathy Prompts", "Risk Diagnostics"]
  },
  {
    id: "agent-cockpit",
    title: "Guided 4-Step Agent Workspace",
    shortDesc: "End-to-end call cockpit guiding agents through Call, Discuss, Agree Plan, and Close.",
    fullDesc: "Eliminates collector burnout and procedural errors. The Agent Workspace structures every collector conversation into 4 guided phases with real-time customer data, phone dialer integration, AI script prompts, payment plan calculator modal, and instant note logger.",
    badge: "Agent Productivity",
    iconName: "Headphones",
    screenshot: "/screenshots/agent-workspace-cockpit.png",
    bullets: [
      "Linear 4-step workflow: Step 1 (Call) → Step 2 (Discuss) → Step 3 (Agree Plan) → Step 4 (Close)",
      "Integrated ElevenLabs voice AI and Twilio softphone controls",
      "Embedded debt breakdown (€ 3,450 balance, € 550 paid, overdue 62 days)",
      "Real-time objection assistance giving collectors bullet-proof compliance answers"
    ],
    metrics: [
      { label: "Call Handling Time", value: "-35%" },
      { label: "Compliance Adherence", value: "100%" }
    ],
    tags: ["Agent Cockpit", "Workflow Automation", "Call Telemetry", "Objection Handling"]
  },
  {
    id: "omnichannel-suite",
    title: "Omnichannel Twilio & ElevenLabs Suite",
    shortDesc: "Unified Email, SMS, and Voice messaging with rich templates and mobile preview simulators.",
    fullDesc: "Coordinate multichannel touchpoints from a single hub. Switch between SMS, Email, and Scheduled Activities. Preview messages on mobile mockup screens, inject personalized tokens ({Customer Name}, {Outstanding Amount}, {Payment Link}), and track delivery status in real time.",
    badge: "Communications",
    iconName: "MessageSquare",
    screenshot: "/screenshots/communication-suite.png",
    bullets: [
      "Twilio SMS composer with real-time character count and phone mockup preview",
      "Rich Email editor with PDF attachment support and pre-built legal templates",
      "Scheduled Activity calendar with reminder notifications (15m, 30m, 1h, 1d)",
      "Audit-proof communication logs tracking Date, Time, Sender, and Delivery Status"
    ],
    metrics: [
      { label: "SMS Open Rate", value: "94.6%" },
      { label: "Email Delivery Rate", value: "99.2%" }
    ],
    tags: ["Twilio SMS", "Email Templates", "Activity Scheduling", "Mobile Preview"]
  },
  {
    id: "payment-engine",
    title: "Dynamic Payment Plan & Installment Engine",
    shortDesc: "Customizable installment schedules with auto-calculation, grace periods, and tracking.",
    fullDesc: "Empower collectors and customers to structure realistic repayment solutions. Create payment plans with custom start dates, installment amounts, and frequencies (Weekly, Bi-weekly, Monthly). Detailed installment schedule tables display due dates, status pills, and settled amounts.",
    badge: "Settlement Engine",
    iconName: "CreditCard",
    screenshot: "/screenshots/payment-plan-engine.png",
    bullets: [
      "Interactive '+ Create Payment Plan' modal with automated installment division",
      "Visual schedule grid showing Installment #, Due Date, Amount, Status, and Paid Date",
      "Active status indicator with Plan ID (PLAN-001) and agent attribution",
      "Grace period alerts and promise-to-pay milestone notifications"
    ],
    metrics: [
      { label: "Default Rate Reduction", value: "-44%" },
      { label: "Plan Completion Rate", value: "88.7%" }
    ],
    tags: ["Installments", "Payment Plans", "Repayment Schedule", "Settlement Tracking"]
  },
  {
    id: "document-vault",
    title: "Audit Document Vault & Notes Timeline",
    shortDesc: "Tamper-evident legal document repository and timestamped internal collaboration notes.",
    fullDesc: "Ensure uncompromised regulatory auditability. Store proof of income, debt acknowledgment letters, loan agreements, and settlement contracts. Collectors can log internal chronological notes with categorization pills and exportable audit records.",
    badge: "Compliance & Security",
    iconName: "FileText",
    screenshot: "/screenshots/document-vault.png",
    bullets: [
      "Secure document upload modal with file category labeling (Agreement, Identity, Letter)",
      "Instant row-level document actions: View in-browser, Download, or Delete",
      "Chronological notes feed with timestamp, author, and note type tags",
      "Exportable customer dossier for legal handoff or regulatory audits"
    ],
    metrics: [
      { label: "Audit Readiness", value: "Instant" },
      { label: "Storage Encryption", value: "AES-256" }
    ],
    tags: ["Document Vault", "Notes Log", "Audit Trail", "FDCPA Compliance"]
  }
];

export const SIMULATION_PERSONAS: PersonaSimulation[] = [
  {
    id: "p1",
    name: "John Doe",
    role: "Freelance Graphic Designer",
    debtAmount: 3450,
    overdueDays: 62,
    riskSegment: "Medium",
    product: "Commercial Loan #CR-8821",
    lastContact: "14 Oct 2026 via SMS",
    propensityScore: 72,
    suggestedPlanMonths: 4,
    monthlyInstallment: 862.50,
    suggestedStrategy: "Propose a 4-month structured payment plan with empathetic framing around irregular freelance cash flows.",
    empathyNote: "Customer acknowledged debt in previous contact. Income is delayed from clients; avoid aggressive escalation.",
    sampleMessage: {
      sms: "Hi John, we understand freelancing can have irregular cash flows. You can resolve your €3,450 balance with a manageable €862.50/mo plan. Click here to confirm: https://angh.ly/pay-3450",
      emailSubject: "Flexible Resolution Options for Your Account CR-8821",
      emailBody: "Dear John,\n\nWe appreciate that unexpected payment delays happen. To help you regain financial peace of mind, we have pre-approved a 4-month installment arrangement of €862.50 per month, starting 18 Nov 2026.\n\nPlease review your installment schedule and confirm in one click.",
      voiceScript: "Hello John, this is Sarah from Anghkooey Accounts. I am calling to follow up on your account CR-8821. We have put together a flexible 4-month plan to split your balance into €862.50 monthly payments. Would this work for you?"
    }
  },
  {
    id: "p2",
    name: "Elena Rostova",
    role: "Small Business Owner (Retail Boutique)",
    debtAmount: 8900,
    overdueDays: 114,
    riskSegment: "High",
    product: "Revolving Business Credit Line",
    lastContact: "28 Sep 2026 via Voice Call",
    propensityScore: 48,
    suggestedPlanMonths: 10,
    monthlyInstallment: 890.00,
    suggestedStrategy: "High overdue aging requires formal settlement or extended 10-month amortization with initial down payment.",
    empathyNote: "Seasonal revenue downturn. Offer immediate partial settlement option (-15% waiver on fee) to incentivize agreement.",
    sampleMessage: {
      sms: "Elena, prevent formal legal escalation on your boutique's credit line. We can split your €8,900 debt into 10 monthly payments of €890. Review now: https://angh.ly/elena-settle",
      emailSubject: "Urgent: Final Opportunity for Amortized Settlement - Account #RB-902",
      emailBody: "Dear Elena,\n\nYour account is now 114 days past due. We strongly prefer working with you to find a viable solution before formal external action. We can spread your balance across 10 monthly payments of €890 with zero additional accrued interest if confirmed today.",
      voiceScript: "Hello Elena, I am calling regarding your business credit line. We recognize the challenges facing retail this season. We can hold all external escalations if we set up a 10-month repayment schedule today."
    }
  },
  {
    id: "p3",
    name: "Marcus Vance",
    role: "Senior Software Consultant",
    debtAmount: 1250,
    overdueDays: 19,
    riskSegment: "Low",
    product: "Personal Equipment Line #PL-4019",
    lastContact: "None (Automated reminder sent)",
    propensityScore: 94,
    suggestedPlanMonths: 1,
    monthlyInstallment: 1250.00,
    suggestedStrategy: "High propensity with low overdue days. Friendly payment link reminder via SMS/Email usually settles 95% of cases immediately.",
    empathyNote: "Likely oversight due to card expiry. Gentle reminder with 1-click Apple Pay/Credit card settlement link.",
    sampleMessage: {
      sms: "Hi Marcus, notice on your account #PL-4019: €1,250 is 19 days past due. Tap to complete quick payment with Apple Pay: https://angh.ly/marcus-pay",
      emailSubject: "Reminder: Quick Payment for Account #PL-4019",
      emailBody: "Hi Marcus,\n\nJust a quick heads up that your monthly payment of €1,250 was missed on 1 Oct 2026. You can easily clear this balance with your saved payment method using the link below.",
      voiceScript: "Hi Marcus, this is an automated confirmation from Anghkooey. We noticed a missed payment on your personal equipment line. Press 1 to complete payment with your card on file."
    }
  }
];

export const GALLERY_SCREENSHOTS: ScreenshotItem[] = [
  {
    id: "scr-1",
    title: "Customer Overview & 72% AI Recovery Gauge",
    category: "AI Intelligence",
    image: "/kooey-recover/screenshots/overview-customer-detail.png",
    description: "Full customer 360 view displaying account balances, 72% AI Recovery Probability gauge, suggested empathetic approach, AI suggested message with 1-click copy, and 4-step resolution checklist.",
    highlights: ["72% AI recovery probability bar", "Quick metrics bar (€3,450 outstanding)", "Suggested approach summary", "Single-click copy AI message"]
  },
  {
    id: "scr-2",
    title: "Customers Master List & Advanced Filter Bar",
    category: "Customer 360",
    image: "/kooey-recover/screenshots/customer-management-list.png",
    description: "High-density debtor management table featuring KPI metric cards (€3.45M total debt, 66% overdue), multi-criteria filters (Risk Segment, Status, Product, Overdue Days), and pagination.",
    highlights: ["KPI cards for debt and risk", "Real-time search and risk filters", "Status tags (Overdue, Contacted, PTP)", "+ Add Customer modal action"]
  },
  {
    id: "scr-3",
    title: "Automated Data Ingestion & CSV ETL Pipeline",
    category: "Data Pipeline",
    image: "/kooey-recover/screenshots/data-upload-pipeline.png",
    description: "Enterprise portfolio upload system that checks customer files, maps columns dynamically, validates formatting, and isolates anomalies for clean database ingestion.",
    highlights: ["Drag & drop file upload", "Data validation statistics", "Column auto-mapping", "Anomaly & error detection"]
  },
  {
    id: "scr-4",
    title: "4-Step Guided Agent Workspace Cockpit",
    category: "Agent Workspace",
    image: "/kooey-recover/screenshots/agent-workspace-cockpit.png",
    description: "Live call cockpit guiding collectors step-by-step through Call, Discuss, Agree Plan, and Close with integrated customer sidebar and call telemetry.",
    highlights: ["4-step resolution progress bar", "Call dialer & audio controls", "Live customer financial overview", "Structured conversation guides"]
  },
  {
    id: "scr-5",
    title: "Unified Omnichannel Communication Studio",
    category: "Omnichannel",
    image: "/kooey-recover/screenshots/communication-suite.png",
    description: "Complete communication command center featuring Email composer with template library, Twilio SMS sender with dynamic tokens, and Activity calendar scheduling.",
    highlights: ["SMS & Email 3-tab switcher", "Pre-built message template library", "Dynamic placeholder tags", "Upcoming activity calendar"]
  },
  {
    id: "scr-6",
    title: "Dynamic Payment Plan & Schedule Engine",
    category: "Payment Engine",
    image: "/kooey-recover/screenshots/payment-plan-engine.png",
    description: "Dedicated payment plan management tab displaying active plan metrics (ID PLAN-001, Monthly frequency, 4 installments) and detailed installment schedule table with status pills.",
    highlights: ["Active Plan metric grid", "Installment schedule breakdown", "Paid vs Remaining amount tracking", "+ Create Payment Plan trigger"]
  },
  {
    id: "scr-7",
    title: "Mobile SMS & Email Preview Modals",
    category: "Omnichannel",
    image: "/kooey-recover/screenshots/email-preview-modal.png",
    description: "Interactive preview dialogs allowing agents to verify message formatting, file attachments, and token replacement before sending communications.",
    highlights: ["Realistic smartphone mockup", "Email attachment verification", "One-click edit or send buttons", "Full screen / Modal view switcher"]
  },
  {
    id: "scr-8",
    title: "Multi-Modal Action & Document Modals",
    category: "Customer 360",
    image: "/kooey-recover/screenshots/modal-popups.png",
    description: "Contextual modals for editing customer information, generating payment plans, uploading legal documents, and adding timestamped case notes.",
    highlights: ["Customer profile edit popup", "Payment plan creation form", "Document category tagger", "Row-level action dropdowns"]
  }
];

export const ARCHITECTURE_LAYERS: ArchitectureLayer[] = [
  {
    layer: "Interaction & Agent Interface",
    component: "React 18 + Vite + Tailwind CSS Front-End",
    role: "High-density collector workspace, sub-50ms reactive filtering, unified tabbed customer profile, and guided step workflows.",
    technologies: ["React 18", "TypeScript", "Tailwind CSS", "Lucide Icons", "Vite"],
    description: "Built for zero distraction and maximum agent productivity. Eliminates complex multi-window toggling by unifying customer 360, notes, communication, and payment planning into a single seamless flow.",
    complianceNote: "Role-based access control (RBAC), session timeout, audit trail tracking on every view."
  },
  {
    layer: "AI & Behavioral Intelligence",
    component: "Propensity Engine & Generative Negotiation Copilot",
    role: "Predictive recovery probability scoring (0-100%), empathy message generation, and intelligent negotiation guidelines.",
    technologies: ["LLM Orchestration (Gemini / OpenAI)", "Propensity-to-Pay ML Models", "Context Chaining"],
    description: "Evaluates delinquency age, customer communication history, and income indicators to predict resolution likelihood and recommend personalized repayment installment structures.",
    complianceNote: "GDPR Article 22 compliant (human-in-the-loop review for all automated debtor decisions)."
  },
  {
    layer: "Telecom & Omnichannel Messaging",
    component: "Twilio & ElevenLabs Telephony Hub",
    role: "Programmable SMS dispatch, personalized payment links, automated email scheduling, and conversational voice synthesis.",
    technologies: ["Twilio Messaging API", "Twilio Voice", "ElevenLabs Conversational AI", "SMTP / SendGrid"],
    description: "Automates multi-touch debtor engagement across channels. Injects secure payment tokens into SMS, schedules calendar follow-ups, and empowers agents with lifelike conversational voice AI assistance.",
    complianceNote: "TCPA & FDCPA call-hour constraints and opt-out / DNC registry synchronization."
  },
  {
    layer: "Persistence & Ledger Engine",
    component: "Hybrid Relational & Document Data Store",
    role: "Relational integrity for balances and installments paired with high-volume document and telemetry storage.",
    technologies: ["PostgreSQL (Relational Ledger)", "MongoDB (Communication & Telemetry)", "S3-compatible Object Storage"],
    description: "PostgreSQL handles financial ledgers, customer balances, and payment plan schedules with ACID guarantees. MongoDB logs raw multi-channel communication events, AI outputs, and notes.",
    complianceNote: "AES-256 encryption at rest, TLS 1.3 in transit, automated daily backup snapshots."
  }
];

export const FAQS: FaqItem[] = [
  {
    category: "Product & Capabilities",
    question: "What is Anghkooey Recover (anghkooey_recover)?",
    answer: "Anghkooey Recover is an enterprise AI-native debt collection and recovery management platform. It transforms standard collections into automated, empathetic repayment journeys through propensity-to-pay scoring, a guided 4-step collector cockpit, omnichannel outreach (Twilio SMS/Email/ElevenLabs Voice), and structured payment plan generation."
  },
  {
    category: "Product & Capabilities",
    question: "How does the AI Propensity Scoring work?",
    answer: "Our machine learning engine ingests delinquency history, account balances, and debtor communication patterns to produce an exact Recovery Probability score (e.g. 72%). It categorizes accounts into Low, Medium, and High risk segments and generates the optimal negotiation strategy and empathy-focused copy for agents."
  },
  {
    category: "Compliance & Security",
    question: "Is the platform compliant with FDCPA, TCPA, and GDPR?",
    answer: "Yes, 100%. Anghkooey Recover was engineered with regulatory compliance at its core. It enforces FDCPA contact time windows, honors TCPA opt-outs, logs tamper-evident communication audits, and maintains GDPR Article 22 human-in-the-loop validation for all automated collection actions."
  },
  {
    category: "Integrations",
    question: "How does Anghkooey Recover integrate with our existing core banking or ERP system?",
    answer: "Anghkooey Recover supports flexible integration modes: automated CSV portfolio ingestion with smart column mapping and error scrubbing, RESTful webhook APIs, and direct database synchronization with PostgreSQL and MongoDB."
  },
  {
    category: "Integrations",
    question: "What communication providers are supported out-of-the-box?",
    answer: "The platform has built-in integration support for Twilio (Programmable SMS & Voice) and ElevenLabs (Conversational Voice AI synthesis), along with enterprise SMTP / transactional email providers."
  },
  {
    category: "Business Value",
    question: "What ROI can enterprise collection agencies and lenders expect?",
    answer: "Organizations deploying Anghkooey Recover typically observe an average 38% increase in debt recovery volume, a 62% reduction in operational cost per delinquent account, and a 35% decrease in average call handling time."
  }
];
