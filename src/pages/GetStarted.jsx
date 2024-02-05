import { Formik } from 'formik';
import { Link } from 'react-router-dom'
const GetStarted = () => {
    return (
        <>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    if (!values.password) {
                        errors.password = '**Password Required**';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        console.log(values)
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <section className='bg-[#A7D7C5;] h-[710px]'>
                        <div className='md:pt-[150px] pt-[70px]'>
                            <div className='bg-[#FFFFFF] w-[380px] h-[425px] m-auto rounded-2xl md:px-[30px] px-[20px]'>
                                <h1 className='text-[35px] text-center font-medium pt-[20px]'>Create An Account</h1>
                                <p className='font-normal mb-[20px] md:w-[85%] w-[70%] text-[12px] m-auto text-center text-[#32403B;] md:text-[14px] '>Create an account to enjoy all the services without any ads for free!</p>
                                <form className='grid' onSubmit={handleSubmit}>

                                    <input name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} type="text" placeholder='Email Address' className='outline-none mt-[20px] md:w-[320px] w-[100%] pt-[8px] pb-[8px] rounded-lg border-2 border-[#9ba2ac] p-[10px]' />
                                    <span className='text-[red] text-sm'>{errors.email && touched.email && errors.email}</span>


                                    <input name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} type="password" placeholder='Password' className='outline-none mt-[20px] md:w-[320px] w-[100%] pt-[8px] pb-[8px] rounded-lg border-2 border-[#9ba2ac] p-[10px]' />
                                    <span className='text-[red] text-sm'>{errors.password && touched.password && errors.password}</span>
                                </form>
                                <button type="submit" disabled={isSubmitting} className="bg-[#A7D7C5] outline-none md:p-[12px] p-[10px] rounded-xl text-white text-[16px] mb-[10px] font-semibold flex justify-center m-auto w-[60%] mt-[20px]" >Create Account</button>
                                <p className='text-center pt-[10px] text-[12px] font-normal text-[#32403B;]'>Already Have An Account?<Link to={"/login"}><span className='border-b-2 border-[red]'>Sign In</span></Link></p>
                            </div>
                        </div>
                    </section>
                )}
            </Formik>

        </>
    )
}
export default GetStarted;
