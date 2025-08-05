# Jagadeesh Kovi - Portfolio Website

A modern portfolio website showcasing AI/ML research and data engineering expertise.

## Project Overview

This portfolio website presents Jagadeesh Kovi's professional experience, projects, and skills in artificial intelligence, machine learning, and data engineering.

## Technologies Used

This project is built with:

- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe JavaScript development
- **React** - Component-based UI framework
- **shadcn/ui** - Modern component library
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Three Fiber** - 3D graphics with Three.js

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd jagakovi
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   ├── ExperienceSection.tsx
│   ├── HeroSection.tsx
│   ├── ProjectsSection.tsx
│   └── SkillsSection.tsx
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
└── main.tsx           # Application entry point
```

## Deployment

Build the project for production:

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

## License

This project is private and proprietary.