import { ReactComponent as HeaderLogo } from "../../Assets/Svg/headerLogo.svg"

let HeaderComponent = () => {
    return(
        <div className='container mx-auto px-[1rem]'>
            <div className="flex items-center justify-between text-white">
                <div className='flex'>
                    <HeaderLogo className="w-[4.5rem]" />
                    <div className='flex items-center ml-[2rem] text-lg'>
                        <div className='text-center p-[.4rem_1.3rem]'>
                            <p>
                                Our Story
                            </p>
                        </div>
                        <div className='text-center p-[.4rem_1.3rem]'>
                            <p>
                                Projects
                            </p>
                        </div>
                        <div className='text-center p-[.4rem_1.3rem]'>
                            <p>
                                Portfolio
                            </p>
                        </div>  
                        <div className='text-center p-[.4rem_1.3rem]'>
                            <p>
                                Careers
                            </p>
                        </div>
                    </div>
                </div>
                <div className='p-[0rem_.8rem] text-lg'>
                    <button className='p-[.7rem_1.2rem] bg-gradient-to-r from-[#FF8A52] to-[#CDDA4F] rounded text-black text-xl'>
                        <p>
                            Work with us
                        </p>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default HeaderComponent ; 