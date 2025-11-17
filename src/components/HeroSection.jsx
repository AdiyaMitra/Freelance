import React from 'react';

const HeroSection = ({
    title,
    subtitle,
    ctaText,
    ctaLink,
    HeroImg,
    HeroImgAlt,
    BackgroundShape,
    MobileBackgroundShape1,
    BackgroundShape1,
    BackgroundShape2,
    HeroClipboard1,
    HeroClipboard2,
    hasBackgroundShapes = true,
}) => {
    return (
        <section className=" relative overflow-hidden bg-gray-200 rounded-2xl md:rounded-[30px] mx-auto max-w-7xl shadow-xl border border-gray-100 mt-8 mb-16">

            {hasBackgroundShapes && (
                <div>
                    <div className='hidden max-sm:block min-[200px]:min-h-43 min-[250px]:min-h-52 min-[300px]:min-h-63 min-[350px]:min-h-70 min-[400px]:min-h-85 min-[450px]:min-h-90 min-[500px]:min-h-100 min-[550px]:min-h-110 min-[600px]:min-h-120
                    absolute bottom-0 right-0 w-[600%]'>
                        <svg className='absolute w-[40%] h-[153%] bottom-0 -right-5' viewBox="0 0 173 625" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M484.518 837.584C227.752 750.903 -171.584 596.807 84.0545 379.139C409.373 102.141 1048.73 303.149 802.47 1.19116" stroke="black" stroke-opacity="0.1" stroke-width="3.76941" />
                            <path d="M484.518 837.584C227.752 750.903 -171.584 596.807 84.0545 379.139C409.373 102.141 1048.73 303.149 802.47 1.19116" stroke="black" stroke-opacity="0.1" stroke-width="3.76941" />
                            <path d="M484.518 837.584C227.752 750.903 -171.584 596.807 84.0545 379.139C409.373 102.141 1048.73 303.149 802.47 1.19116" stroke="black" stroke-opacity="0.1" stroke-width="3.76941" />
                        </svg>
                        <svg className='absolute w-[29%] h-[153%] bottom-0 -right-5' viewBox="0 0 173 625" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M484.518 837.584C227.752 750.903 -171.584 596.807 84.0545 379.139C409.373 102.141 1048.73 303.149 802.47 1.19116" stroke="black" stroke-opacity="0.1" stroke-width="3.76941" />
                            <path d="M484.518 837.584C227.752 750.903 -171.584 596.807 84.0545 379.139C409.373 102.141 1048.73 303.149 802.47 1.19116" stroke="black" stroke-opacity="0.1" stroke-width="3.76941" />
                            <path d="M484.518 837.584C227.752 750.903 -171.584 596.807 84.0545 379.139C409.373 102.141 1048.73 303.149 802.47 1.19116" stroke="black" stroke-opacity="0.1" stroke-width="3.76941" />
                        </svg>
                        <svg className='absolute w-[21%] h-[149%] bottom-0 -right-5' viewBox="0 0 173 625" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M484.518 837.584C227.752 750.903 -171.584 596.807 84.0545 379.139C409.373 102.141 1048.73 303.149 802.47 1.19116" stroke="black" stroke-opacity="0.1" stroke-width="3.76941" />
                            <path d="M484.518 837.584C227.752 750.903 -171.584 596.807 84.0545 379.139C409.373 102.141 1048.73 303.149 802.47 1.19116" stroke="black" stroke-opacity="0.1" stroke-width="3.76941" />
                            <path d="M484.518 837.584C227.752 750.903 -171.584 596.807 84.0545 379.139C409.373 102.141 1048.73 303.149 802.47 1.19116" stroke="black" stroke-opacity="0.1" stroke-width="3.76941" />
                        </svg>
                        <svg className='absolute w-[13%] h-[148%] bottom-0 -right-5' viewBox="0 0 173 625" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M484.518 837.584C227.752 750.903 -171.584 596.807 84.0545 379.139C409.373 102.141 1048.73 303.149 802.47 1.19116" stroke="black" stroke-opacity="0.1" stroke-width="3.76941" />
                            <path d="M484.518 837.584C227.752 750.903 -171.584 596.807 84.0545 379.139C409.373 102.141 1048.73 303.149 802.47 1.19116" stroke="black" stroke-opacity="0.1" stroke-width="3.76941" />
                            <path d="M484.518 837.584C227.752 750.903 -171.584 596.807 84.0545 379.139C409.373 102.141 1048.73 303.149 802.47 1.19116" stroke="black" stroke-opacity="0.1" stroke-width="3.76941" />
                        </svg>
                        <svg className='absolute w-[8%] h-[148%] bottom-0 -right-5' viewBox="0 0 77 623" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M484.518 837.584C227.752 750.903 -171.584 596.807 84.0545 379.139C409.373 102.141 1048.73 303.149 802.47 1.19116" stroke="black" stroke-opacity="0.1" stroke-width="3.76941" />
                            <path d="M484.518 837.584C227.752 750.903 -171.584 596.807 84.0545 379.139C409.373 102.141 1048.73 303.149 802.47 1.19116" stroke="black" stroke-opacity="0.1" stroke-width="3.76941" />
                            <path d="M484.518 837.584C227.752 750.903 -171.584 596.807 84.0545 379.139C409.373 102.141 1048.73 303.149 802.47 1.19116" stroke="black" stroke-opacity="0.1" stroke-width="3.76941" />
                        </svg>
                    </div>
                    <img className='hidden sm:block absolute bottom-0 right-0 sm:right-0 sm:h-114 md:h-140 lg:h-180' src={BackgroundShape} alt="" />
                    <img className='absolute w-[40%] -ml-[11%] bottom-40 sm:w-[20%] sm:ml-[40%] sm:bottom-7' src={BackgroundShape1} alt="" />
                    <img className='absolute w-[40%] ml-[84%] bottom-[93%] min-[200px]:bottom-[92%] min-[250px]:bottom-[90%] min-[300px]:bottom-[88%] min-[350px]:bottom-[87%] min-[400px]:bottom-[86%] min-[500px]:bottom-[84%] rotate-180 sm:w-[30%] sm:ml-[63%] sm:bottom-0 sm:rotate-0' src={BackgroundShape2} alt="" />
                </div>
            )}

            <div className="relative z-10 flex flex-col sm:flex-row md:flex-row lg:flex-row">
                <div className=' p-6 md:p-12 lg:p-16 flex flex-col items-start text-left sm:w-[45%] md:w-[45%] lg:w-[45%]'>
                    <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-black leading-tight text-center sm:text-left'>
                        <svg
                            className='absolute mx-18 mt-6 h-31 sm:mx-22 sm:mt-7 sm:h-34 md:mx-30 md:mt-7 md:h-40 lg:mx-55 lg:mt-12 lg:h-55'
                            width="150"
                            height="150"
                            viewBox="0 0 130 222"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.092549 9.86503L89.9952 1.05892C102.601 -0.175862 113.762 9.18663 114.738 21.8154L116.897 49.7602L120.835 100.711L128.178 195.721C129.216 209.159 118.34 220.514 104.87 220.056L75.9176 219.071" stroke="#FB4D17" strokeWidth="1.8989" />
                        </svg>

                        <div className='bg-[#FB4D17] text-white p-3 px-6 rounded-2xl w-fit mx-auto sm:mx-0 rotate-3 z-30 mb-[-1rem]'>
                            <div className='-rotate-3'>
                                {title.hilighted1}
                            </div>
                        </div>
                        <div className='text-gray-800 my-7 z-40'>
                            <div>{title.nonHilighted.line1}</div>
                            <div>{title.nonHilighted.line2}</div>
                        </div>
                        <div className='bg-[#FB4D17] text-white p-3 px-6 rounded-2xl w-fit mx-auto sm:mx-0 -rotate-3 z-30 mt-[-1rem]'>
                            <div className='rotate-3'>
                                {title.hilighted2}
                            </div>
                        </div>

                    </div>
                    <div className="pt-5 sm:text-xl md:text-2xl lg:text-3xl font-normal text-gray-500 leading-snug max-w-xl">
                        {subtitle}
                    </div>
                    <div>
                        <button className=" text-[12px] border border-black/50 sm:text-xl md:text-2xl lg:text-3xl mt-6 inline-block bg-[#FB4D17] hover:bg-[#FF6A3D] text-white text-lg font-normal py-4 px-10 rounded-full transition duration-300 ease-in-out shadow-[0_6px_0_0_#d74418] hover:shadow-[0_2px_0_0_#d74418]">{ctaText}</button>
                    </div>
                </div>
                <div className='min-h-33 min-[200px]:min-h-43 min-[250px]:min-h-52 min-[300px]:min-h-63 min-[350px]:min-h-70 min-[400px]:min-h-85 min-[450px]:min-h-90 min-[500px]:min-h-100 min-[550px]:min-h-110 min-[600px]:min-h-120 sm:min-h-0 sm:mt-0 sm:w-[55%] md:w-[55%] lg:w-[55%] relative bottom-0 flex justify-center pt-18'>
                    <div className='w-full'>
                        <div className='absolute bottom-0 w-[110%]'>
                            <img className='bottom-0 w-[38%] -mt-[67%] ml-[1%]'
                                src={HeroClipboard1}
                                alt="" />
                        </div>
                        <div className='absolute bottom-0 w-[110%]'>
                            <img className='bottom-0 w-[35%] -mt-[50%] ml-[55%]'
                                src={HeroClipboard2}
                                alt="" />
                        </div>
                        <div className='absolute bottom-0 w-[110%]'>
                            <img
                                className='bottom-0 w-[90%]'
                                src={HeroImg}
                                alt={HeroImgAlt}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;