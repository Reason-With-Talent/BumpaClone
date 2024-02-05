import steriods from "../assets/img/meta_images.png"
const Steriods = () => {
    return (
        <>
            <section className="md:px-[100px] px-[20px] md:mb-[100px] mb-[40px] mt-[100px]">
                <div className=" bg-[#fff8e7;] md:pb-[50px] pb-[20px] rounded-3xl md:flex">
                    <h1 className="md:text-[40px] text-center text-[32px] pt-[20px] w-[70%] m-auto mb-[48px] font-medium md:hidden">DM to Order on Steroids</h1>
                    <img src={steriods} className="md:w-[40%] w-[80%] m-auto md:pt-[80px] pt-[30px] md:mr-[50px]" />
                    <div className="md:mt-[80px] mt-[30px] md:px-[100px] px-[20px]">
                        <h1 className="md:text-[40px] font-medium md:flex hidden ">DM to Order on Steroids</h1>
                        <p className="md:text-[18px]  text-[16px] font-medium leading-snug mt-[15px] mb-[20px]">Most customers prefer to send a Direct Message (DM) before making a purchase. With the Meta integration, this becomes super easy.</p>
                        <h6 className="md:text-[16px] text-[15px] font-normal leadding-snug mt-[15px] mb-[20px] md:w-[80%]">Receive all customer orders from instagram and Facebook directly on your Bumpa app.</h6>
                        <h6 className="md:text-[16px] text-[15px] font-normal leadding-snug mt-[15px] mb-[20px] md:w-[70%]">Track your orders, customers and inventory across all the channels where you sell.</h6>
                        <h6 className="md:text-[16px] text-[15px] font-normal leadding-snug mt-[15px] mb-[20px] md:w-[70%]">Engage your customers easily and turn those DMs into sales in half the time.</h6>
                        <button className="bg-[#009444] p-[20px] rounded-md text-white text-sm font-semibold flex justify-center w-[80%]  md:w-[250px] mt-[30px] md:mb-[0px] mb-[30px] md:mt-[50px]">Download</button>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Steriods;