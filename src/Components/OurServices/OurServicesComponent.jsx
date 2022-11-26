let OurServicesComponent = () => {
    return (
        <div className="container mx-auto px-[2rem]">
            <h2 className="text-center text-xl text-white mt-[6.25rem] mb-[2.813rem] font-semibold">
                Our Services
            </h2>
            <div className="grid grid-cols-[1fr] place-content-center tablets:grid-cols-[1fr_1fr] laptops:grid-cols-[1fr_1fr_1fr] md:grid-cols-[1fr_1fr_1fr_1fr] place-items-center text-white">
                <div className="p-[1rem_3rem] bg-[#020616] flex flex-col items-center rounded-lg mb-[2rem]">
                    <div className="h-[10rem] w-[11rem] flex items-center justify-center">
                        <img src="./OurServices/UxResearch.png" alt="" />
                    </div>
                    <span className="font-semibold text-base mt-[1rem]">
                        UxResearch
                    </span>
                </div>
                <div className="p-[1rem_3rem] bg-[#020616] flex flex-col items-center rounded-lg mb-[2rem]">
                    <div className="h-[10rem] w-[11rem] flex items-center justify-center">
                        <img src="./OurServices/SpecialContent.png" alt="" />
                    </div>
                    <span className="font-semibold text-base mt-[1rem]">
                        Special Content
                    </span>
                </div>
                <div className="p-[1rem_3rem] bg-[#020616] flex flex-col items-center rounded-lg mb-[2rem]">
                    <div className="h-[10rem] w-[11rem] flex items-center justify-center">
                        <img src="./OurServices/WebDevelopment.png" alt="" />
                    </div>
                    <span className="font-semibold text-base mt-[1rem]">
                        Web Development
                    </span>
                </div>
                <div className="p-[1rem_3rem] bg-[#020616] flex flex-col items-center rounded-lg mb-[2rem]  col-[unset] laptops:col-span-4 md:col-[unset]">
                    <div className="h-[10rem] w-[11rem] flex items-center justify-center">
                        <img src="./OurServices/Design.png" alt="" />
                    </div>
                    <span className="font-semibold text-base mt-[1rem]">
                        Design
                    </span>
                </div>
            </div>
        </div>
    )
}

export default OurServicesComponent ; 