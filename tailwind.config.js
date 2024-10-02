// import { GiSmallFire } from 'react-icons/gi';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        colors: {
            primary: '#FADC41',
            fontColor: '#282828',
            brownG: "#422204"
          },
          width : {
            mainSize: '65%',
            smallSize: '90%',
          }
    },
  },
  plugins: [],
};
