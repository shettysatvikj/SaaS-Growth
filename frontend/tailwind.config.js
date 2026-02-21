/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {colors: {
        primary: "#4f46e5",
        primaryDark: "#4338ca",
        accent: "#f97316"
      }},
  },
  plugins: [],
}

