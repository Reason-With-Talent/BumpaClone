import { Link } from 'react-router-dom'
import LoginLogo from "../assets/img/image-product.svg"
import Logo from "../assets/img/logo (1).svg"
import { Formik } from 'formik';
const Login = () => {
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
                    /* and other goodies */
                }) => (
                    <section className="md:flex md:px-[100px] px-[20px] md:mt-[100px] mt-[50px] md:mb-[0px] mb-[50px]">
                        <div>
                            <img src={LoginLogo} className='md:flex hidden' />
                        </div>
                        <div className="md:ml-[50px]">
                            <div className='md:mb-[70px] mb-[40px]'>
                                <Link to={"/"}><img src={Logo} /></Link>
                            </div>
                            <h1 className='text-[#0d1821;] md:text-[32px] text-[24px] mb-[10px] font-semibold'>Welcome back</h1>
                            <p className='text-[#5c636d;] text-[16px] font-normal mb-[20px]'>Get back to managing your business like a pro.</p>
                            <form className='flex flex-col' onSubmit={handleSubmit}>
                                <h5 className='text-[#5c636d;] mb-[8px] text-[14px] font-normal '>Email Address</h5>
                                <input name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} type="Email Address" placeholder='you@email.com' className='outline-none md:w-[550px] w-[100%] pt-[15px] pb-[15px] rounded-lg border-2 border-[#9ba2ac] p-[10px]' />
                                <span className='text-[red] text-sm'>{errors.email && touched.email && errors.email}</span>


                                <h5 className='text-[#5c636d;] mb-[8px] mt-[8px] text-[14px] font-normal '>Password</h5>
                                <input name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} type="password" className='outline-none md:w-[550px] w-[100%] pt-[15px] pb-[15px] rounded-lg border-2 border-[#9ba2ac] p-[10px]' />
                                <span className='text-[red] text-sm'>{errors.password && touched.password && errors.password}</span>
                            </form>
                            <div className='flex justify-between mt-[15px]'>
                                <div className='flex'>
                                <input type="checkbox" className='outline-none ml-[10px]'/>
                                <h3 className='text-[#222d37;] text-[14px] ml-[10px] font-normal'>Remember Password</h3>
                                </div>
                                <h3 className='text-[#009444;] text-[14px] font-medium'>Forgot Password?</h3>
                            </div>
                            <button type="submit" disabled={isSubmitting} className='w-[100%] bg-[#e5e7eb;] font-normal mt-[30px] p-[12px] outline-none rounded-lg text-[#5c636d;]'>Login</button>
                        </div>
                    </section>
                )}
            </Formik>

        </>
    )
}
export default Login;