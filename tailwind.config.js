/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "534px", // pc dev
      md: "640px", // Tablet M9 แนวตั้ง M9-2
      lg: "1072px", // Tablet M9 แนวนอน M9
      xl: "1340px",
      "2xl": "1912px", //pc dev
    },
    container: {
      padding: {
        DEFAULT: "0.5rem",
        md: "1rem",
        lg: "1rem",
        xl: "1rem",
        "2xl": "1rem",
      },
    },
    fontFamily: {
      Poppins: ['"Poppins"', "sans-serif"],
      PressStart2P: ['"Press Start 2P"', "sans-serif"],
      Inter: ['"Inter Variable"', "sans-serif"],
    },
  },
  darkMode: "class",
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
    // darkTheme: "dark", // name of one of the included themes for dark mode
    // base: true, // applies background color and foreground color for root element by default
    // styled: true, // include daisyUI colors and design decisions for all components
    // utils: true, // adds responsive and modifier utility classes
    // prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    // logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    // themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
