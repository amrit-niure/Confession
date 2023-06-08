/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        leftNav : "rgba(2,0,36,1)",
        rightNav : "rgba(9,9,121,1)",
        lyftPink : "#FF00BF",
        blackish : "rgba(44, 39, 39, 1)",
        lightWhite : "#F2EFEF",
        lightText : "#776B6B",
      },
      fontFamily :{
        font :"'Titillium Web', 'sans-serif'"
      },
      fontWeight :{
        thin : '200',
        light: '300',
        regular : '400',
        bold :'700',
      }
    },
  },
  plugins: [],
}

