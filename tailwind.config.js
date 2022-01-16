module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "main-dark":"#1B1B1B",
        "main-light":"#E9E9E9",
        "secondary-light":"#DDDBCB",
        "background-light":"#F5F1E3",
        "main-blue":"#1B9AAA",
      },
      fontFamily: {
        'Oswald': ['"Oswald"', "sans-serif"],
        'Montserrat': ['"Montserrat"',"sans-serif"] // Ensure fonts with spaces have " " surrounding it.
      },
    },
  },
  plugins: [],
}
