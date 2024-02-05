import Business from "../assets/img/business.png"
import Connect from "../assets/img/connect.png"
import { BsArrowRight } from "react-icons/bs"
const SectionTwo = () => {
    return (
        <>
            <section className="md:px-[100px] px-[20px] md:mt-[70px] mt-[40px] mb-[50px] md:flex grid justify-between">
                <div className="bg-[rgba(235,246,240,.5)] md:w-[48%] rounded-2xl h-[500px] md:h-[600px] md:pl-[50px] pl-[20px] md:mb-[0px] mb-[30px]">
                    <h1 className="md:text-[32px] text-[25px] mb-[10px] font-medium  md:pt-[30px] pt-[20px] text-[#202021;]">Bring your business online</h1>
                    <p className="text-[#202021;] font-normal md:text-[16px] text-[14px] md:w-[85%] mb-[20px]">Create a professional business website in 60 seconds and start selling to anyone on the internet.</p>
                    <div className="flex items-center text-[#009444;]">
                        <h4 className=" font-normal md:text-[16px] cursor-pointer">Learn More</h4>
                        <BsArrowRight className="ml-[10px] text-[20px] mt-[3px]"/>
                    </div>
                    <div className="md:w-[80%] w-[90%] md:mt-[150px] md:ml-[35px] mt-[140px] ml-[10px]">
                            <img src={Business} />
                        </div>
                </div>
                <div className="bg-[rgba(237,245,254,.5)] md:w-[48%] rounded-2xl h-[600px] md:pl-[50px] pl-[20px]">
                    <h1 className="md:text-[32px] text-[25px] mb-[10px] font-medium  md:pt-[30px] pt-[20px] text-[#202021;]">Become a tech-enabled business</h1>
                    <p className="text-[#202021;] font-normal md:text-[16px] text-[14px] md:w-[85%] mb-[20px] leading-relaxed">Create invoices & receipts, save customer details and record your daily sales from the shop, website, social media, and marketplaces easily on your mobile phone.</p>
                    <div className="flex items-center text-[#009444;]">
                        <h4 className=" font-normal md:text-[16px] cursor-pointer">Learn More</h4>
                        <BsArrowRight className="ml-[10px] text-[20px] mt-[3px]"/>
                    </div>
                     <div className="md:w-[50%] w-[80%] md:mt-[110px] md:ml-[100px] mt-[85px] ml-[25px]">
                            <img src={Connect} />
                        </div>
                </div>
            </section>
        </>
    )
}
export default SectionTwo;