// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        primary:"#102C57",
        secondary: "#F3D0D7",
        backgold:"#C40C0C",
        backpink:"#F5F5DC",
        backwhite:"#F6F5F2",
        white:"#EEEEEE"
      },
      container:{
        center:true,
        padding:{
          DEFAULT:'1rem',
          sm :'3rem',
        }
      }
    },
  },
  plugins: [],
}