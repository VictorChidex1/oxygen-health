# Oxygen Health - Clinical Grade Hyperbaric Chambers

This is the official landing page repository for Oxygen Health Systems, designed with a "Clinical Authority" aesthetic to build trust and convert high-ticket sales.

## 🚀 Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Backend/Hosting**: [Firebase](https://firebase.google.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## ✨ Key Features

### 1. Hero Section ("The Trust Layer")

- **Top Doctor Authority Badge**: Glassmorphism design with a "Gentle Drop" entrance animation and "Spring Physics" hover effect.
- **Trust Bar**: Staggered fade-in entrance for ISO/ASME certification logos.
- **Product Video**: Custom video component with a soft glow effect and a pulsed "LIVE VIEW" badge.

### 2. Design System ("Clinical Palette")

- **Brand Navy**: `#0f2d63` (Primary Background)
- **Action Blue**: `#1651a9` (Primary Buttons)
- **Medical White**: `#FFFFFF` (Text & Accents)
- **Trust Accents**: Metallic Gold & Silver nuances.

### 3. Architecture

- **Component-Based**: Modular UI components located in `src/components/ui`.
- **Secure Env**: Firebase keys stored in `.env.local`.
- **Asset Management**: Images and videos served from `public/assets`.

## 🛠️ Getting Started

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/VictorChidex1/oxygen-health.git
    cd oxygen-health
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

3.  **Run the development server**:

    ```bash
    npm run dev
    ```

4.  **Build for production**:
    ```bash
    npm run build
    ```

## 📂 Project Structure

```
oxygen-health/
├── public/
│   └── assets/          # Static images and videos (ISOs, badges, logos)
├── src/
│   ├── components/
│   │   ├── layout/      # Global wrappers (Navbar, Footer)
│   │   ├── sections/    # Main blocks (Hero, etc.)
│   │   └── ui/          # Reusable UI components (Buttons, Badges)
│   ├── hooks/           # Custom React Hooks
│   ├── lib/             # Configuration & Helpers (Firebase, Utils)
│   ├── types/           # TypeScript Definitions
│   ├── App.tsx          # Main Layout Structure
│   ├── main.tsx         # Entry Point
│   └── index.css        # Global Styles
├── .env.local           # Environment variables (GitIgnored)
└── tailwind.config.ts   # Design system configuration
```

## 🔒 Security

- API Keys are accessed via `import.meta.env` and stored in `.env.local`.
- Strict TypeScript linting ensures code reliability.

## 🤝 Contribution

This project follows a strict "Clinical Grade" design philosophy.

- No playful animations.
- High contrast, professional typography.
- Accessibility first.

---

_Built with precision for Oxygen Health Systems._
