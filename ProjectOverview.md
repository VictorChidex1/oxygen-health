Project Textbook: "OXYGEN PROTOCOL" – High-Ticket Conversion Engine
Abstract
OXYGEN PROTOCOL is a specialized, "Medical Authority" landing page for Oxygen Health Systems.

The goal is to move the client away from a generic "store" look to a high-trust, clinical interface capable of selling $10k+ medical devices. The core conversion thesis is "Authority & Safety," leveraging specific certifications to crush objections against cheaper imports.

Core Objective: Build a React-based funnel that loads instantly, integrates seamlessly with GoHighLevel (GHL), and runs A/B split tests to optimize revenue.

Tech Stack:

Frontend: React (Vite) + TypeScript.

Styling: Tailwind CSS (Custom Config).

Analytics/Testing: PostHog (for server-side A/B testing).

CRM Integration: GoHighLevel (via Webhooks).

Hosting: Firebase Hosting.

Chapter 1: The "Michael" Specification Map (Client Constraints)
This section outlines the hard requirements explicitly requested by Michael Carroll.

1.1 The Integration (GoHighLevel)
Requirement: Michael explicitly stated, "We use go high level currently... Can u integrate that".

Implementation: We will use Webhooks.

When a lead is captured, the React app sends a JSON payload to the GHL webhook URL, instantly injecting the lead into his sales team's pipeline.

1.2 The Split Testing (Crucial)
Requirement: Michael stated, "The landing page should be tracked with a b split testing".

Implementation: We will use PostHog for server-side split testing to track which headline drives more revenue.

1.3 The Assets (Certifications)
Requirement: We must display the specific certifications Michael provided.

The List:

ASME CERTIFIED (Manufacturing facility).

CE Approved (All chambers).

3 ISO Approvals (Quality & Safety standards).

"Top Doctor Magazine" (Front Cover Feature).

Chapter 2: UI/UX Design System (The "Clinical Authority" Brand)
Conflicting colors have been resolved for maximum visibility.

2.1 The Palette (Tailwind Config)
Brand Navy (Primary): #0f2d63 (Used for Hero Backgrounds, Text on White).

Action Blue (Secondary/Hover): #1651a9 (Used for secondary links and hover states).

Medical White: #FFFFFF (Clean, sterile backgrounds).

Trust Accents: Metallic Gold/Silver (bg-gray-100, border-gray-300) for the ISO/ASME badges.

2.2 Component Styling
The Hero Section:

Background: Solid Brand Navy (#0f2d63).

Headline: White Sans-Serif (Inter/Roboto).

CTA Button: White (Text: #0f2d63) or Gold to contrast against the Navy background. Do not use a Blue button here.

The "White" Sections (Comparison Table/Features):

Background: White.

Headlines: Brand Navy (#0f2d63).

CTA Button: Brand Navy (#0f2d63) (Text: White). This matches the branding you extracted perfectly.

Chapter 3: Data Architecture (The Pipeline)
3.1 The "Invisible" Form
To keep the site fast, we are not embedding a heavy GHL iframe. We are building a custom React form.

The Data Flow:

User fills out "Get Pricing" form.

React posts data to GHL Webhook (Backend Logic).

User is redirected to a "Thank You" page.

3.2 A/B Testing Logic (PostHog)
Experiment: hero_headline_test

Variant A: "Clinical Grade Hyperbaric Chambers."

Variant B: "Recover Faster with Medical-Grade Oxygen."

Goal: Track which text leads to more form submissions.

Chapter 4: Execution Plan (The 48-Hour Sprint)
Based on your promise to Michael:

Asset Collection: Pull the high-res logo and ISO/ASME logos from the Drive link.

Hero Section Draft: Design the "High-Trust" Hero Section using the Navy Blue (#0f2d63) background.

Feedback Loop: Send the preview to Michael by [Day after Tomorrow].
