import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import pic1 from './aboutimg.avif';
import teampic1 from './TeamPic/teampic1.jpg';
import teampic2 from './TeamPic/teampic2.jpg';
import teampic3 from './TeamPic/teampic4.jpg';
import teampic4 from './TeamPic/teampic4.avif';
import culturepic from './culturepic.avif'; 
import { FaTools, FaLightbulb, FaCheck, FaLeaf, FaChevronUp, FaChevronDown, FaTimes } from 'react-icons/fa';
const services_faqs = [
    {question: 'What types of construction services do you offer?',
     answer: 'For detailed information on the services we offer, please visit our Residential Services and Commercial Services pages.'   
    },
    {question: 'Do you undertake both residential and commercial projects?',
     answer: 'Yes, we specialize in both residential and commercial construction projects.Our experienced team is adept at delivering a wide array of services tailored to meet the unique needs of each client, ensuring high-quality results for every project we undertake.'},
     {question: 'Are you capable of managing all phases of a project, from design to construction?',
      answer: 'Yes, Zarobi Builders manages every aspect of your construction project—from initial design to final construction.Whether its a home renovation or a hotel restoration, our experienced team ensures a seamless and enjoyable process, delivering high-quality results tailored to your vision.'  
     },
     {question: ' Do you provide customized building solutions tailored to client needs?',
      answer: 'Yes, we provide custom building solutions with extensive experience, offering expert advice and handling complex construction projects.'
     },
     {question: 'Are your services available in my local area?',
      answer: 'Zarobi Builders currently offers its services exclusively in London. However, if you are nearby, feel free to reach out – we may still be able to assist you.'
     }
]

const contract_faqs = [
  {question: 'What makes Zarobi Builders the right choice over other construction companies?',
    answer: 'Zarobi Builders are committed to delivering high-quality work, using premium materials and focusing on every detail to ensure long-lasting and durable construction.'
  },
  {question: 'How do you maintain openness and build trust throughout the project?',
    answer: 'From the start, we ensure that all expectations are discussed and agreed upon. We keep clients updated regularly, providing progress reports, timelines, and any changes that may arise.'
  },
  {question: 'What kind of warranties or guarantees do you offer?',
    answer: 'We guarantee that all construction work will be completed to a high professional standard. If any defects arise due to poor workmanship within a specified period, we’ll fix them at no extra cost.'
  },
]
const AboutUs = () => {
    const [openIndex, setOpenIndex] = useState(null);
    // For image gallery
    const [selectedImg, setSelectedImage] = useState(null);
    const toggleQuestions = (currIndex) =>{
      setOpenIndex(openIndex === currIndex? null : currIndex)
    }
    return (
        <>
        <div className='relative font-sans'>
               <img src={pic1} alt="" className='h-[80vh] md:h-[80vh] w-full'/>
               <div className='absolute inset-0 bg-black/40'>
               <div className='absolute flex flex-col inset-0 items-center justify-center py-4'>
               <h1 className=' text-white font-header text-3xl md:text-4xl lg:text-6xl font-bold'>About Us</h1>
              <button className='bg-white px-4 mt-6 w-36 md:w-40 py-2 rounded-md hover:bg-gray-600 hover:text-white'>Email Us</button>
              </div>
              </div>
              </div>
        <div className='flex flex-col items-center justify-center px-4  md:px-10 lg:px-20 my-16  md:my-12 font-sans gap-4'>
          <h1 className='text-[24px] font-header text-center'>Zarobi Builders   <strong>In Development</strong></h1>
            <p>At Zarobi Builders, we specialize in providing top-tier construction and renovation services tailored
               to your specific requirements. Based in London, we are passionate about transforming spaces into
                functional, aesthetically pleasing, and enduring environments that stand the test of time. From
                custom kitchen and bathroom renovations to loft conversions, home extensions, and comprehensive 
                property transformations, we approach every project with meticulous attention to detail,
                exceptional craftsmanship, and a commitment to exceeding expectations.
                Our expertise also extends to commercial and hospitality renovations, where we've collaborated with 
                esteemed brands such as Easy Hotel, Gainsborough Hotel, and Gallery Hotel. Whether revitalizing hotel
                interiors, reconfiguring office layouts, or transforming retail spaces, we deliver innovative,
                precise, and professional solutions designed to meet your objectives.</p>
                <Link to="/contactus" className='bg-black text-white px-4 py-2 rounded-md hover:bg-gray-600'>Contact Us</Link>
        </div>
        <h1 className='font-header text-[24px] text-center my-4'>Team <strong>Gallery</strong></h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-9 px-4  md:px-10 lg:px-20'>
         <img src={teampic1} alt='' className=' w-full md:h-[200px] lg:h-[250px] xl:h-[320px] ' onClick={() => setSelectedImage(teampic1)}/>
         <img src={teampic2} alt='' className=' w-full' onClick={() => setSelectedImage(teampic2)}/>
         <img src={teampic3} alt='' className=' w-full' onClick={() => setSelectedImage(teampic3)}/>
         <img src={teampic4} alt='' className=' w-full' onClick={() => setSelectedImage(teampic4)}/>
         {selectedImg && (
          <div className='fixed inset-0 z-50 bg-black/50 flex items-center justify-center'>
            <div className='relative'>
              <img src={selectedImg} alt="" className='max-w-[90vw] max-h-[90vh]'/>  
                <FaTimes className='absolute top-5 right-6 bg-black text-white p-2 text-3xl cursor-pointer' onClick={() => setSelectedImage(null)}/>
            </div>
          </div>
         )}
        </div>
        <h1 className='font-header text-[24px] text-center mt-16 mb-3'>Company <strong>Culture</strong></h1>
        <div className='flex items-center justify-center flex-col px-4  md:px-10 lg:px-20 gap-5'>
            <p>Discover the Core Principles That Drive Zarobi Builders</p>
            <img src={culturepic} alt='' className='w-full h-96'/>
        </div>
         <div className='grid grid-cols-1 md:grid-cols-4 px-4  md:px-10 lg:px-20 my-8 space-y-4'>
                        <div className='flex items-center justify-center flex-col gap-3 shadow-xl p-2'><FaTools className='text-blue-500 text-2xl'/> <strong>Craftsmanship</strong>
                        <p>We take pride in our craft and strive for perfection in every detail. Our artisans and 
                            experts bring years of experience and expertise to each project.</p>
                        </div>
                         <div className='flex items-center justify-center flex-col gap-3 shadow-xl p-2'><FaLightbulb className='text-blue-500 text-2xl'/> <strong>Innovation</strong>
                        <p>We are always on the lookout for new technologies and trends in the industry. This dedication
                             to innovation allows us to offer you the latest solutions .</p>
                        </div>
                         <div className='flex items-center justify-center flex-col gap-3 shadow-xl p-2'><FaCheck className='text-blue-500 text-2xl'/> <strong>Reliability</strong>
                        <p>We understand that trust is paramount in any project. We are committed to delivering on 
                            time and within budget.</p>
                        </div>
                        <div className='flex items-center justify-center flex-col gap-3 shadow-xl p-2'><FaLeaf className='text-blue-500 text-2xl'/> <strong>Sustainability</strong>
                        <p>We believe renewable energy should be a part of every project in order to reduce pollution
                             and increase energy independence.</p>
                        </div>
                       </div>

                       <div className='flex items-center justify-center px-4  md:px-10 lg:px-20 mt-16 flex-col gap-4 font-sans'>
                        <strong className='text-[24px] font-header'>Frequently Asked Questions</strong>
                        <p>Have a Question? We're Here to Assist You.If you don't find the answer you're looking for
                             here, please visit our Contact Us page to get in touch.</p>
                             <strong className='text-[20px] font-header'>Services and Offerings</strong>
                             </div>
                             <div className='flex flex-col px-4  md:px-10 lg:px-20 gap-y-5 mt-2'>
                             {services_faqs.map((faqs, index) => (
                                <div key={index} className=' border border-black py-2 px-3'>
                                    <button onClick={() => toggleQuestions(index)} className='flex items-start gap-1 md:gap-3 '>
                                        {openIndex === index? <FaChevronUp/> : <FaChevronDown/>}
                                        {faqs.question}
                                    </button>
                                    <div>
                                    {openIndex === index && (
                                        <p>Ans: {faqs.answer}</p>
                                       
                                    ) } </div>
                                    </div>
                             ))
                             }
                             </div>
                             <div className='flex items-center justify-center mt-4  flex-col '>
                             <strong className='text-[20px] font-header ' >Contracts and Partnerships</strong>
                             </div>
                             <div className='space-y-5 px-4  md:px-10 lg:px-20 mt-2 mb-10'>
                              {contract_faqs.map((faqs,index) => (
                                <div key={index} className='border border-black py-2 px-3'>
                                <button onClick={() => toggleQuestions(index)} className='flex items-start  gap-1 md:gap-3'>
                                  {openIndex === index? <FaChevronUp/> : <FaChevronDown/>}
                                  {faqs.question}
                                </button>
                                {openIndex === index && (
                                   <p>Ans: {faqs.answer}</p>
                                )}
                                </div>
                              ))}
                             </div>
                    
        </>
    )
}
export default AboutUs;