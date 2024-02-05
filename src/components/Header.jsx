import { Link } from 'react-router-dom'
import Logo from "../assets/img/logo (1).svg"
import { FiMenu } from "react-icons/fi"
const Header = () => {
    return (
        <>
            <header className="flex justify-between md:px-[50px] px-[20px] py-[30px]">
                <img src={Logo} />
                <FiMenu className="md:hidden text-[30px] ml-[100px] mt-[5px]" />
                <div className="md:flex hidden items-center ">
                    <ul className='flex gap-[20px] text-md font-normal'>
                        <li>
                            <select>
                                <option>Features</option>
                                <option>Record sales</option>
                                <option>Invoices & Receipts</option>
                                <option>Messaging</option>
                                <option>Analytics</option>
                                <option>Business websites</option>
                                <option>Connnected Apps</option>
                            </select>
                        </li>
                        <li>
                            <select>
                                <option>Company</option>
                                <option>About Us</option>
                                <option>Careers</option>
                            </select>
                        </li>
                        <li>
                            <select>
                                <option>Categories</option>
                                <option>Fashion</option>
                            </select>
                        </li>
                        <li>Pricing</li>
                        <li>
                            <select>
                                <option>Learn</option>
                                <option>Blog</option>
                                <option>Community</option>
                                <option>FAQs</option>
                            </select>
                        </li>
                    </ul>
                </div>
                <Link to={"/instagram"}><button className="bg-[rgb(0,148,68,.13)] p-[10px] text-[#009444;] rounded-full md:flex hidden items-center text-sm font-normal">Sell On Instagram</button></Link>
                <div className='flex'>
                    <Link to={"/login"}> <button className=" border-2 border-[rgba(0,148,68,0.5)] p-[10px] md:flex hidden justify-center rounded-lg w-[128px] text-[#009444] font-semibold text-md ">Login</button></Link>
                    <Link to={"/getstarted"}><button className="bg-[#009444] md:p-[13px] p-[10px] rounded-md text-white text-sm font-semibold md:flex hidden justify-center items-center md:ml-[20px] w-[128px]">Get Started</button></Link>
                </div>
            </header>
        </>
    )
}
export default Header;