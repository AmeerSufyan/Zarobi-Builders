import React from 'react';
import { useParams } from 'react-router-dom';
import proj1 from './Projectpics/projectpic1.avif';
import proj2 from './Projectpics/p1img1.avif';
import proj3 from './Projectpics/p2img1.avif';
import proj4 from './Projectpics/p3img1.avif';
import proj5 from './Projectpics/p4img1.avif';
import proj6 from './Projectpics/p5img1.avif';


const project_images = {
    Bahria_town_phase_7: [
        `${process.env.PUBLIC_URL}/ProjectPics/room1.avif`, 
         `${process.env.PUBLIC_URL}/ProjectPics/guestroom5.jpg`,
         `${process.env.PUBLIC_URL}/ProjectPics/kitchen1.jpg`
    ],
    Bahria_town_phase_8: [
       `${process.env.PUBLIC_URL}/ProjectPics/room2.avif`,
       `${process.env.PUBLIC_URL}/ProjectPics/bath1.avif`,
        `${process.env.PUBLIC_URL}/ProjectPics/kitchen2.jpg`
    ],
    Bahria_town_phase_9: [
         `${process.env.PUBLIC_URL}/ProjectPics/room3.avif`,
         `${process.env.PUBLIC_URL}/ProjectPics/guestroom1.jpg`,
          `${process.env.PUBLIC_URL}/ProjectPics/kitchen3.jpg`
    ],
     DHA_RWP_Phase_1: [
        `${process.env.PUBLIC_URL}/ProjectPics/room4.avif`,
         `${process.env.PUBLIC_URL}/ProjectPics/guestroom2.jpg`,
          `${process.env.PUBLIC_URL}/ProjectPics/bath2.jpg`
    ],
     DHA_RWP_Phase_2: [
        `${process.env.PUBLIC_URL}/ProjectPics/room5.avif`,
         `${process.env.PUBLIC_URL}/ProjectPics/guestroom3.jpg`,
          `${process.env.PUBLIC_URL}/ProjectPics/kitchen4.webp`
    ],
     DHA_RWP_Phase_3: [
        `${process.env.PUBLIC_URL}/ProjectPics/room6.avif`,
         `${process.env.PUBLIC_URL}/ProjectPics/guestroom4.jpg`,
          `${process.env.PUBLIC_URL}/ProjectPics/kitchen5.jpg`
    ]
};
 const projectCategoryImage = {
    Bahria_town_phase_7: proj1,
    Bahria_town_phase_8: proj2,
    Bahria_town_phase_9: proj3,
    DHA_RWP_Phase_1: proj4,
    DHA_RWP_Phase_2: proj5,
    DHA_RWP_Phase_3: proj6
 };
 const heading = {
    Bahria_town_phase_7: 'Bahria Town Phase 7',
    Bahria_town_phase_8: 'Bahria Town Phase 8',
    Bahria_town_phase_9: 'Bahria Town Phase 9',
    DHA_RWP_Phase_1: 'DHA RWP Phase 1',
    DHA_RWP_Phase_2: 'DHA RWP Phase 2',
    DHA_RWP_Phase_3: 'DHA RWP Phase 3'
 }
const ProjectPic = () => {
    const { id } = useParams(); // Capture the project ID from the URL
    const selectedImages = project_images[id]; // Get the images for the selected project
    const categoryImage = projectCategoryImage[id];
    const categoryHeading = heading[id];
    if(!categoryImage){
        return <p className='my-20 text-center text-[24px] font-sans'>Category not found</p>
    }
   
    return (
        <>
        <div>
             <div className='relative'>
                           <img src={categoryImage} alt="" className='h-96 md:h-[80vh] w-full'/>
                           <div className='absolute inset-0 bg-black/40'>
                           <div className='absolute flex flex-col inset-0 items-center justify-center py-4'>
                           <h1 className=' text-white font-header text-2xl md:text-4xl lg:text-6xl font-bold'>{categoryHeading}</h1>
                          <button className='bg-white px-4 mt-6 w-36 md:w-40 py-2 rounded-md hover:bg-gray-600 hover:text-white'>Email Us</button>
                          </div>
                          </div>
                          </div>    
                <div className="grid grid-cols-1   gap-8 px-4  md:px-10 lg:px-20 my-20">
                    {selectedImages.map((img, index) => (
                        <div key={index} className="relative">
                            <img src={img} alt='' className="w-full h-[300px] md:h-[350px] object-cover" />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProjectPic;
