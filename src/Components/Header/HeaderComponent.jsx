import { ReactComponent as HeaderLogo } from "../../Assets/Svg/headerLogo.svg"

let HeaderComponent = () => {
    return(
        <div className='container mx-auto px-[1rem]'>
            <div className="flex items-center justify-between text-white">
                <div className='flex'>
                    <HeaderLogo className="w-[4.5rem]" />
                    <div className='flex items-center ml-[2rem] text-lg'>
                        <div className='text-center mr-[1.3rem] text-white transation-all duration-[.25s] hover:text-[#CDDA4F] after:content-["_"] after:w-full after:border-b-[.12rem] after:border-b-[solid] after:border-b-[orange] after:scale-x-[0] hover:after:scale-x-[1] after:transation-all after:duration-[.15s] after:origin-left cursor-pointer flex flex-col'>
                            <p className="font-semibold p-[.4rem_.5rem]">
                                Our Story
                            </p>
                        </div>
                        <div className='projectLinks text-center mr-[1.3rem] text-white transation-all duration-[.25s] hover:text-[#CDDA4F] after:content-["_"] after:w-full after:border-b-[.12rem] after:border-b-[solid] after:border-b-[orange] after:scale-x-[0] hover:after:scale-x-[1] after:transation-all after:duration-[.15s] after:origin-left cursor-pointer flex flex-col'>
                            <p className="font-semibold p-[.4rem_.5rem] flex items-baseline ">
                                Projects
                                <svg className="ml-[.5rem]"
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
                        </div>
                        <div className='text-center mr-[1.3rem] text-white transation-all duration-[.25s] hover:text-[#CDDA4F] after:content-["_"] after:w-full after:border-b-[.12rem] after:border-b-[solid] after:border-b-[orange] after:scale-x-[0] hover:after:scale-x-[1] after:transation-all after:duration-[.15s] after:origin-left cursor-pointer flex flex-col'>
                            <p className="font-semibold p-[.4rem_.5rem]">
                                Portfolio
                            </p>
                        </div>  
                        <div className='text-center mr-[1.3rem] text-white transation-all duration-[.25s] hover:text-[#CDDA4F] after:content-["_"] after:w-full after:border-b-[.12rem] after:border-b-[solid] after:border-b-[orange] after:scale-x-[0] hover:after:scale-x-[1] after:transation-all after:duration-[.15s] after:origin-left cursor-pointer flex flex-col'>
                            <p className="font-semibold p-[.4rem_.5rem]">
                                Careers
                            </p>
                        </div>
                    </div>
                </div>
                <div className='p-[0rem_.8rem] text-lg'>
                    <button className='p-[.5rem_1.2rem] bg-gradient-to-r from-[#FF8A52] to-[#CDDA4F] rounded text-black text-xl
                     overflow-hidden w-[9.56rem] animate-backgroundsize bg-[length:200%_100%]'>
                        <p className="flex whitespace-nowrap animate-wiggle">
                            <span>
                                Work with us
                            </span>
                            <span className="ml-[2rem]">
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