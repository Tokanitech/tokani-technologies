export const services = [
  {
    slug: "website-development",
    stage: "Yavu",
    meaning: "Foundation",
    number: "01",
    title: "Website development in Fiji",
    short: "A professional place to start.",
    cardSummary: "Website, professional email and first-year hosting.",
    description:
      "Give customers a clear picture of your business and a simple way to get in touch. Tokani builds websites around your services, your customers and the way you work.",
    price: "FJD 500",
    priceNote: "Foundation package",
    includes: [
      "Up to five website pages",
      "1 professional business email mailbox",
      "First 12 months of hosting, SSL and analytics setup",
      "Practical launch handover",
    ],
    fit: "For a new business, an SME relying on social media, or an established business whose website no longer reflects its work.",
    outcomes: [
      "Explain your services clearly",
      "Help customers enquire with the right information",
      "Create a consistent, credible digital presence",
    ],
    deliverables: [
      [
        "Discover and structure",
        "We clarify your services, audiences and enquiry process before deciding what goes on each page.",
      ],
      [
        "Design and build",
        "A responsive website using your identity, clear writing and suitable imagery, with an enquiry journey that fits your business.",
      ],
      [
        "Prepare for search",
        "Descriptive page titles, headings, image text, a sitemap and the technical foundations that help search engines understand the site.",
      ],
      [
        "Launch and hand over",
        "We agree domain and email arrangements, check the customer journey and explain how updates and support will work.",
      ],
    ],
    boundary:
      "Final page content, mailbox and domain arrangements, revisions, support and renewal costs are recorded in your written quotation. Extra functionality is scoped separately.",
    example: "unravel-viti",
  },
  {
    slug: "crm-workflows",
    stage: "Tubu",
    meaning: "Growth",
    number: "02",
    title: "CRM & business workflows",
    short: "Organise enquiries, customers and follow-up.",
    cardSummary: "Website, CRM and practical follow-up for a small team.",
    description:
      "Bring website enquiries, customer records and follow-up into one practical process. We help Fiji SMEs introduce CRM and workflows that a small team can actually maintain.",
    price: "FJD 1,650",
    priceNote: "SME digitisation package",
    includes: [
      "Up to eight website pages",
      "2 professional business email mailboxes",
      "CRM setup for one user",
      "Lead pipeline, tasks and basic automation",
      "First 12 months of hosting and included software licences",
    ],
    fit: "For teams losing track of enquiries across inboxes, spreadsheets, phone calls and messages, or looking for a more consistent follow-up process.",
    outcomes: [
      "See which enquiries need attention",
      "Give each customer a clear next step",
      "Reduce repeated manual administration",
    ],
    deliverables: [
      [
        "Map the current process",
        "We look at how an enquiry arrives, who responds and what happens before a sale or service is confirmed.",
      ],
      [
        "Set up your CRM",
        "A focused customer record and pipeline with the fields and stages your team needs. The tool is chosen to suit the agreed requirements.",
      ],
      [
        "Connect useful steps",
        "Agreed forms, tasks and basic automation help information reach the right person. Complex integrations are quoted separately.",
      ],
      [
        "Help the team use it",
        "Practical handover covers everyday follow-up, access and keeping records useful.",
      ],
    ],
    boundary:
      "The quotation confirms the selected tool, licence, user allowance, agreed automation, data preparation, training and recurring costs. We do not assume every existing system needs replacing.",
    example: null,
  },
  {
    slug: "custom-systems",
    stage: "Qaqa",
    meaning: "Strength",
    number: "03",
    title: "Custom business systems & applications",
    short: "Build around the way you work.",
    cardSummary: "Portals, operational workflows, integrations and practical automation.",
    description:
      "When standard tools no longer fit, Tokani helps turn an operational problem into a focused application. Start with a defined workflow, prove it works, then expand when there is a reason.",
    price: "From FJD 2,500",
    priceNote: "Scope-based quotation",
    includes: [
      "Portals and operational workflows",
      "Integrations and practical automation",
      "Custom applications and reporting",
    ],
    fit: "For organisations with a specific process that is difficult to manage through disconnected tools, repeated data entry or manual approvals.",
    outcomes: [
      "Make responsibilities and status visible",
      "Connect the steps in a working process",
      "Build useful capability in manageable phases",
    ],
    deliverables: [
      [
        "Define the problem",
        "Agree the users, workflow, information, access rules and the result the first version must deliver.",
      ],
      [
        "Design the first phase",
        "Prioritise essential functions and clarify dependencies, operating costs and what will remain outside the first release.",
      ],
      [
        "Build and verify",
        "Develop the agreed application with server-side validation, appropriate access controls and checks for important failure cases.",
      ],
      [
        "Pilot and improve",
        "Use real workflow feedback to refine the system, with support and future phases agreed explicitly.",
      ],
    ],
    boundary:
      "The starting price applies to a small, clearly defined scope. Multi-user platforms, complex integrations and operational systems require their own assessment and quotation.",
    example: null,
  },
] as const;
export const projects = [
  {
    slug: "unravel-viti",
    name: "Unravel Viti",
    category: "Tourism & transport",
    status: "Launch preparation",
    image: "/portfolio/unravel-home-20260920.jpg",
    description:
      "Turning a community-led tourism and transport vision into a clear digital storefront.",
    href: "/case-studies/unravel-viti",
    external: false,
    label: "Read the case study",
  },
  {
    slug: "vatudei",
    name: "Vatudei Travel",
    category: "Travel & visa services",
    status: "In development",
    image: "/portfolio/portfolio-vatudei.jpg",
    description:
      "A website build centred on a women-led business, its real team and a guided route to the right service.",
    href: "/case-studies/vatudei",
    external: false,
    label: "Explore the project",
  },
  {
    slug: "dfc",
    name: "Discount Flight Centre",
    category: "Travel & trade communications",
    status: "Website & campaign work",
    image: "/portfolio/portfolio-dfc.jpg",
    description:
      "Clearer customer pathways and connected website and trade communications for a Fiji travel business.",
    href: "/case-studies/dfc",
    external: false,
    label: "Read the case study",
  },
  {
    slug: "jad",
    name: "JAD Travel",
    category: "Corporate & group travel",
    status: "Website redesign",
    image: "/portfolio/portfolio-jad.jpg",
    description:
      "A digital presence built around specialist knowledge, real people and the organisation’s history.",
    href: "/case-studies/jad",
    external: false,
    label: "Read the case study",
  },
  {
    slug: "macquarie",
    name: "Macquarie Travelworld",
    category: "Travel services",
    status: "Website project",
    image: "/portfolio/portfolio-macquarie.jpg",
    description:
      "A structured online presence introducing the business, its services and customer contact pathways.",
    href: "https://macquarie-travel-site.vercel.app",
    external: true,
    label: "View the website",
  },
  {
    slug: "careers",
    name: "Tokani Careers",
    category: "Community technology",
    status: "Public platform",
    image: "/portfolio/portfolio-careers.jpg",
    description:
      "A Fiji-focused tool for exploring subjects, careers and study pathways.",
    href: "https://careers.tokani.com.fj",
    external: true,
    label: "Explore Careers",
  },
  {
    slug: "quote-my-job",
    name: "Quote My Job",
    category: "Tools for small businesses",
    status: "Public tool",
    image: "/portfolio/portfolio-quote-my-job.svg",
    description:
      "A job-costing and pricing tool for builders and tradespeople.",
    href: "https://quotemyjob.tokani.com.fj",
    external: true,
    label: "Explore the tool",
  },
  {
    slug: "fnu",
    name: "FNU Programme Finder",
    category: "Education",
    status: "Tokani demonstration",
    image: "/portfolio/portfolio-fnu.jpg",
    description:
      "An institution-specific demonstration of programme navigation. It is not an official FNU platform or an admission decision tool.",
    href: "https://fnu-careers-app.vercel.app",
    external: true,
    label: "View the demonstration",
  },
];
export const caseStudies: Record<
  string,
  {
    name: string;
    title: string;
    intro: string;
    image: string;
    status: string;
    challenge: string;
    work: string[];
    capabilities: string[];
    relatedServices: { label: string; href: string }[];
    outcome: string;
    boundary: string;
    seoTitle: string;
    seoDescription: string;
    url?: string;
  }
> = {
  "unravel-viti": {
    name: "Unravel Viti",
    title: "A digital foundation for community-led tourism.",
    intro:
      "Business discovery, service structure and website development for a Fiji tourism and transport business.",
    image: "/portfolio/unravel-home-20260920.jpg",
    status: "Launch preparation",
    challenge:
      "Unravel’s vision spans transport, cultural experiences and community opportunity. The first website needed to give customers a clear starting point without forcing every future ambition into launch.",
    work: [
      "Mapped transfers, cultural experiences and enquiry paths into a site structure that keeps the launch offer understandable.",
      "Built dedicated experience pages with reusable editorial layouts and authentic client photography.",
      "Implemented responsive image delivery and gallery-specific crops for an image-heavy tourism experience on desktop and mobile.",
      "Added customer review presentation while keeping the published testimonial format privacy-conscious.",
      "Prepared descriptive metadata, page hierarchy and internal links around Fiji tourism, Suva experiences and transport-related search intent.",
    ],
    capabilities: [
      "Business discovery & service architecture",
      "Fiji tourism UX",
      "Responsive website development",
      "Image performance workflow",
      "Local SEO foundations",
    ],
    relatedServices: [
      { label: "Yavu — Websites & digital foundations", href: "/services/website-development" },
    ],
    outcome:
      "A coherent digital storefront that presents Unravel’s transport and cultural experiences through a clearer customer journey, with a technical foundation that can support launch and later service growth.",
    boundary:
      "This case study describes the website work delivered. Final domain, contact channels, enquiry delivery and launch arrangements need confirmation before it is represented as a fully operational booking service. Booking growth and conversion improvements have not been measured here.",
    seoTitle: "Unravel Viti — Fiji Tourism Website Case Study",
    seoDescription:
      "See how Tokani structured Unravel Viti’s Fiji tourism and transport services into a responsive website with authentic imagery and local SEO foundations.",
    url: "https://unravel-viti.vercel.app",
  },
  vatudei: {
    name: "Vatudei Travel",
    title: "Make the first step feel clearer.",
    intro:
      "Website design and guided service navigation for a women-led travel and visa business in Fiji.",
    image: "/portfolio/portfolio-vatudei.jpg",
    status: "In development",
    challenge:
      "Vatudei needed an online presence that reflects its people and experience while helping customers understand what kind of assistance to ask for without turning a low-volume, walk-in-led business into an unnecessarily complex booking system.",
    work: [
      "Structured the website around destinations, visa-support services and travel assistance.",
      "Introduced the business through its official identity and real team and office photography.",
      "Built a three-step Visa Navigator that suggests a service from a destination, visa category and customer situation without presenting itself as an eligibility decision.",
      "Established responsive layouts and mobile navigation for customers arriving from phones and social links.",
      "Kept the next operational step enquiry-led, rather than adding appointment scheduling that the business does not currently need.",
    ],
    capabilities: [
      "Service discovery & UX",
      "Website development",
      "Guided service navigation",
      "Responsive mobile design",
      "Practical scope control",
    ],
    relatedServices: [
      { label: "Yavu — Websites & digital foundations", href: "/services/website-development" },
    ],
    outcome:
      "A website build and working service-navigation interface that can support a clearer first conversation with the Vatudei team while leaving unnecessary appointment complexity out of the first release.",
    boundary:
      "The project is in development. The agreed next step is a simple enquiry-led journey; appointment scheduling is deferred. This project does not claim live appointment booking, production email delivery or visa-eligibility assessment.",
    seoTitle: "Vatudei Travel — Travel & Visa Website Case Study",
    seoDescription:
      "A Fiji travel and visa website case study covering service structure, guided navigation, responsive design and a deliberately simple enquiry-led customer journey.",
  },
  dfc: {
    name: "Discount Flight Centre",
    title: "Turn travel complexity into a clearer customer decision.",
    intro:
      "Website, interactive fare guidance and travel-planning tools for Discount Flight Centre in Fiji.",
    image: "/portfolio/portfolio-dfc.jpg",
    status: "Website & campaign work",
    challenge:
      "DFC needed more than a general travel website. Customers also need help understanding fare trade-offs, preparing for travel and reaching the right consultant without mistaking general guidance for a live airline quote.",
    work: [
      "Created clearer entry points for flights, holidays, visa support, existing bookings, corporate travel and other specialist assistance.",
      "Built an interactive Fare Pick Helper that lets customers compare fare-family trade-offs around price, baggage, flexibility and refundability across selected airlines.",
      "Connected selected airline and fare choices into the enquiry pathway so a customer can carry useful context into the conversation with DFC.",
      "Built a Before You Travel Planner covering passports, visas, booking details, baggage, insurance, assistance and airport preparation, with progress stored in the customer’s browser.",
      "Extended DFC’s identity and travel expertise into service content, trade communications and search-oriented page structure.",
    ],
    capabilities: [
      "Travel-industry UX",
      "Interactive fare comparison",
      "Client-side planning workflow",
      "Service pathway design",
      "SEO & content architecture",
    ],
    relatedServices: [
      { label: "Yavu — Websites & digital foundations", href: "/services/website-development" },
      { label: "Qaqa — Custom systems & applications", href: "/services/custom-systems" },
    ],
    outcome:
      "A more useful travel website that combines service discovery with practical decision-support tools, while keeping live pricing, availability and final fare-rule confirmation with DFC consultants.",
    boundary:
      "The fare guide is general guidance rather than a live quote or guarantee of availability. Airline rules vary by route, operating carrier, fare basis and travel date. The outcomes here describe delivered design, content and interactive functionality; no increase in sales, search rankings or enquiry conversion is claimed.",
    seoTitle: "Discount Flight Centre — Fare Guide & Travel Website Case Study",
    seoDescription:
      "See how Tokani combined a Fiji travel website with an interactive fare guide, enquiry context and a browser-based before-you-travel planning tool.",
    url: "https://dfc-main-website.vercel.app",
  },
  jad: {
    name: "JAD Travel",
    title: "Put the people, heritage and expertise at the centre.",
    intro:
      "A website redesign shaped around JAD’s corporate, group and specialist travel expertise.",
    image: "/portfolio/portfolio-jad.jpg",
    status: "Website redesign",
    challenge:
      "A general travel website did not communicate enough of the organisation’s history, specialist knowledge, corporate coordination approach or the people customers would work with.",
    work: [
      "Reframed the website around JAD’s heritage and expertise in corporate, group and specialist travel support.",
      "Placed current team members and their areas of expertise across relevant service pages instead of limiting credibility to a generic About page.",
      "Added a clearer corporate travel coordination workflow so organisational customers can understand how JAD approaches more complex travel.",
      "Developed the JAD Travel Desk knowledge hub and original editorial guides to turn specialist knowledge into useful customer content.",
      "Standardised responsive page presentation and search metadata across the expanded site structure.",
    ],
    capabilities: [
      "Content strategy",
      "Corporate travel information architecture",
      "Editorial SEO content",
      "Team-led credibility",
      "Responsive website development",
    ],
    relatedServices: [
      { label: "Yavu — Websites & digital foundations", href: "/services/website-development" },
    ],
    outcome:
      "A professional digital presence that gives prospective customers a clearer understanding of JAD’s history, people, service areas and specialist travel knowledge.",
    boundary:
      "This case study describes website and content delivery. Commercial performance and search improvements require separate measurement.",
    seoTitle: "JAD Travel — Corporate Travel Website Case Study",
    seoDescription:
      "A Fiji corporate travel website case study covering service architecture, team expertise, editorial content and a clearer organisational travel workflow.",
    url: "https://jad-site-build.vercel.app",
  },
};
