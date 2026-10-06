export const jadTechnologies = [
  ["React & TypeScript", "Reusable page components and typed application code for the custom website."],
  ["Vite & esbuild", "Frontend builds and bundled server code for deployment."],
  ["Tailwind CSS, Radix UI & Lucide", "Responsive styling, form and dialog components, and consistent interface icons."],
  ["Wouter & TanStack Query", "Page routing and shared request handling in the React application."],
  ["React Hook Form & Zod", "Form state, field feedback and validation, with schemas checked again on the server."],
  ["Node.js & Express", "Backend enquiry routes that validate submissions and coordinate email delivery."],
  ["Resend API & HTML email design", "Reservations-team notifications and branded customer acknowledgements with form-specific subjects and reply addresses."],
  ["Cloudflare Turnstile", "Bot checks before submission, with tokens verified on the server and production hostnames checked."],
  ["DOMPurify & JSDOM", "Sanitisation of submitted content before it is included in notification emails."],
  ["express-rate-limit & security headers", "Submission throttling and browser protections configured alongside the form workflow."],
  ["Vercel & GitHub", "Hosting, API deployment, version control and deployment configuration."],
  ["SEO & content architecture", "Service-led page structure, route-specific titles and descriptions, canonical links and structured data."],
  ["Node.js test runner", "Automated checks for enquiry routes, email failure handling and Turnstile verification behaviour."],
] as const;

export const jadConnectedForms = [
  ["Medical travel", "Medical-travel requests and assistance requirements"],
  ["Visa assistance", "Visa-support requests and travel details"],
  ["Group travel", "Group quote requests, size, destination and requirements"],
  ["Travel quote", "Travel and corporate quote enquiries"],
  ["Business consultation", "Corporate travel and business consultation requests"],
  ["Partnership", "Organisation and partnership enquiries"],
  ["Promotion", "Enquiries about a selected promotion"],
  ["Contact", "General enquiries and selected service interests"],
] as const;
