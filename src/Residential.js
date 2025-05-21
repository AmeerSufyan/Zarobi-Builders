import React from 'react';
import {Link} from 'react-router-dom';
import pic1 from './Residencepic/residencepic.jpg';
import pic2 from './Residencepic/loft.jpg';
import pic3 from './Residencepic/loft1.avif';
import pic4 from './Residencepic/homereno.avif';
const Residential = () => {
    return (
        <>
            <div className='relative'>
                <img src={pic1} alt="Residential" className='md:h-[80vh] h-96 w-full object-cover' />
                <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-4'>
                    <h1 className='text-white font-header text-2xl md:text-4xl lg:text-6xl font-bold'>Residential Services</h1>
                    <button className="mt-6 w-36 md:w-40 bg-white text-black px-4 py-2 rounded-md hover:bg-gray-600 hover:text-white transition duration-300">
                        Email Us
                    </button>
                </div>
            </div>

            <div className='flex flex-col items-center gap-4 px-4  md:px-10 lg:px-20 my-16  md:my-12'>
                <h1 className='text-xl md:text-2xl font-header'>Enhance Your Residential Areas with <strong>Our Skillful Services</strong></h1>
                <p className='font-sans max-w-4xl'>
                    For over 25 years, we've delivered thousands of kitchen and bathroom upgrades, loft transformations, home additions, and a wide range of distinctive residential projects. Whether you want to increase your space, refresh your home's appearance, or undertake a complete makeover, our solutions provide personalized, cost-effective, and top-quality services.
                </p>
                <Link to="/contactus" className='px-4 py-2 bg-black text-white rounded-md hover:bg-gray-600 transition duration-300'>Contact Us</Link>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 px-4  md:px-10 lg:px-20 my-16  md:my-12 items-center'>
                <img src={pic2} alt="Home Extension" className='w-full h-72 md:h-[310px] object-cover' />
                <div className='space-y-4'>
                    <p className='font-header'>With Zarobi Builders</p>
                    <h2 className='text-xl md:text-2xl font-header'>About <strong>Home Extensions</strong></h2>
                    <p className='font-sans'>
                        Zarobi Builder is a trusted name in home extensions. From single- and double-story additions to kitchen extensions and open-plan conversions, our expert team handles every aspect — from planning to construction. We’re committed to craftsmanship, transparency, and customer satisfaction.
                    </p>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 px-4  md:px-10 lg:px-20 my-16  md:my-12 items-center'>
                <div className='space-y-4 order-2 md:order-1'>
                    <p className='font-header'>With Zarobi Builders</p>
                    <h2 className='text-xl md:text-2xl font-header'>About <strong>Loft Conversion</strong></h2>
                    <p className='font-sans'>
                        Loft Conversions are among the top 5 ways to increase property value. Zarobi Builders has completed over 800 successful loft projects. They are cost-effective, flexible, and add a new dimension to your space with customized features.
                    </p>
                </div>
                <img src={pic3} alt="Loft Conversion" className='w-full h-72 md:h-[310px] object-cover order-1 md:order-2' />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 px-4  md:px-10 lg:px-20 my-16  md:my-12 items-center'>
                <img src={pic4} alt="Home Renovation" className='w-full h-72 md:h-[310px] object-cover' />
                <div className='space-y-4 font-header'>
                    <p>With Zarobi Builders</p>
                    <h2 className='text-xl md:text-2xl'>About <strong>Home Renovations</strong></h2>
                    <p className='font-sans'>
                        Renovations are our most requested service. From outdated spaces to full interior overhauls, we transform homes with modern design, functionality, and personal style. Kitchens, interiors, and layouts — we do it all.
                    </p>
                </div>
            </div>

            <div className='flex flex-col items-center gap-4 px-4  md:px-10 lg:px-20 my-16  md:my-12'>
                <h2 className='font-header text-xl md:text-2xl'>Our Commitment to <strong>Quality</strong></h2>
                <p className='font-sans max-w-4xl'>
                    Whether it's a kitchen overhaul, interior styling, or full structural changes, Zarobi Builders brings experience, passion, and precision. We're ready to enhance any part of your home.
                </p>
                 <Link to="/contactus" className='px-4 py-2 bg-black text-white rounded-md hover:bg-gray-600 transition duration-300'>Contact Us</Link>
            </div>
        </>
    )
}
export default Residential;