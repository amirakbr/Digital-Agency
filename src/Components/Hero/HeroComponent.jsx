import HeroImage from '../../Assets/Hero/heroImage.png'


let HeroComponent = () => {
    return(
        <div className='grid grid-cols-[1fr_.8fr] container mx-auto px-[2rem] mt-[2rem]'>
            <div className='leftSideHero flex flex-col items-start max-w-[35rem] text-white'>
                <h1 className='hero--title p-[1rem_0] text-6xl bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#77C4DD] 
                leading-[4.5rem] font-bold'>
                    We Are An Winning
                    Digital Agency
                </h1>
                <p className='mt-[1rem] leading-8 text-base font-medium'>
                    Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content
                </p>
                <button className='bg-[#102FD3] p-[.5rem_1rem] rounded mt-[3rem] text-lg font-semibold'>
                    Get started
                </button>
            </div>
            <img src={HeroImage} />
        </div>
    )
}
export default HeroComponent ; 