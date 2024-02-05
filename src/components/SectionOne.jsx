import Hero from "../assets/img/heroimg.png"
const SectionOne = () => {
  return (
    <>
      <section className="md:flex grid justify-center md:pt-[80px] pt-[30px] md:px-[100px] px-[20px] md:mb-[50px] mb-[30px]">
        <div className="md:pt-[50px] ">
          <h1 className="md:text-[56px] text-[40px] md:w-[500px] leading-none font-freizeit_bold text-[#202021] mb-[20px] font-medium">The best business management app for SMEs.</h1>
          <p className="font-normal text-[#7b7b7b;] md:text-[18px] md:w-[70%] mt-[30px] mb-[20px] leading-relaxed">Create a business website, issue invoices, record sales, receive financial reports & manage all business operations on the Bumpa app.</p>
          <button className="bg-[#009444] p-[15px] rounded-md text-white text-sm font-semibold flex justify-center w-[100%] md:w-[200px] mt-[30px] md:mb-[0px] mb-[30px] md:mt-[50px]">Get Started</button>
        </div>
        <div className="md:w-[60%]">
          <img src={Hero} />
        </div>
      </section>
    </>
  )
}
export default SectionOne;