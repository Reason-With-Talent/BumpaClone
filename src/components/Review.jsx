import nuel from "../assets/img/nyneandnuel.jpeg"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { AiOutlineArrowRight } from "react-icons/ai"
const Review = () => {
    return (
        <>
            <section className="md:px-[100px] px-[10px] md:mt-[100px] mt-[30px] md:mb-[100px] mb-[50px]">
                <h1 className="md:text-[48px] text-[32px] font-semibold text-center md:mb-[100px] mb-[50px]">What our Customers are Saying</h1>
                <div className="shadow-2xl md:w-[90%] w-[95%] m-auto rounded-3xl">
                    <div className="md:flex  md:pt-[100px] pt-[40px] pb-[70px]">
                        <img src={nuel} className="md:w-[60%] w-[95%] h-[350px] m-auto md:px-[100px] px-[15px] " />
                        <div className=" md:pr-[100px] mt-[20px] md:mt-[0px] px-[20px] md:px-[0px]">
                            <h2 className="text-[#454545;] font-bold md:text-[30px] text-[24px] leading-snug mb-[30px]">I love the meta feature, makes it easy to send invoices and record orders. Another thing I love is the fact that I also get notifications for message requests.</h2>
                            <div className="border-b-4 border-[#009444;] mb-[20px] md:mb-[30px]">
                            </div>
                            <p className="text-[14px] text-[#515151;] font-normal">Nyne and Nuel</p>
                        </div>
                    </div>
                    <div className="flex md:justify-end items-center w-[100%]  ">
                        <div className="bg-[#ebf6f0;] w-[50px] h-[50px] flex justify-center items-center md:text-[23px] rounded-full md:mb-[20px] mb-[40px] md:mr-[25px] ml-[25px] md:ml-[0px]">
                            <AiOutlineArrowLeft className="text-[#009444;]" />
                        </div>
                        <div className="bg-[#ebf6f0;] w-[50px] h-[50px] flex justify-center items-center md:text-[23px] rounded-full md:mb-[20px] mb-[40px] md:mr-[130px] ml-[25px] md:ml-[0px]">
                            <AiOutlineArrowRight className="text-[#009444;]" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Review;