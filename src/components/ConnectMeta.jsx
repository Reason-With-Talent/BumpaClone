import connectmeta from "../assets/img/connectmeta.png"
import { AiOutlineDown } from "react-icons/ai"
const ConnectMeta = () => {
    return (
        <>
            <section className="md:flex items-center  md:px-[100px] px-[20px] md:mt-[100px] mt-[30px] md:mb-[100px] mb-[40px]">
                <div className="md:ml-[100px] md:pt-[0px] pt-[20px]">
                    <div className="flex justify-between md:w-[450px] bg-[#f2f2f2;] rounded-2xl p-[12px] mb-[20px] cursor-pointer">
                        <h3 className="md:text-[18px] font-bold">Improve customer service</h3>
                        <AiOutlineDown className="md:mt-[5px] mt-[3px]" />
                    </div>
                    <div className="flex justify-between md:w-[450px] bg-[#f2f2f2;] rounded-2xl p-[12px] mb-[20px] cursor-pointer">
                        <h3 className="md:text-[18px] font-bold">Close sales faster in chat</h3>
                        <AiOutlineDown className="md:mt-[5px] mt-[3px]" />
                    </div>
                    <div className="flex justify-between md:w-[450px] bg-[#f2f2f2;] rounded-2xl p-[12px] cursor-pointer">
                        <h3 className="md:text-[18px] font-bold">Get insights into your IG sales</h3>
                        <AiOutlineDown className="md:mt-[5px] mt-[3px]" />
                    </div>
                </div>
                <div className="">
                    <img src={connectmeta} className="md:w-[90%] w-[100%] flex items-center md:pt-[0px] pt-[60px]" />
                </div>
            </section>
        </>
    )
}
export default ConnectMeta;