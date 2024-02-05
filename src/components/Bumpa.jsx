import Igmini from "../assets/img/igmini.png"
import Fbmini from "../assets/img/fbmini.png"
import Pixel from "../assets/img/pixelmini.png"
import Messenger from "../assets/img/messengermini.png"
import Ads from "../assets/img/adsmini.png"
import Whatsapp from "../assets/img/whatsappmini.png"
import Market from "../assets/img/marketplacemini.png"
const Bumpa = () => {
    return (
        <>
            <section className="md:px-[100px] px-[10px] mb-[80px]">
                <h1 className="text-[#202021;] text-[48px] font-medium mb-[50px] text-center">Meta x Bumpa Connection</h1>
                <div className="shadow-2xl shadow-none  md:w-[60%] w-[95%] m-auto bg-[#f5f5f5;] rounded-3xl">
                    <div className="md:flex">
                        <div className="md:pl-[10px] md:mt-[20px] mb-[50px] md:mb-[20px]">
                            <div className="flex md:ml-[25px] ml-[20px] md:pt-[0px] pt-[30px] ">
                                <span className="bg-[#009444;] rounded-full w-[10px] h-[10px] mt-[7px]"></span>
                                <h3 className="mb-[20px] text-[#515151;] text-[16px] ml-[5px] font-normal">Connected</h3>
                            </div>
                            <section className="flex justify-between">
                                <div className="flex flex-col items-center">
                                    <img src={Igmini} className="w-[50%] md:w-[48%]" />
                                    <h3 className="font-normal text-[12px] text-[#ababab;] mt-[7px]">Instagram</h3>
                                </div>
                                <div className="flex flex-col items-center">
                                    <img src={Fbmini} className="w-[50%] md:w-[48%]" />
                                    <h3 className="font-normal text-[12px] text-[#ababab;] mt-[7px]">Facebook</h3>
                                </div>
                                <div className="flex flex-col items-center">
                                    <img src={Pixel} className="w-[50%] md:w-[48%]" />
                                    <h3 className="font-normal text-[12px] text-[#ababab;] mt-[7px]"> FB Pixel</h3>
                                </div>
                            </section>
                        </div>
                        <div className="md:border-r-2 border-b-2 md:ml-[40px] md:mt-[20px] mb-[20px] mx-[20px] md:mx-[0px]">
                        </div>
                        <div className=" md:pl-[40px] md:mt-[20px] pt-[10px] md:pt-[0px] pb-[20px] md:pb-[0px] md:mb-[20px]">
                            <div className="flex ml-[20px] ">
                                <span className="bg-[#ffb60a;] rounded-full w-[10px] h-[10px] mt-[7px]"></span>
                                <h3 className="mb-[20px] text-[#515151;] text-[16px] ml-[5px] font-normal">Coming Soon</h3>
                            </div>
                            <section className="flex justify-between">
                                <div className="flex flex-col items-center">
                                    <img src={Messenger} className="w-[50%] md:w-[48%]" />
                                    <h3 className="font-normal text-[12px] text-[#ababab;] mt-[7px]">Messenger</h3>
                                </div>
                                <div className="flex flex-col items-center">
                                    <img src={Ads} className="w-[50%] md:w-[48%]" />
                                    <h3 className="font-normal text-[12px] text-[#ababab;] mt-[7px]">Ads Manager</h3>
                                </div>
                                <div className="flex flex-col items-center">
                                    <img src={Whatsapp} className="w-[50%] md:w-[48%]" />
                                    <h3 className="font-normal text-[12px] text-[#ababab;] mt-[7px]"> WhatsApp</h3>
                                </div>
                                <div className="flex flex-col items-center">
                                    <img src={Market} className="w-[50%] md:w-[48%]" />
                                    <h3 className="font-normal text-[12px] text-[#ababab;] mt-[7px]"> MarketPlace</h3>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Bumpa;