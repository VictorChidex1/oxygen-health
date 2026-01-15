🧠 Project Context: OXYGEN PROTOCOL (Clinical Sales Engine)
📌 Project Overview
We are engineering a high-performance "Clinical Authority" Landing Page for Oxygen Health Systems.

Goal: Transform the client's generic e-commerce presence into a high-trust sales funnel capable of converting $10k+ medical device buyers. We are not building a store; we are building an argument for safety and quality.

Core Value: "Medical Authority." The UI must feel sterile, engineered, and premium—like a hospital crossed with Apple.

Constraint: 48-Hour Sprint. The Hero Section and Core Architecture must be ready for client review by [Day after Tomorrow].

Platform: Firebase Hosting (Single Page Application).

🤝 AI Collaboration Protocol (Strict)
"CLINICAL GRADE" FIRST: Do not suggest "playful" or "trendy" designs. Every UI decision must answer: "Does this make the product look safe and ISO-certified?"

PERMISSION FIRST: You must ask for explicit permission before adding dependencies or changing the core stack (e.g., swapping Firestore for Realtime DB).

THE "CONVERSION" RULE: Before suggesting code, explain the sales logic:

The Risk: "If we put the price too early, they will bounce."

The Value: "Placing the ISO badges above the fold immediately handles the 'safety' objection."

NO LOREM IPSUM: Use real content from OxygenHealthSystems.com or the approved copy in OxygenProtocol.md.

🛠 Tech Stack (Strict)
Frontend: React (Vite) + TypeScript.

Styling: Tailwind CSS (v3.4). Medical Theme (Clean White/Navy).

Analytics: PostHog (Server-Side Split Testing).

Backend: Firebase (Hosting).

Integration: GoHighLevel (GHL) Webhook (via fetch or Firebase Cloud Function proxy).

Routing: React Router DOM (v6) or Single Page Scroll.

Icons: Lucide-React (Clean, sharp stroke icons).

🎨 Design System (Strict)
Theme: "The Clinical Palette" (Sterile, Trusted, Engineered).

Backgrounds:

Hero: Brand Navy (#0f2d63). Dark, premium, allows white text to pop.

Body: Medical White (#ffffff). Clean and spacious.

Primary Action (The "Go" Signal):

Hero CTA: White or Gold (Contrast against Navy).

Body CTA: Brand Navy (#0f2d63).

Note: Do not use Navy buttons on Navy backgrounds.

Accents (Trust Signals):

Badges: Metallic Silver/Gold (bg-gray-100, border-gray-300). Used for ISO/ASME logos.

Links: Action Blue (#1651a9).

Typography:

Font: Inter or Roboto.

Headings: Bold, authoritative.

Body: Slate Gray (text-slate-600). NEVER pure black (#000000).

🏗 Architecture & Data Flow
The "Invisible" Pipeline: We capture data without slowing down the user experience.

Step 1: The React Form

User enters details (Name, Phone, Email) into a custom React component.

Validation: Phone number regex check (must be valid for GHL to accept it).

Step 2: The Webhook Transmission

Action: POST request to the GHL Webhook URL.

Payload: { name, phone, email, source: "Oxygen Landing Page" }

Fallback: If CORS fails, route through a Firebase Cloud Function.

Step 3: The Split Test (PostHog)

The Hero component requests a variant flag from PostHog on load.

Variant A: "Clinical Grade Hyperbaric Chambers."

Variant B: "Recover Faster with Medical-Grade Oxygen."

📝 Coding Guidelines
TypeScript: Strictly typed. Interfaces for LeadData and WebhookResponse.

Component Modularity:

src/components/Hero.jsx

src/components/TrustBadge.jsx

src/components/ComparisonTable.jsx

Error Handling:

If GHL Webhook fails, store lead in localStorage or Firestore as a backup so the lead is never lost.

Show a user-friendly "Success" modal regardless of backend speed.

💬 Code Commenting Standards (Strict)
Goal: Comments must explain the Sales Psychology, not just syntax.

BAD: // Button click handler

GOOD: // Triggers GHL Webhook to inject lead instantly into the sales pipeline before redirecting to the Thank You page.

BAD: // Flex row with 3 items

GOOD: // We place ISO badges horizontally under the main image to immediately validate safety claims before the user scrolls.
