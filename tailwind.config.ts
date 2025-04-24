
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
        // Trendy color palette for 2025
        trendy: {
          primary: '#9B87F5',   // Soft purple
          secondary: '#7E69AB', // Deeper purple
          accent: '#1EAEDB',    // Bright blue
          neutral: '#8E9196',   // Neutral gray
        }
      },
      backgroundColor: {
        'light-dot': '#F1F0FB'  // Light background color
      },
      backgroundImage: {
        'dot-pattern': 'radial-gradient(circle at 1px 1px, rgba(145, 134, 245, 0.1) 1px, transparent 0)'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
