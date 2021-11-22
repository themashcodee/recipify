module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "white-900": "#ffffff",
        "white-800": "#eeeeee",
        "white-700": "#e5e5e5",
        "white-600": "#d5d5d5",
        "white-500": "#c5c5c5",
        "black-900": "#121212",
        "black-800": "#212121",
        "black-700": "#333333",
        "black-600": "#444444",
        "black-500": "#555555",
      },
      maxHeight: {
        "max": 'max-content'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
