import React from 'react';
import {Link} from 'react-router-dom';
import pic1 from './Commercialpic/Commercial.jpg';
import pic2 from './Commercialpic/custom.jpg';
import pic3 from './Commercialpic/comm-con.jpg';
import pic4 from './Commercialpic/build-restore.jpg';

const Commercial = () => {
    return (
        <>
       <div className='relative'>
        <img src={pic1} alt="" className='h-96 md:h-[80vh] w-full'/>
        <div className='absolute inset-0 bg-black/40'>
        <div className='absolute flex flex-col inset-0 items-center justify-center py-4'>
        <h1 className=' text-white font-header text-2xl md:text-4xl lg:text-6xl font-bold'>Commercial Services</h1>
       <button className='bg-white px-4 mt-6 w-36 md:w-40 py-2 rounded-md hover:bg-gray-600 hover:text-white'>Email Us</button>
       </div>
       </div>
       </div>
       <div className='flex items-center flex-col px-4  md:px-10 lg:px-20 my-12  md:my-10 gap-4'>
        <h1 className='font-header text-[24px] text-center'>About <strong>Commercial Conversion</strong></h1>
        <p>In addition to our residential expertise, Zarobi Builders also provides a full range of commercial 
            construction services, expertly transforming and expanding spaces to suit a wide variety of business 
            requirements.For instance, we can repurpose a street-level office into a fully equipped dining 
            establishment, complete with a professional kitchen, service area, and welcoming seating space.</p>
            <p>What truly distinguishes Zarobi Builders is our in-depth understanding of each client's unique goals—
                insight gained through years of hands-on experience across a wide spectrum of commercial developments.
               Our seasoned professionals work closely with you to ensure your concept is brought to life with
                precision and excellence.</p>
                <p>At Zarobi Builders, we place a strong emphasis on honest pricing and clear budgeting.
               Unlike many contractors who include unexpected fees, Zarobi Builders guarantees full cost transparency
               —with no hidden charges. The quote you receive during your initial consultation is the final amount
                you'll pay, making financial planning simple and stress-free.</p>
                <Link to="/contactus" className='bg-black text-white px-5 py-2 rounded-md  mt-3 hover:bg-gray-600 hover:text-white'>Contact Us</Link>
       </div>
       <div className='flex justify-center font-header text-[24px] px-4  md:px-10 lg:px-20'>
        <h1>Main Types of <strong>Commercial Services</strong></h1>
       </div>
       <div className='grid grid-cols-1 md:grid-cols-2 gap-x-9 px-4  md:px-10 lg:px-20 my-6  md:my-10'>
        <div>
            <img src={pic2} alt="" className='h-72 md:h-96' />
        </div>
        <div className='space-y-2 font-sans flex flex-col justify-center'>
            <p className='mt-5 md:mt-0'>With Zarobi Builders</p>
            <h1 className='font-header text-[24px]'>Custom <strong>Builds</strong></h1>
            <p>For businesses with distinct construction requirements beyond our core services, Zaroobi Builder 
                provides exceptional customization. With over 25 years of industry experience, we specialize in 
                executing bold projects and meeting strict deadlines. Our leading interior designers, architects,
                and highly skilled craftsmen transform client concepts into tangible results. Each project adds to
                our depth of expertise, and we remain committed to client satisfaction — even when it calls for 
                extra time or resources — ensuring superior service and outstanding outcomes.</p>
        </div>
       </div>

       <div className='grid grid-cols-1 md:grid-cols-2 gap-x-9 px-4  md:px-10 lg:px-20'>
        <div className='font-sans space-y-2 flex flex-col justify-center'>
            <p>With Zarobi Builders</p>
            <h1 className='font-header text-[24px]'>Commercial <strong>Conversion</strong></h1>
            <p>Many businesses acquire properties that are either ill-suited to their operations or not functional 
                in their existing condition. Zaroobi Builder specializes in reimagining and renovating such spaces 
                to precisely match each client’s specific needs. In addition to structural modifications, we offer 
                end-to-end interior design services — right through to final furnishings. With our team of highly 
                experienced tradespeople, we deliver exceptional structural and interior transformations, ensuring
                the highest standards in both quality and project timelines.</p>
        </div>
        <div>
            <img src={pic3} alt="" className='h-72 md:h-96 mt-5 md:mt-0'/>
        </div>
       </div>
       <div className='grid grid-cols-1 md:grid-cols-2 px-4  md:px-10 lg:px-20 my-12  md:my-12 gap-x-9'>
        <div>
            <img src={pic4} alt="" className='h-72 md:h-96'/>
        </div>
        <div className='space-y-2 mt-5 md:mt-0 font-sans flex flex-col justify-center'>
         <p>With Zarobi Builders</p>
         <h1 className='font-header text-[24px]'>Building <strong>Restorations</strong></h1>
         <p>Vital for aging properties such as hotels, office rentals, and restaurants, building restoration is 
            often a more cost-effective solution than acquiring new real estate. Zaroobi Builder excels in this area
            , focusing primarily on exterior upgrades that improve energy performance while preserving the character
             of historic structures — a key consideration in cities like London. Restoring heritage buildings not 
             only reduces long-term upkeep expenses but also safeguards architectural legacy for future generations.</p>
        </div>
       </div>

       <div className='font-sans flex flex-col space-y-2 items-center px-4  mb-12 md:px-10 lg:px-20'>
        <p>If your commercial service type isn’t listed here, contact our team anyway. This list includes some of 
            our most popular commercial service options </p>
            <strong>To see examples of our commercial services head over to our projects page.</strong>
            <Link to="/contactus" className='bg-black text-white px-5 py-2 rounded-md hover:bg-gray-600'>Contact Us</Link>
       </div>
        </>
    )
}
export default Commercial;