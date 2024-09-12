// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scans all files in src with .js, .jsx, .ts, and .tsx extensions
    "./public/index.html", // Scans your main HTML file (optional but recommended)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
