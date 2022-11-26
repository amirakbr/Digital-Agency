import { useEffect, useState } from 'react';
import HeroImage from '../../Assets/Hero/heroImage.png'
let heroString = 'We Are An Winning Digital Agency' ;
/*
 
             after:absolute after:w-full after:h-full after:top-0 after:left-0 laptops:after:none after:block after:content-["_"] after:z-[-1] after:bg-[#16192d8f] after:blur-[2rem]

*/
let HeroComponent = () => {
    const [HeroTitle , SetHeroTitle] = useState(false) ; 
    useEffect(()=>{
        let timeOutTyping = setTimeout(() => {
            SetHeroTitle(heroString.slice(0,HeroTitle.length + 1))
        }, 60);
        return () => clearTimeout(timeOutTyping)
    },[HeroTitle])
    return(
        <div className='grid laptops:grid-cols-[1fr_.8fr] block relative container mx-auto px-[2rem] mt-[2rem]'>
            <div className='leftSideHero flex flex-col laptops:items-start items-center laptops:text-start text-center laptops:max-w-[35rem] max-w-[unset] text-white
             p-[1rem_0.5rem] laptops:backdrop-blur-[0px] rounded-lg backdrop-blur-[5px] relative laptops:bg-[transparent] bg-[#31364833] z-10 
             after:absolute after:w-full after:h-full after:top-0 after:left-0 laptops:after:none after:block after:content-["_"] after:z-[-1]
              after:bg-[#31364833] laptops:after:bg-[transparent] laptops:after:blur-[0px] after:blur-[5px]'>
                <h1 className='hero--title p-[1rem_0] laptops:text-6xl text-4xl bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#77C4DD] 
                leading-[4.5rem] font-bold'>
                    {
                        HeroTitle ? HeroTitle : ' '
                    }
                </h1>
                <p className='mt-[1rem] leading-8 text-base font-medium'>
                    Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content
                </p>
                <button className='getStartedButton bg-[#102FD3] p-[.7rem_1.2rem] rounded mt-[3rem] text-lg font-semibold relative overflow-hidden'>
                    Get started
                    <div className='getStartedButtonHover1 absolute w-[calc(100%+6px)] left-[-3px] top-0 shadow-[0_0_0_2.8px_#CDDA4F]'></div>
                    <div className='getStartedButtonHover2 absolute h-[calc(100%+6px)] top-[-3px] right-0 shadow-[0_0_0_2.8px_#CDDA4F]'></div>
                    <div className='getStartedButtonHover3 absolute w-[calc(100%+6px)] bottom-0 left-[-3px] shadow-[0_0_0_2.8px_#CDDA4F]'></div>
                    <div className='getStartedButtonHover4 absolute h-[calc(100%+6px)] top-[-3px] left-0 shadow-[0_0_0_2.8px_#CDDA4F]'></div>
                </button>
            </div>
            <div className='w-full p-[1rem_0.5rem] laptops:relative absolute laptops:left-0 laptops:top-0 left-[50%] top-[50%] laptops:max-w-[auto]
             max-w-[40rem] laptops:translate-x-[0] translate-x-[-50%] laptops:translate-y-[0] translate-y-[-50%]'>
                <img alt='Computer Vector' className='animate-heroImageFloating' src={HeroImage} />
            </div>
        </div>
    )
}
export default HeroComponent ; 