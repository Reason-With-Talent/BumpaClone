import Illustration from "../assets/img/getillustration.png"
import Ios from "../assets/img/ios.116b11d8.png"
import Andriod from "../assets/img/android.b5dec055.png"
const GetIllustration = () => {
    return (
        <>
            <section className="md:px-[100px] px-[20px] pt-[80px] pb-[60px]">
                <div className="bg-[#009444;] pb-[40px] rounded-2xl flex md:px-[40px] px-[20px] md:pt-[50px] ">
                    <div className="md:pt-[50px] pt-[30px]">
                        <h1 className="md:text-[40px] text-[32px] md:w-[none] w-[70%] leading-tight font-medium text-[#FFFFFF] mb-[10px]">Get started with Bumpa</h1>
                        <p className="text-[#f8f8f8;] font-normal mb-[30px] md:w-[none] w-[95%] text-[14px] md:text-[18px]">Turn your phone into a mobile store instantly. Start selling online and managing your business with ease.</p>
                        <div className="md:flex ">
                            <div className="flex bg-[#FFFFFF] md:w-[40%] w-[55%] rounded-lg p-[4px]">
                                <img src={Andriod} className="text-[#FFFFFF] ml-[15px] w-[30px] h-[35px] mt-[10px] pb-[5px]" />
                                <div className="pl-[10px]">
                                    <h5 className="text-[12px] font-normal ">GET IT ON</h5>
                                    <h1 className="text-[22px] font-semibold">Google Play</h1>
                                </div>
                            </div>
                            <div className="flex bg-[#FFFFFF]  md:w-[40%] w-[55%] rounded-lg p-[4px] mt-[20px] md:mt-[0px] md:ml-[20px] ">
                                <img src={Ios} className="text-[#FFFFFF] ml-[15px] w-[30px] h-[35px] mt-[10px] pb-[5px]" />
                                <div className="pl-[10px]">
                                    <h5 className="text-[12px] font-normal">Download on the</h5>
                                    <h1 className="text-[22px] font-semibold">App Store</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={Illustration} className="md:w-[60%] w-[80%] md:flex hidden" />
                </div>
            </section>
        </>
    )
}
export default GetIllustration;