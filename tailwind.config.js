/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F5F8F7",
         'grey-90': '#1D2939', 
        secondary: '#011C39',
        deepblue: '#01042D',
        vancoreBlue: '#0A6DEE',
        gradientStart1: '#44DFFE',
        gradientEnd1: '#1A51F2',
        gradientStart2: '#DC85F6',
        gradientEnd2: '#6673F6',
        
        // More custom colors will be added as we meet them
      },
      fontFamily: {
        sans: ["Sora", "sans-serif"],
      },
      maxWidth: {
        container: "1440px",
      },
       boxShadow: {
        navbar: '0px 10px 7px 5.973px rgba(173, 174, 177, 0.06)',
      },

      backdropBlur: {
        custom: '22px',
      },
    },
  },
  plugins: [],
}







/** @type {import('tailwindcss').Config} 
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}*/

