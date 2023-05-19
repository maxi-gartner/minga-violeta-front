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
        },
        fontFamily: {
          'poppins': 'Poppins',
          'montserrat': 'Montserrat',
        },
        screens: {
          'msm': {'min': '320px', 'max': '425px'},
          'mmd': {'min': '426px', 'max': '768px'},
          'mlg': {'min': '769px', 'max': '1023px'},
          'mxl': {'min': '1024px', 'max': '1350px'},
          'm2xl': {'min': '1351px'},
  
        }
    }
    
  },
  plugins: [],
}

