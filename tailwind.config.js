/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        colors: {
            primary: '#FADC41',
            fontColor: '#282828',
          },
          width : {
            mainSize: '65%',
          }
    },
  },
  plugins: [],
};
