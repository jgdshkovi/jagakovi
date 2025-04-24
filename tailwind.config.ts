
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Updated trendy color palette for 2025
        trendy: {
          primary: '#232323',    // Almost black
          secondary: '#E86A33',  // Coral orange
          accent: '#FEE8D8',     // Soft peach
          neutral: '#666666',    // Neutral gray
        }
      },
      backgroundColor: {
        'light-dot': '#FDF6F1'  // Very light warm background
      },
      backgroundImage: {
        'dot-pattern': 'radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.1) 1px, transparent 0)'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
