/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
          colors: {
            whiteColor:'rgb(235, 235, 235)',
            titleColor: 'rgb(26, 26, 26)',
            backgroundColor: '#fbf7f0',
            buttonColor: '#f4c877',
            priceColor: 'rgb(228, 0, 0)',
            textColor: '#fff'


          },
          fontFamily: {

          syne: ["'Syne, sans-serif"],

          },
  
          fontSize: {
  
          xs:["clamp(.8rem, 10vw, 1.3rem)"],

          sm:["clamp(1.2rem, 10vw, 1.6rem)"],

          sbase:["clamp(1.4rem, 10vw, 1.8rem)"],
  
          base:["clamp(1.6rem, 10vw, 2rem)" ],
  
          lg:["clamp(2rem, 10vw, 3rem)" ],
  
          xl:["clamp(3.73rem, 10vw, 4rem)"],
    
          "1xl":["clamp(4.19rem, 10vw, 4.8rem)"],

          "2xl":["clamp(4.6rem, 10vw, 5rem)"],
  
          "3xl":["clamp(4.8rem, 10vw, 6rem)"],
  
          "4xl":["clamp(5rem, 10vw, 7.5rem)"],

          "5xl":["clamp(6rem, 10vw, 8rem)"],
          
      },

      fontWeight:{
        font_regular:'400',
        font_medium:'500',
        font_semibold:'600',
        font_bold:'700',
        font_extrabold: '800',
      },
      width:{

        'w90': "90%",
        'w85': "85%",
        'w80': "80%",
        'w23': "23rem",
        'w28': "28rem",
        


      },
      height:{

       'h90': "90vh",
       'h10': "10vh",
       'h28': "28rem",


      },

      screens: {

          xs: "360px",
          s412: "412px",
          ss: "500px",
          sm: "768px",
          md: "1024px",
          lg: "1200px",
          xl: "1400px",

      },

      },

  plugins: [],
  },
};
