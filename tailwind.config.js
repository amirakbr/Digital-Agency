module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens : {
      'phone' : '340px' , 
      'tablets' : '768px' , 
      'laptops' : '1100px' ,
      'md' : '1280px' , 
    } , 
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
        } , 
        hoverheadermenu : {
          '0%' : {transform: 'translateY(2rem)'} , 
          '100%' : {transform: 'translateY(0rem)'} , 
        } , 
        heroImageFloating : {
          '0%' : {transform: 'translateY(-1.2rem)'} ,
          '50%' : {transform: 'translateY(1.2rem)'} ,
          '100%' : {transform: 'translateY(-1.2rem)'} , 
        } , 
        FloatBanner : {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-19rem)' },
        }
      } , 
      animation: {
        wiggle: 'wiggle 10s linear infinite',
        backgroundsize : 'backgroundsize 3s linear infinite' , 
        heroImageFloating : 'heroImageFloating 10s linear infinite' , 
        FloatBanner: 'FloatBanner 5s linear infinite',
        hoverheadermenu: 'hoverheadermenu .2s linear forwards',
      }
    },
  },
  plugins: [],
}
/*
translateX(-38.157rem)
*/