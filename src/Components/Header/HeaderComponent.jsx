import { useState } from "react";
import { ReactComponent as HeaderLogo } from "../../Assets/Svg/headerLogo.svg"

let HeaderComponent = () => {
    const [CasedingMenu , SetCasedingMenu] = useState(false) ; 
    const [MobileCasedingMenu , SetMobileCasedingMenu] = useState(false) ; 
    return(
        <div className='tablets:container px-[3%]  mx-auto tablets:px-[2rem] mt-[1rem]'>
            <div className="phone:flex-row flex flex-col items-center justify-between text-white flex-wrap">
                <div className='flex items-center w-full phone:w-auto justify-between phone:justify-start'>
                    <div className="tablets:hidden relative flex flex-col justify-between w-HeaderHamburgerWidth h-HeaderHamburgerHeight z-[21] mr-[1rem]"
                     onClick={()=> MobileCasedingMenu ? SetMobileCasedingMenu(false) : SetMobileCasedingMenu(true) }>
                        {
                            MobileCasedingMenu ? 
                            <>
                                <span className="w-full border-b-HeaderItemBorderBottomWidth border-solid border-white absolute top-[50%] rotate-[45deg]">

                                </span>
                                <span className="w-full border-b-HeaderItemBorderBottomWidth border-solid border-white absolute top-[50%] rotate-[-45deg]">

                                </span>
                            </> : 
                            <>
                                <span className="w-full border-b-HeaderItemBorderBottomWidth border-solid border-white"></span>
                                <span className="w-full border-b-HeaderItemBorderBottomWidth border-solid border-white"></span>
                                <span className="w-full border-b-HeaderItemBorderBottomWidth border-solid border-white"></span>
                            </>
                        }
                        {
                                MobileCasedingMenu ? <>
                                    <div className="w-[max-content] absolute top-[3rem] bg-white flex flex-col items-center animate-hoverheadermenu">
                                        <p className="text-black hover:text-black p-[.5rem_1rem] font-[550] text-lg
                                        transation-all duration-[.25s] after:content-['_'] after:w-full after:border-b-[.15rem] 
                                        
                                        after:border-b-[solid] after:border-b-[#010728] after:scale-x-[0] hover:after:scale-x-[1] 
                                        after:transation-all after:duration-[.15s] after:origin-left cursor-pointer flex flex-col items-center">
                                            Design
                                        </p>
                                        <p className="text-black hover:text-black p-[.5rem_1rem] font-[550] text-lg
                                        transation-all duration-[.25s] after:content-['_'] after:w-full after:border-b-[.15rem] 
                                        
                                        after:border-b-[solid] after:border-b-[#010728] after:scale-x-[0] hover:after:scale-x-[1] 
                                        after:transation-all after:duration-[.15s] after:origin-left cursor-pointer flex flex-col items-center">
                                            Web development
                                        </p>
                                        <p className="text-black hover:text-black p-[.5rem_1rem] font-[550] text-lg
                                        transation-all duration-[.25s] after:content-['_'] after:w-full after:border-b-[.15rem] 
                                        
                                        after:border-b-[solid] after:border-b-[#010728] after:scale-x-[0] hover:after:scale-x-[1] 
                                        after:transation-all after:duration-[.15s] after:origin-left cursor-pointer flex flex-col items-center">
                                            Contents
                                        </p>
                                        <p className="text-black hover:text-black p-[.5rem_1rem] font-[550] text-lg
                                        transation-all duration-[.25s] after:content-['_'] after:w-full after:border-b-[.15rem] 
                                        
                                        after:border-b-[solid] after:border-b-[#010728] after:scale-x-[0] hover:after:scale-x-[1] 
                                        after:transation-all after:duration-[.15s] after:origin-left cursor-pointer flex flex-col items-center">
                                            Social media
                                        </p>
                                        <p className="text-black hover:text-black p-[.5rem_1rem] font-[550] text-lg
                                        transation-all duration-[.25s] after:content-['_'] after:w-full after:border-b-[.15rem] 
                                        
                                        after:border-b-[solid] after:border-b-[#010728] after:scale-x-[0] hover:after:scale-x-[1] 
                                        after:transation-all after:duration-[.15s] after:origin-left cursor-pointer flex flex-col items-center">
                                            Seo
                                        </p>
                                    </div>
                                </> : null
                            }
                    </div>
                    <a href=""><HeaderLogo className="w-[3.5rem]" /></a>
                    <div className='tablets:flex items-center ml-[2rem] text-lg hidden'>
                        <div className='text-center mr-[1.3rem] text-white transation-all duration-[.25s] hover:text-[#CDDA4F] after:content-["_"] after:w-full after:border-b-[.12rem] after:border-b-[solid] after:border-b-[orange] after:scale-x-[0] hover:after:scale-x-[1] after:transation-all after:duration-[.15s] after:origin-left cursor-pointer flex flex-col'>
                            <p className="font-base p-[.4rem_.5rem]">
                                Our Story
                            </p>
                        </div>
                        <div className='projectLinks relative text-center mr-[1.3rem] text-white transation-all duration-[.25s] hover:text-[#CDDA4F] after:content-["_"] after:w-full after:border-b-[.12rem] after:border-b-[solid] after:border-b-[orange] after:scale-x-[0] hover:after:scale-x-[1] after:transation-all after:duration-[.15s] after:origin-left cursor-pointer flex flex-col items-center
                         z-[20]' onMouseOver={()=>SetCasedingMenu(true)} onMouseLeave={()=>SetCasedingMenu(false)} >
                            <p className="font-base p-[.4rem_.5rem] flex items-baseline ">
                                Projects
                                <svg className="ml-[1rem]"
                                    width={14}
                                    height={8}
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 5.172 2.05.222.636 1.636 7 8l6.364-6.364L11.95.222 7 5.172Z"
                                        fill="#fff"
                                    />
                                </svg>
                            </p>
                            {
                                CasedingMenu ? <>
                                    <div className="w-[max-content] absolute top-[100%] bg-white flex flex-col items-center animate-hoverheadermenu">
                                        <p className="text-black hover:text-black p-[.5rem_1rem] font-[550] text-lg
                                        transation-all duration-[.25s] after:content-['_'] after:w-full after:border-b-[.15rem] after:border-b-[solid] after:border-b-[#010728] after:scale-x-[0] hover:after:scale-x-[1] after:transation-all after:duration-[.15s] after:origin-left cursor-pointer flex flex-col items-center">
                                            Design
                                        </p>
                                        <p className="text-black hover:text-black p-[.5rem_1rem] font-[550] text-lg
                                        transation-all duration-[.25s]  after:content-['_'] after:w-full after:border-b-[.15rem] after:border-b-[solid] after:border-b-[#010728] after:scale-x-[0] hover:after:scale-x-[1] after:transation-all after:duration-[.15s] after:origin-left cursor-pointer flex flex-col items-center">
                                            Web development
                                        </p>
                                        <p className="text-black hover:text-black p-[.5rem_1rem] font-[550] text-lg
                                        transation-all duration-[.25s]  after:content-['_'] after:w-full after:border-b-[.15rem] after:border-b-[solid] after:border-b-[#010728] after:scale-x-[0] hover:after:scale-x-[1] after:transation-all after:duration-[.15s] after:origin-left cursor-pointer flex flex-col items-center">
                                            Contents
                                        </p>
                                        <p className="text-black hover:text-black p-[.5rem_1rem] font-[550] text-lg
                                        transation-all duration-[.25s] after:content-['_'] after:w-full after:border-b-[.15rem] after:border-b-[solid] after:border-b-[#010728] after:scale-x-[0] hover:after:scale-x-[1] after:transation-all after:duration-[.15s] after:origin-left cursor-pointer flex flex-col items-center">
                                            Social media
                                        </p>
                                        <p className="text-black hover:text-black p-[.5rem_1rem] font-[550] text-lg
                                        transation-all duration-[.25s]  after:content-['_'] after:w-full after:border-b-[.15rem] after:border-b-[solid] after:border-b-[#010728] after:scale-x-[0] hover:after:scale-x-[1] after:transation-all after:duration-[.15s] after:origin-left cursor-pointer flex flex-col items-center">
                                            Seo
                                        </p>
                                    </div>
                                </> : null
                            }
                        </div>
                        <div className='text-center mr-[1.3rem] text-white transation-all duration-[.25s] hover:text-[#CDDA4F] after:content-["_"] after:w-full after:border-b-[.12rem] after:border-b-[solid] after:border-b-[orange] after:scale-x-[0] hover:after:scale-x-[1] after:transation-all after:duration-[.15s] after:origin-left cursor-pointer flex flex-col'>
                            <p className="font-base p-[.4rem_.5rem]">
                                Portfolio
                            </p>
                        </div>  
                        <div className='text-center mr-[1.3rem] text-white transation-all duration-[.25s] hover:text-[#CDDA4F] after:content-["_"] after:w-full after:border-b-[.12rem] after:border-b-[solid] after:border-b-[orange] after:scale-x-[0] hover:after:scale-x-[1] after:transation-all after:duration-[.15s] after:origin-left cursor-pointer flex flex-col'>
                            <p className="font-base p-[.4rem_.5rem]">
                                Careers
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <button className='p-[.5rem_1.2rem] bg-gradient-to-r from-[#FF8A52] to-[#CDDA4F] rounded text-black text-lg
                     overflow-hidden w-[9.56rem] animate-backgroundsize bg-[length:200%_100%]'>
                        <p className="flex whitespace-nowrap animate-wiggle w-[18rem]">
                            <span className="w-[9rem]">
                                Work with us
                            </span>
                            <span className="w-[9rem]">
                                Work with us
                            </span>
                        </p>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default HeaderComponent ; 