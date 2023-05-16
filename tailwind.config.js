/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: [
    './src/**/*.{js,jsx,ts,tsx}'  //esto también es una forma de englobar subdirectorios
  ],
  theme: {
    extend: {
        colors: {
            minga1: "black",
            minga2: "#F9A8D4",
            logo: "#18181b"
        },
        backgroundColor: {
            minga1: "#F9A8D4",
            minga2: "black",
        },
        backgroundImage: {
          "mangasGirlM" : "url('/mangasGirlM.png')",
          "mangasGirlD" : "url('/mangasGirlD.png')",
          "newRole-bg" : "url('/newRole-bg.png')",
          "adminPanel-bg" : "url('/adminPanel-bg.png')"
        },
        fontFamily: {
          'poppins': 'Poppins',
          'montserrat': 'Montserrat',
        }
    }
    
  },
  plugins: [],
}

