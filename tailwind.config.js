/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fade: "fadeIn .6s ease-in-out",
        fadeOut: "fadeOut 5s ease-in-out",
        delay: "delay .8s ease-in-out",
        rtl: "rtl .6s ease-in-out",
        ltr: "ltr .6s ease-in-out",
        floating: "floating 3s ease-in-out infinite",
        topDown: "topDown 0.4s ease-in-out",
        spinReverse: "spinReverse 1s linear infinite",
      },
      // that is actual animation
      keyframes: () => ({
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(16px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
        fadeOut: {
          "0%": { opacity: 1, transform: "translateY(0px)" },
          "90%": { opacity: 1, transform: "translateY(0px)" },

          "100%": { opacity: 0, transform: "translateY(16px)" },
        },

        delay: {
          "0%": { opacity: 0, transform: "translateY(16px)" },
          "50%": { opacity: 0, transform: "translateY(8px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
        rtl: {
          "0%": { opacity: 0, transform: "translateX(10%)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        ltr: {
          "0%": { opacity: 0, transform: "translateX(-10%)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        floating: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-5px)" },
          "100%": { transform: "translateY(0px)" },
        },
        topDown: {
          "0%": { opacity: 0, transform: "translateY(-50%)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        spinReverse: {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      }),
    },
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
      //format example
      // customFont: ['"Custom Font"', "sans-serif"],
      Poppins: ['"Poppins"', "sans-serif"],
      PressStart2P: ['"Press Start 2P"', "sans-serif"],
      Inter: ['"Inter Variable"', "sans-serif"],
    },
  },
  darkMode: "class",
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
    // darkTheme: "dark", // name of one of the included themes for dark mode
    // base: true, // applies background color and foreground color for root element by default
    // styled: true, // include daisyUI colors and design decisions for all components
    // utils: true, // adds responsive and modifier utility classes
    // prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    // logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    // themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
