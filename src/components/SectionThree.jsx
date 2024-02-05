import Phone from "../assets/img/phone.png"
import { BsArrowRight } from "react-icons/bs"
const SectionThree = () => {
    return (
        <>
            <section className="  md:px-[100px] px-[20px] mb-[50px]">
                <div className="bg-[#009444;] md:px-[100px] px-[20px] rounded-2xl md:flex grid justify-center items-center">
                    <div className="flex justify-center md:justify-between pt-[50px] md:pt-[0px]">
                        <img src={Phone} className="md:mt-[100px] w-[80%] md:mb-[0px] mb-[30px]" />
                    </div>
                    <div className="">
                        <h1 className="md:text-[40px] text-[25px] text-[#FFFFFF] font-medium">Grow your business like a pro!</h1>
                        <p className="md:text-[16px] text-[14px] font-normal mb-[10px] mt-[12px] text-[#f2f2f2;] leading-relaxed">Connect all the tools you need to grow your business, like payments, Google Analytics, Facebook Pixel, Instagram, etc, to your Bumpa app.</p>
                        <div className="flex text-[#FFFFFF;]">
                            <h4 className="font-normal md:text-[16px] cursor-pointer md:mb-[0px] mb-[30px]">Learn More</h4>
                            <BsArrowRight className="ml-[10px] text-[20px] mt-[3px]" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default SectionThree;