/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        
        "sunny": '#00A8E8',
        "afternoon": '#DE8350',
        "night": '#141722',

        "lightgray":'#BEBEBE',
        "darkgray": '#696969',

        "dark-background": '#323232',
        "dark-background-input": '#2C2C2C',
        "dark-input-border": '#696969',
        "dark-menu-selected": '#696969',
        "dark-menu-background": '#393737',

        "yellow-btn": '#FFF84A',


      }
    },
  },
  plugins: [],
}
