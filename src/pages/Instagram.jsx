import Logo from "../assets/img/logo (1).svg"
import { Link } from 'react-router-dom'
import { BsApple } from "react-icons/bs"
import { BiLogoPlayStore } from "react-icons/bi"
import InstaOne from "../components/InstaOne"
import ConnectMeta from "../components/ConnectMeta"
import Steriods from "../components/Steriods"
import Connection from "../components/Connection"
import Review from "../components/Review"
import Bumpa from "../components/Bumpa"
import Faq from "../components/Faq"
import GetIllustration from "../components/GetIllustration"
import Footer from "../components/Footer"
const Instagram = () => {
    return (
        <>
            <section className="md:px-[100px] px-[20px]">
                <div className="flex justify-between  md:mt-[50px] mt-[30px] md:pb-[30px] pb-[20px] border-b-2">
                    <div className=''>
                        <Link to={"/"}><img src={Logo} /></Link>
                    </div>
                    <div className="flex">
                        <div className="bg-[#ebf6f0;] md:mr-[20px] mr-[10px] w-[50px] h-[50px] flex justify-center items-center md:text-[25px] text-[20px] rounded-lg">
                            <BsApple className="text-[#009444;]" />
                        </div>
                        <div className="bg-[#ebf6f0;] w-[50px] h-[50px] flex justify-center items-center md:text-[25px] text-[20px] rounded-lg">
                            <BiLogoPlayStore className="text-[#009444;]" />
                        </div>
                    </div>
                </div>
            </section>
         <InstaOne/>
         <ConnectMeta/>
         <Steriods/>
         <Connection/>
         <Review/>
         <Bumpa/>
         <Faq/>
         <GetIllustration/>
         <Footer/>n
        </>
    )
}
export default Instagram;