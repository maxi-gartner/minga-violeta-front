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
          "mangasFotito1" : "url('/mangasFotito1.png')",
          "mangasFotito2" : "url('/mangasFotito2.png')",
          "mangasFotito3" : "url('/mangasFotito3.png')",
        },
        fontFamily: {
          'poppins': 'Poppins',
          'montserrat': 'Montserrat',
        }
    }
    
  },
  plugins: [],
}

