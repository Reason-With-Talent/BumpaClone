import connection from "../assets/img/connection.png"
const Connection = () => {
    return (
        <>
            <section className="md:px-[100px] px-[20px] pb-[50px] md:flex">
                <img src={connection} className="md:w-[40%] md:pt-[0px] pt-[40px]" />
                <div className="md:px-[100px] px-[10px] md:mt-[100px] mt-[50px]">
                    <h1 className="mb-[20px] text-[32px] md:text-[48px] md:w-[80%] font-semibold leading-tight">It Starts with a Simple Connection</h1>
                    <p className="mb-[20px] text-[16px] md:text-[18px] font-normal leading-relaxed md:w-[85%] w-[95%]">Engage your customers, share products, send invoices and record sales on Instagram & Facebook when you connect your Meta & Bumpa accounts.</p>
                    <p className="mb-[20px] text-[16px] md:text-[18px] font-normal leading-relaxed md:w-[85%] w-[95%]">We want to help you organize your social media DMs; tracking your inventory, customers, sales and orders across all the channels where you sell.</p>
                    <button className="bg-[#009444] md:p-[20px] p-[10px] rounded-md text-white text-sm font-semibold flex justify-center w-[50%]  md:w-[250px] mt-[50px]">Learn More</button>
                </div>
            </section>
        </>
    )
}
export default Connection;