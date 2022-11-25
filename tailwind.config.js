module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'headerbuttonbackgroundcolor' : 'linear-gradient(90deg, #FF8A52 0%, #CDDA4F 105.35%)'
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-9.2rem)' },
        },
        backgroundsize : {
          '0%' : {backgroundPosition : '100% 0%'} , 
          '50%' : {backgroundPosition : '0% 0%'} ,
          '100%' : {backgroundPosition : '100% 0'} , 
          //linear-gradient(90deg,#FF8A52,#CDDA4F,#FF8A52,#CDDA4F);
        }
      } , 
      animation: {
        wiggle: 'wiggle 10s linear infinite',
        backgroundsize : 'backgroundsize 3s linear infinite'
      }
    },
  },
  plugins: [],
}