import Logo from "../assets/img/logo (1).svg"
import { BsTwitter } from "react-icons/bs"
import { AiFillFacebook } from "react-icons/ai"
import { BsLinkedin } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
const Footer = () => {
    return (
        <>
            <footer className="md:mr-[250px] mr-[0px] md:ml-[100px] ml-[0px] md:px-[0px] px-[20px] mt-[20px] mb-[100px]">
                <section className="md:flex justify-between ">
                    <div>
                        <img src={Logo} />
                        <h4 className="md:text-[16px] text-[14px] font-normal mt-[10px] md:w-[80%]">The 360 business management experience for small businesses across Africa</h4>
                        <div className="flex text-[20px] mt-[15px] mb-[20px]">
                            <div className="pr-[20px]"><a href="https://www.twitter.com/getBumpa"><BsTwitter /></a></div>
                            <div className="pr-[20px]"> <a href="https://www.instagram.com/getbumpa"><BsInstagram /></a></div>
                            <div className="pr-[20px]"><a href="https://www.facebook.com/getbumpa"><AiFillFacebook /></a></div>
                            <div className="pr-[20px]"> <a href="https://www.linkedin.com/company/getbumpa"><BsLinkedin /></a></div>
                        </div>
                        <p className="text-[14px] md:text-[16px] font-normal ">2023 Salescabal Inc. All Rights Reserved.</p>
                    </div>
                    <div className="flex justify-between md:mt-[0px] mt-[40px] mr-[80px] md:mr-[0px]">
                        <div className="md:pr-[150px]">
                            <h2 className="text-[#202021;] text-[20px] font-medium mb-[18px]">Company</h2>
                            <h6 className="text-[16px] text-[#000000] font-normal md:mb-[10px] mb-[20px]">About Us</h6>
                            <h6 className="text-[16px] text-[#000000] font-normal md:mb-[10px] mb-[20px]">Pricing</h6>
                            <h6 className="text-[16px] text-[#000000] font-normal md:mb-[10px] mb-[20px]">Careers</h6>
                        </div>
                        <div className="md:pr-[150px]">
                            <h2 className="text-[#202021;] text-[20px] font-medium mb-[18px]">Resources</h2>
                            <h6 className="text-[16px] text-[#000000] font-normal md:mb-[10px] mb-[20px]">Blog</h6>
                            <h6 className="text-[16px] text-[#000000] font-normal md:mb-[10px] mb-[20px]">FAQs</h6>
                            <h6 className="text-[16px] text-[#000000] font-normal md:mb-[10px] mb-[20px]">Support</h6>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-[#202021;] text-[20px] font-medium mb-[18px]">Legal</h2>
                        <h6 className="text-[16px] text-[#000000] font-normal md:mb-[10px] mb-[20px]">Legal</h6>
                        <h6 className="text-[16px] text-[#000000] font-normal md:mb-[10px] mb-[20px]">Contact</h6>
                    </div>
                </section>
            </footer>
        </>
    )
}
export default Footer;