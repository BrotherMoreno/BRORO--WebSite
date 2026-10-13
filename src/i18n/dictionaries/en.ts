import type { Dict } from "../types";

// English copy. Items marked PROVISIONAL must be confirmed with the CEO.
export const en: Dict = {
  meta: {
    tagline: "Software that changes how problems get solved", // PROVISIONAL
    description: "BRORO builds custom software, Android apps and web applications.", // PROVISIONAL
    notFoundTitle: "Page not found",
  },
  common: {
    skip: "Skip to content", home: "Home", breadcrumb: "Breadcrumb", openMenu: "Open menu", closeMenu: "Close menu",
    mainNav: "Main", mobileNav: "Mobile", language: "Language", logoLabel: "BRORO, home",
    viewProject: "View project", viewProjects: "View projects", viewPortfolio: "View portfolio", talk: "Let's talk", goContact: "Go to contact",
    newTab: "(opens in a new tab)", back: "Back to home",
  },
  nav: [
    { path: "/servicios", label: "Services" }, { path: "/portafolio", label: "Portfolio" },
    { path: "/nosotros", label: "About us" }, { path: "/contacto", label: "Contact" },
  ],
  legalNav: [{ path: "/legal/privacidad", label: "Privacy" }, { path: "/legal/terminos", label: "Terms" }],
  footer: { site: "Site", legal: "Legal", follow: "Follow us", contact: "Contact", rights: "All rights reserved.", soon: "coming soon" },
  home: {
    eyebrow: "BRORO · Software, apps and web", // PROVISIONAL
    facts: [["2", "own Android apps"], ["v1.0", "heading to Google Play"], ["Offline", "work without internet"]],
    capabilities: ["Android apps", "Web applications", "Custom software", "3D and IFC models", "PDF, Word, Excel and DWG/DXF drawings", "Digital signature and evidence", "Offline operation", "Dashboards and reports"],
    capabilitiesLabel: "Capabilities",
    about: { eyebrow: "Who we are", title: "We build software with purpose", text: "BRORO is a software development company. We design and build custom applications, Android apps and web solutions, and we have already created two apps of our own for construction work." }, // PROVISIONAL
    services: { eyebrow: "Services", title: "What we do" },
    featured: { eyebrow: "Portfolio", title: "Featured projects", text: "Two Android apps of our own, getting ready for version 1.0." },
    diff: {
      eyebrow: "Why BRORO", title: "What we have already built",
      items: [
        { icon: "wifi", title: "They work offline", text: "Both of our apps work without a connection and keep their data on the device." },
        { icon: "shield", title: "Verifiable evidence", text: "PortaCloud issues flattened PDFs with a SHA-256 fingerprint and a traceability sheet." },
        { icon: "box", title: "3D models on your phone", text: "RBIM3D opens IFC models by discipline on phones and tablets." },
        { icon: "file", title: "Full traceability", text: "Every action on a record is stored, filterable and exportable." },
      ],
    },
    process: {
      eyebrow: "Process", title: "How we work", // PROVISIONAL: generic process
      steps: [
        { title: "Understand", text: "We listen to the problem and define the scope with you." },
        { title: "Design", text: "We outline the solution, the interface and the architecture." },
        { title: "Build", text: "We develop in small, verifiable deliveries." },
        { title: "Launch and improve", text: "We publish, measure and keep evolving the product." },
      ],
    },
    cta: { title: "Let's talk about your project", text: "Tell us what you need to solve and we will reply by email." },
    highlights: {
      rbim3d: ["IFC models by discipline", "Clash detection and 4D simulation", "Progress control and site records"],
      portacloud: ["Editable PDF protocols with digital signature", "Evidence with SHA-256 fingerprint", "Master traceability log"],
    },
  },
  services: {
    meta: { title: "Services", description: "Custom software, Android applications and web applications." },
    header: { eyebrow: "Services", title: "Software, apps and web made to measure", text: "We build solutions for Android and the web, backed by the experience of creating two products of our own." },
    items: [
      { title: "Custom software development", text: "Systems designed around each organization's way of working.", bullets: ["Analysis of the problem and scope", "Design of the solution and the interface", "Development in verifiable deliveries"] },
      { title: "Android applications", text: "Android apps like RBIM3D and PortaCloud, prepared for Google Play.", bullets: ["Offline operation", "Handling of files, PDFs and photos", "Publication on Google Play"] },
      { title: "Web applications", text: "Websites and web applications adapted to phones, tablets and computers.", bullets: ["Responsive, accessible design", "Performance and technical SEO", "Dashboards and forms"] },
      { title: "And more", text: "Other technology services to be defined with the company.", bullets: ["To be confirmed"] }, // PROVISIONAL
    ],
    start: {
      eyebrow: "How we start", title: "From idea to proposal", // PROVISIONAL
      steps: [
        { title: "Tell us your idea", text: "Write to us about what you need to solve." },
        { title: "We talk it through", text: "We clarify the scope, timelines and priorities." },
        { title: "Proposal", text: "We send you a proposal with scope and next steps." },
      ],
    },
  },
  portfolio: {
    meta: { title: "Portfolio", description: "RBIM3D and PortaCloud, BRORO's Android applications." },
    header: { crumb: "Portfolio", eyebrow: "Portfolio · {n} projects", title: "Products we have already built", text: "Two Android apps of our own for construction work, on their way to Google Play." },
    section: "Apps and products", platform: "Platform", version: "Version",
    ctaTitle: "Want something like this for your team?",
    sheet: "Overview", offline: "Offline", category: "Category",
    shots: "Screenshots: to be added when available.", next: "Next project",
    detailCtaTitle: "Interested in {name}?", detailCtaText: "Write to us and we will tell you more.",
  },
  projects: [
    {
      slug: "rbim3d", name: "RBIM3D", category: "Construction · BIM",
      summary: "IFC model viewer and coordination: 3D inspection, clashes, 4D simulation, RFIs and site progress control.",
      status: "Coming soon on Google Play", platform: "Android (phone and tablet)", version: "1.0",
      offline: "Yes: works without internet and keeps data on the device",
      modules: [
        { title: "IFC models by discipline", items: ["Loads Architecture, Structure, Plumbing and Electrical models", "Custom disciplines with a 2 to 6 character prefix", "Each model keeps its own IFC levels", "File fingerprint to detect duplicates and damaged copies"] },
        { title: "Model inspection", items: ["Single and multiple selection; hide, isolate and cut", "IFC properties, section cut and visibility reset", "Color by status or by IFC, and transparency by discipline"] },
        { title: "3D tools", items: ["First- or third-person walkthrough", "Measurement of distances, angles and areas", "Perspective or orthographic camera; plan, front and side views", "Saved viewpoints, display modes and image export"] },
        { title: "Coordination", items: ["Clash detection between disciplines, with status, owner and date", "Clash report in PDF", "4D simulation from the IFC files or from a CSV schedule", "RFIs with export to Excel and PDF"] },
        { title: "Site progress", items: ["Per-element status shown in colors on the model", "Dated status records", "Site log with photos and a PDF with signature space"] },
        { title: "Files and drawings", items: ["Documents per project, also from a .zip", "Viewers for PDF, Word, Excel, DWG and DXF", "Anchored remarks with author, date and status", "Handover file"] },
      ],
    },
    {
      slug: "portacloud", name: "PortaCloud", category: "Quality · Protocols",
      summary: "Editable PDF protocols, batch issuing, digital signature and verifiable evidence with traceability.",
      status: "Coming soon on Google Play", platform: "Android", version: "1.0",
      offline: "Yes: works without internet and keeps data on the device",
      modules: [
        { title: "Protocol templates", items: ["Imports editable PDFs (up to 20 MB) and reads their fields", "Organized in folders, with type and version", "Archive and restore without losing forms already issued"] },
        { title: "Batch issuing", items: ["Lots as a single number, a list (1,3,7) or a range (1-15) within a block", "Each issue is recorded under the person who creates it, with an optional owner", "Each record starts as Open"] },
        { title: "Form management", items: ["Open, In progress and Closed statuses, with filters and search", "Reopening requires a reason", "Deletion with a reason kept in the master log"] },
        { title: "Filling and signatures", items: ["Fill directly on the PDF", "Finger signature with name, date and time", "Roles: Production Engineer, Quality Inspector and Resident Engineer"] },
        { title: "Evidence", items: ["New flattened PDF so it cannot be edited", "SHA-256 fingerprint to verify it was not altered", "Traceability sheet with the status \"Closed — released\""] },
        { title: "Dashboards and traceability", items: ["Progress cards and charts, with export to Excel and PDF", "Master log of creations, changes, reopenings and deletions"] },
      ],
    },
  ],
  about: {
    meta: { title: "About us", description: "BRORO, a software development company." },
    header: { crumb: "About us", eyebrow: "About us", title: "A software company that builds its own products", text: "BRORO is a software development company. We create custom applications, Android apps and web solutions, and we have developed two products of our own for construction work: RBIM3D and PortaCloud." }, // PROVISIONAL
    ceo: { role: "CEO of BRORO", name: "Name to be confirmed", text: "Runs BRORO, the company that created RBIM3D and PortaCloud. Education and professional background: to be confirmed." }, // PROVISIONAL
  },
  cta: { title: "Have a project in mind?", text: "Tell us what you need to solve and we will reply by email." },
  contact: {
    meta: { title: "Contact", description: "Tell us about your project and get a technical assessment from BRORO." },
    pill: ["MODE: 100% ONLINE, REMOTE", "REPLY < 24 H"], // the CEO must confirm this can be met
    title: "We turn your ideas into", highlight: "real, powerful, scalable software",
    subtitle: "Custom development, modern web platforms with React and high-performance mobile apps. We work online for the whole world, with on-site technical deployment where you need it.",
    modality: { label: "Way of working", title: "100% online work", text: "We serve clients remotely, worldwide, with agile coordination over video calls.", chips: ["Remote sync", "1-on-1 meetings", "On-site support"] },
    channels: { label: "Direct channels", email: "Email", whatsapp: "Direct WhatsApp", chat: "Chat", copy: "Copy", copied: "Copied!", copyFail: "Could not copy" },
    form: {
      kicker: "// CONTACT FORM", title: "Start a project / get a quote",
      text: "Fill in the details of your initiative to receive a technical assessment and a development proposal in under 24 hours.",
      name: "Your name", namePh: "Enter your name", email: "Email address", emailPh: "example@company.com",
      phone: "Phone", country: "Country", phonePh: "999 999 999",
      service: "Type of service", servicePh: "Select a service", budget: "Budget range",
      message: "Short project description", messagePh: "Tell us the details of your project or idea...",
      ndaBefore: "I need to sign a", ndaStrong: "Non-Disclosure Agreement (NDA)", ndaAfter: "before sharing detailed technical documentation.",
      sendEmail: "Send by email", sendWhatsapp: "Send by WhatsApp",
      note: "Your message is prepared in your email app or in WhatsApp and is sent when you confirm it. This site does not store what you write.",
      okEmail: "Your email is ready: check your email app and press send.", okWhatsapp: "WhatsApp opened with your message: press send there.",
      errors: { name: "Enter your name.", email: "Enter a valid email address.", phone: "Digits only (6 to 12 digits).", service: "Choose a type of service.", message: "Tell us a bit more (at least 10 characters)." },
      services: [
        { value: "moviles", label: "Mobile app development" }, { value: "web", label: "Web development" },
        { value: "software-medida", label: "Custom software and backend" }, { value: "consultoria-cloud", label: "Technical and cloud consulting" },
      ],
      budgets: [
        { value: "mvp", label: "Under $2,500 USD (MVP / module)" }, { value: "standard", label: "$2,500 – $7,000 USD (full project)" },
        { value: "enterprise", label: "Over $7,000 USD (enterprise scale)" }, { value: "definir", label: "To be defined after review" },
      ],
      mail: { subject: "Website request", name: "Name", email: "Email", phone: "Phone", country: "Country", service: "Service", budget: "Budget", budgetDefault: "To be defined", nda: "Requires NDA", yes: "Yes", no: "No" },
    },
  },
  legal: {
    crumb: "Legal", draft: "Provisional draft: it must be reviewed by a legal professional before the site is published.",
    privacy: { title: "Privacy policy", paragraphs: [
      "This site presents BRORO and its projects. It currently uses no tracking cookies or analytics tools. It only stores a cookie in your browser with your preferred language.",
      "The contact form does not store data on the site: it prepares an email or a WhatsApp message, and what you write is only sent if you press send.",
      "If you write to us, we will use your message only to reply to you. For questions about your data, write to BroroTechnologies@outlook.com.",
      "If analytics, cookies or a form-sending service are added in the future, this policy will be updated.",
    ] },
    terms: { title: "Terms of use", paragraphs: [
      "The content of this site is informational. The RBIM3D and PortaCloud features described belong to version 1.0, which is in preparation, and may change before it is published on Google Play.",
      "Logos, texts and designs belong to BRORO. Reproduction without permission is not allowed. Social network brands belong to their owners.",
      "BRORO may update the site and these terms at any time. For questions: BroroTechnologies@outlook.com.",
    ] },
  },
  notFound: { title: "Page not found", text: "The page you are looking for does not exist or has moved." },
};
