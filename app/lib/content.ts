export const services = [
  {
    slug: "website-development",
    stage: "Yavu",
    meaning: "Foundation",
    number: "01",
    title: "Website development in Fiji",
    short: "A professional place to start.",
    description:
      "Give customers a clear picture of your business and a simple way to get in touch. Tokani builds websites around your services, your customers and the way you work.",
    price: "FJD 500",
    priceNote: "Foundation package",
    includes: [
      "Up to five website pages",
      "Professional business email setup",
      "Hosting, SSL, analytics setup and handover",
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
    short: "Keep the next step moving.",
    description:
      "Keep enquiries, customer information and follow-up in one organised process. We help Fiji businesses introduce CRM and practical workflows that a small team can actually maintain.",
    price: "FJD 1,650",
    priceNote: "Website and CRM package",
    includes: [
      "Up to eight website pages",
      "CRM setup for one user",
      "Lead pipeline, tasks and basic automation",
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
    image: "/portfolio/portfolio-unravel.jpg",
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
    outcome: string;
    boundary: string;
    url?: string;
  }
> = {
  "unravel-viti": {
    name: "Unravel Viti",
    title: "A digital foundation for community-led tourism.",
    intro:
      "Business discovery, service structure and website development for a Fiji tourism and transport business.",
    image: "/portfolio/portfolio-unravel.jpg",
    status: "Launch preparation",
    challenge:
      "Unravel’s vision spans transport, cultural experiences and community opportunity. The first website needed to give customers a clear starting point without forcing every future ambition into launch.",
    work: [
      "Organised transport and cultural experiences into clear customer pathways.",
      "Developed individual experience pages and a structured enquiry interface.",
      "Used authentic client photography to explain the experience and the people behind it.",
      "Prepared page metadata, search structure and an image-delivery workflow.",
    ],
    outcome:
      "A coherent digital storefront that gives Unravel a foundation for presenting services and developing its customer enquiry journey.",
    boundary:
      "This case study describes the website work delivered. Final domain, contact channels, enquiry delivery and launch arrangements need confirmation before it is represented as a fully operational booking service. Booking growth and conversion improvements have not been measured here.",
    url: "https://unravel-viti.vercel.app",
  },
  vatudei: {
    name: "Vatudei Travel",
    title: "Make the first step feel clearer.",
    intro:
      "Website design and service guidance for a women-led travel and visa business in Fiji.",
    image: "/portfolio/portfolio-vatudei.jpg",
    status: "In development",
    challenge:
      "Vatudei needed an online presence that reflects its people and experience while helping customers understand what kind of assistance to ask for.",
    work: [
      "Structured the website around destinations, visa-support services and travel assistance.",
      "Introduced the business through its official identity and real team and office photography.",
      "Built a three-step Visa Navigator that suggests a service from a destination, visa category and customer situation.",
      "Established responsive layouts and a mobile navigation menu.",
    ],
    outcome:
      "A website build and working service-navigation interface that can support a clearer first conversation with the Vatudei team.",
    boundary:
      "The project is in development. The agreed next step is a simple enquiry-led journey; appointment scheduling is deferred. This project does not claim live appointment booking, production email delivery or visa-eligibility assessment.",
  },
  dfc: {
    name: "Discount Flight Centre",
    title: "Connect customers to the right travel conversation.",
    intro:
      "Website structure, content and trade communications for Discount Flight Centre.",
    image: "/portfolio/portfolio-dfc.jpg",
    status: "Website & campaign work",
    challenge:
      "The website needed to help customers find relevant assistance while making the local team and its service responsibilities easier to understand.",
    work: [
      "Created clearer entry points for flights, holidays, visa support, existing bookings and corporate travel.",
      "Used the company’s identity and authentic office imagery throughout the presentation.",
      "Developed content explaining local customer support and airline-representation services.",
      "Extended the visual and content approach into recurring trade-newsletter formats.",
    ],
    outcome:
      "A more coherent website and communications approach, with distinct routes into the team’s services.",
    boundary:
      "The outcomes here describe delivered design and content work. No increase in sales, search rankings or enquiry conversion is claimed.",
    url: "https://dfc-main-website.vercel.app",
  },
  jad: {
    name: "JAD Travel",
    title: "Put the people and expertise at the centre.",
    intro:
      "A website redesign shaped around JAD’s corporate and group travel expertise.",
    image: "/portfolio/portfolio-jad.jpg",
    status: "Website redesign",
    challenge:
      "A general travel website did not communicate enough of the organisation’s history, specialist knowledge or the people customers would work with.",
    work: [
      "Reframed the presentation around corporate, group and specialist travel support.",
      "Used JAD’s identity, office and team photography to make the experience recognisable.",
      "Organised the story and services into clearer sections.",
      "Developed practical editorial content to explain the team’s knowledge and approach.",
    ],
    outcome:
      "A professional digital presence that gives prospective customers a clearer understanding of JAD and its areas of expertise.",
    boundary:
      "This case study describes website and content delivery. Commercial performance and search improvements require separate measurement.",
    url: "https://jad-site-build.vercel.app",
  },
};
