// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default { // Use export default for Vite
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [], // No need for @tailwindcss/typography etc. here yet unless you explicitly add them later
  };