import React from 'react';
import {Link} from 'react-router-dom';
import pic1 from './Projectpics/p1.jpg';
import proj1 from './Projectpics/projectpic1.avif';
import proj2 from './Projectpics/p1img1.avif';
import proj3 from './Projectpics/p2img1.avif';
import proj4 from './Projectpics/p3img1.avif';
import proj5 from './Projectpics/p4img1.avif';
import proj6 from './Projectpics/p5img1.avif';
 
const Projects = () => {
    return (
       <>
        <div className='relative'>
               <img src={pic1} alt="" className='h-96 md:h-[80vh] w-full'/>
               <div className='absolute inset-0 bg-black/40'>
               <div className='absolute flex flex-col inset-0 items-center justify-center py-4'>
               <h1 className=' text-white font-header text-2xl md:text-4xl lg:text-6xl font-bold'>Projects</h1>
              <button className='bg-white px-4 mt-6 w-36 md:w-40 py-2 rounded-md hover:bg-gray-600 hover:text-white'>Email Us</button>
              </div>
              </div>
              </div>       
              <div className='flex items-center px-4  md:px-10 lg:px-20 my-12  md:my-12 flex-col space-y-3'>
        <strong className='font-header text-[24px]'>Our Featured Projects</strong>
        <p>Explore a  collection of our most successful projects, reflecting the excellence, skill, and precision 
            that distinguish every endeavor we complete. From home renovations to large-scale commercial ventures,
            Zaroobi Builder's portfolio illustrates the wide scope of services we provide and the meaningful
            transformations we've achieved in each space. Discover how we turn ideas into reality through our 
            dedicated and innovative approach.</p>
            <Link to="/contactus" className='bg-black text-white px-4 py-2 rounded-md hover:bg-gray-600'>Contact Us</Link>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4  md:px-10 lg:px-20  gap-x-9 gap-y-8 mb-16'>
            <Link to='/project/Bahria_town_phase_7' className='relative'>
            <img src={proj1} alt="" className='h-[300px] w-full'/>
            <div className='absolute inset-0 bg-black/50'>
            <p className='absolute flex inset-0 items-center justify-center  font-bold text-white'>Bahria Town Phase 7</p>
            </div>
            </Link>
            <Link to="/project/Bahria_town_phase_8">
            <div className='relative'>
            <img src={proj2} alt="" className='h-[300px] w-full opacity-65'/>
            <div className='absolute inset-0 bg-black/40'>
             <p  className='absolute flex inset-0 items-center justify-center font-bold text-white'>Bahria Town Phase 8</p>
             </div>
             </div>
             </Link>
             <Link to="/project/Bahria_town_phase_9">
             <div className='relative'>
            <img src={proj3} alt="" className='h-[300px] w-full opacity-65'/>
            <div className='absolute inset-0 bg-black/40'></div>
             <p className='absolute flex inset-0 items-center justify-center font-bold text-white'>Bahria Town Phase 9</p>
             </div>
             </Link>
             <Link to="/project/DHA_RWP_Phase_1">
             <div className='relative'>
            <img src={proj4} alt="" className='h-[300px] w-full opacity-65'/>
            <div className='absolute inset-0 bg-black/50'>
             <p className='absolute flex inset-0 items-center justify-center font-bold text-white'>DHA RWP Phase 1</p>
             </div>
             </div>
             </Link> 
             <Link to="/project/DHA_RWP_Phase_2">
             <div className='relative'>
            <img src={proj5} alt="" className='h-[300px] w-full opacity-65'/>
            <div className='absolute inset-0 bg-black/50'>
             <p className='absolute flex inset-0 items-center justify-center font-bold text-white'>DHA RWP Phase 2</p>
             </div>
             </div>
             </Link>
             <Link to="/project/DHA_RWP_Phase_3">
             <div className='relative'>
            <img src={proj6} alt="" className='h-[300px] w-full opacity-65'/>
            <div className='absolute inset-0 bg-black/50'>
             <p className='absolute flex inset-0 items-center justify-center font-bold text-white'>DHA RWP Phase 3</p>
             </div>
             </div>
             </Link>
        </div>
       </>
    )
}
export default Projects