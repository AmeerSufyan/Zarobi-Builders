  import React, {useState, useEffect} from 'react';
  import {Link, useLocation} from 'react-router-dom';
  import Slider from 'react-slick';
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";
  import pic1 from './homepic1.jpg';
  import pic2 from './homepic2.avif';
  import pic3 from './homepic3.avif';
  import pic4 from './homepic4.jpg';
  import image1 from './Projectpic/projectpic1.avif';
  import image2 from './Projectpic/roompic.jpg';
  import image3 from './Projectpic/loungepic.avif';
  import image4 from './Projectpic/kitchenpic.avif';
  import pic5 from './tvlounge.avif';
  import {FaCheck, FaQuoteLeft, FaStar} from 'react-icons/fa';
  import proj1 from './Projectpics/projectpic1.avif';
  import proj2 from './Projectpics/p1img1.avif';
  import proj3 from './Projectpics/p2img1.avif';
  import proj4 from './Projectpics/p3img1.avif';
  import proj5 from './Projectpics/p4img1.avif';
  import proj6 from './Projectpics/p5img1.avif';
  const Home = ({scrollRef}) => {
      const images = [image1, image2, image3, image4];
      const project_images = [{imgs: proj1, text:'Bahria Town Phase 7', path: '/Project/Bahria_town_phase_7'}, {imgs: proj2, text: 'Bahria Town Phase 8', path: '/Project/Bahria_town_phase_8'}, 
        {imgs: proj3, text: 'Bahria Town Phase 9',  path: '/Project/Bahria_town_phase_9'}, {imgs: proj4, text: 'DHA RWP Phase 1', path: '/Project/DHA_RWP_Phase_1'}, 
        {imgs: proj5, text: 'DHA RWP Phase 2', path: 'Project/DHA_RWP_Phase_2'}, {imgs: proj6, text: 'DHA RWP Phase 3', path: '/Project/DHA_RWP_Phase_3'}]
      const reviews = [
          {icon: FaQuoteLeft, paragraph: 'Zarobi Builders renovated our home and exceeded all expectations. The attention to detail, timelines,  and professionalism were outstanding. I’ve already recommended them to friends and family!', 
            name: 'Ahmad Islamabad'},
          {icon: FaQuoteLeft, paragraph: 'The team at Zarobi Builders handled our office extension with great care and expertise. They kept us informed, stayed within budget, and delivered beautiful results.',
            name: 'Bilal Islamabad'},
          {icon: FaQuoteLeft, paragraph: 'I had an excellent experience working with Zarobi Builder and Construction. From start to finish, their team was professional and reliable. They helped me design my dream home, ensuring that every detail matched my vision. The construction process was seamless, and they completed the project on time and within budget. The quality of work is exceptional, and I highly recommend Zarobi for any building or construction needs!"',
              name: 'Rahim Islamabad'},
          {icon: FaQuoteLeft, paragraph: 'Zarobi Builder and Construction exceeded my expectations. I hired them for a major renovation of my office space, and they delivered outstanding results. Their team communicated with me every step of the way and made sure the project stayed on track. The final outcome was even better than I imagined. The craftsmanship and attention to detail were top-notch. I will definitely work with them again for future projects!"',
                name: 'Zahid Islamabad'},    

      ]

      const [current, setCurrent] = useState(0);
      const [currentRev, setCurretnRev] = useState(0);
       const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
         responsive: [
    {
      breakpoint: 1024, // For tablets and smaller desktops
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768, // For tablets and large phones
      settings: {
        slidesToShow: 1,
      },
    },
  ],
  autoplay: true,
  autoplaySpeed: 3000
  
       }

      const nextSlide = () => {
          setCurrent((prev) =>(prev === images.length-1 ? 0: prev+1))
      }
      const prevSlide = () => {
          setCurrent((prev) => (prev === 0 ? images.length-1 : prev-1))
      }
      useEffect(() => {
          const interval = setInterval(() => {
              nextSlide();
          }, 3000);
          return () => clearInterval(interval);
      }, []);
  
      useEffect(() => {
        const interval = setInterval(() => {
          nextRev();
        }, 3000);
        return () => clearInterval(interval);
      })
       
      const nextRev = () =>{
          setCurretnRev((prev) => prev === reviews.length - 1 ? 0 : prev + 1);
      }
      const prevRev = () => {
          setCurretnRev((prev) => prev === 0 ? reviews.length - 1 : prev - 1)
      }
      
      const location = useLocation();
      useEffect(() => {
        if(location.state?.scrollToContact){
          const contactForm = document.getElementById('contact-form');
          if(contactForm){
            contactForm.scrollIntoView({behavior: 'smooth'});
          }
        }
      }, [location])
      //For Contact Form
      const [formData, setFormData] = useState({
          Name: '',
          Email: '',
          Phone: '',
          Message: '',
        });
      
        const [status, setStatus] = useState('');
      
        const handleChange = (e) => {
          setFormData({
            ...formData,
            [e.target.name]: e.target.value,
          });
        };
      
        const handleSubmit = async (e) => {
          e.preventDefault();
      
          const response = await fetch("http://localhost:8000/contact/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
      
          const result = await response.json();
      
          if (response.ok) {
            setStatus("Message sent successfully!");
            setFormData({ Name: "", Email: "", Phone: "", Message: "" });
          } else {
            setStatus(result.error || "Something went wrong.");
          }
        };
      
      return(
      <>
      <div className='text-white relative'>
          <img src={pic1} alt="Noimage" className='w-full h-[80vh] sm:h-[80vh] md:h-[80vh] object-cover'/>
         <div className='absolute inset-0 flex flex-col justify-center px-4  md:px-10 lg:px-20'>
          <h1 className="text-[28px] sm:text-[36px] md:text-[52px] lg:text-[60px] font-bold font-header leading-snug max-w-4xl">
      Zarobi Builders Most Trusted Construction Company
    </h1>

    <p className="mt-4 text-sm sm:text-base md:text-lg max-w-2xl">
      At Zarobi Builders, we bring your ideas to life with strong long-lasting buildings.
      People trust us because we always deliver quality work on time. We build homes, offices, and more — big or small.
      Our team cares about every detail from start to finish. Let’s build something great together.
    </p>

    <div className="mt-6 flex flex-col sm:flex-row gap-4">
      <button className=" w-40 bg-white text-black px-4 py-2 rounded-md hover:bg-gray-600 hover:text-white">
        Email Us
      </button>
      <button className="bg-black w-40 text-white px-4 py-2 rounded-md hover:bg-gray-600">
        Free Quote
      </button>
    </div>
  </div>
</div>
      <div className='flex items-center flex-col px-4  md:px-10 lg:px-20 my-16  md:my-12 gap-4'>
          <h1 className='text-[24px] font-bold font-header text-center'>Zarobi Builders In Development</h1>
          <p className='font-sans'>Zarobi Builders in Development represents a dynamic and evolving team of construction professionals 
          committed to honing their expertise and advancing in the building industry. With a focus on skill-building,
      innovation, and hands-on experience, they are dedicated to delivering high-quality projects while developing
        a reputation for reliability and craftsmanship. Each builder in this group is on a journey of growth, learning
        , and improvement, working toward becoming a trusted leader in the construction world.
        The team at Zarobi Builders in Development believes in the power of collaboration and continuous learning,
        recognizing that the construction industry is ever-changing and requires both adaptability and foresight. 
        By combining traditional construction methods with the latest technologies and trends, they strive to stay 
        ahead of the curve, ensuring their projects meet the highest standards of safety, sustainability, and design.</p>
        <Link to="/contactus" className=' bg-black hover:bg-gray-600 mr-10 sm:py-2 sm:px-4 px-2   text-white rounded-md'>Contact Us</Link>
      </div>
      <div className='px-4  md:px-10 lg:px-20'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-x-9'>
      <div className='space-y-5'>
          <h1 className='font-header'>Residential Services</h1>
          <h1 className='text-[24px] font-header'>Enhance Your Home with <strong>Our Skillful Services</strong></h1>
          <img src={pic2} alt="noimage" className='w-[520px] h-[360px] object-cover'/>
      </div>
      <div className='space-y-7 mt-10'>
          <p className='font-sans'>Whether you’re aiming to enlarge your home, update its style, or undertake a full makeover, our 
              all-inclusive residential offerings provide customized, budget-friendly, top-quality solutions to 
              suit your requirements and turn your ideas into reality.</p>
              <div>
              <h1 className='font-header font-bold flex items-center gap-3'><FaCheck/>Home Renovation</h1>
          <p className='font-sans'>Zarobi Builder offers top-tier, budget-friendly bathroom and kitchen remodels, along with an
            extensive selection of home improvement services — including full-scale home renovation and restoration 
            solutions tailored to your needs.</p> </div>
            <div> 
            <h1 className='font-header font-bold flex items-center gap-3'><FaCheck/>Extensions</h1>
          <p className='font-sans'>Over the years, Zarobi Builder has successfully delivered thousands of home
              extensions — consistently ensuring exceptional quality, regardless of the project's size or financial scope.</p>   
              </div> 
              <div>
              <h1 className='font-header font-bold flex items-center gap-3'><FaCheck/>Loft Conversion</h1>
          <p className='font-sans'>What sets us apart in loft conversions is our commitment not just to the 
              structural aspects, but also to the design details—creating a visually appealing loft space tailored specifically to your preferences.</p>  
              </div>
      </div>
      </div>
      </div>
      <div className='px-4  md:px-10 lg:px-20'>
      <div className='grid grid-cols-1 md:grid-cols-2 mt-12 gap-x-9'>
      <div className='space-y-6'>
        <h1 className='font-header'>Commercial Services</h1>
          <p className='font-sans'>From repurposing current spaces to revitalizing heritage buildings and crafting 
              bespoke designs, our commercial services are tailored to address the distinct requirements of your 
              business.</p>
            <div>
              <h1 className='font-header font-bold flex items-center gap-3'><FaCheck/>Commercial Conversion</h1>
          <p className='font-sans'>With Zarobi Builder, you can transform your commercial property into a customized, budget-friendly, top-tier
              space that perfectly aligns with the vision you have for your business and its physical environment.</p></div>   
            <div>
            <h1 className='font-header font-bold flex items-center gap-3'><FaCheck/>Custom Builds</h1>
          <p className='font-sans'>Most members of our team at Zarobi Builder have over 25 years of experience in 
              the construction industry, providing expert guidance and flawless project delivery — Zarobi Builder is
              here to turn your intricate ideas into reality.</p></div>  
              <div>
              <h1 className='font-header font-bold flex items-center gap-3'><FaCheck/>Hotel Restorations</h1>
          <p className='font-sans'>Preserve and elevate the charm of your hotel with our top-tier restoration services
              – Zarobi Builder has partnered with renowned Pakistani establishments such as Pearl Continental, 
              Marriott Hotel, and Serena Hotel. </p> </div> 
              </div>
              <div className=' space-y-5'>
          <h1 className='text-[24px] font-header mt-5'>Enhance Your Businesses with <strong>Our Commercial Services</strong></h1>
          <img src={pic3} alt="noimage" className='w-70 h-[360px] object-cover'/>
      </div>
      </div>
      </div>
      <div className='px-4  md:px-10 lg:px-20 font-sans mt-12 md:mt-16'> 
        <p className='text-[20px] mb-3'>___ Projects</p>
          <strong className='font-header text-[24px] '>What We've built</strong>
          <p>Take a look at some of <strong>our standout projects</strong>—crafted with precision, designed for comfort, and built to 
            last. From modern homes to commercial developments, our work reflects quality and attention to detail at 
            every stage.</p></div>

  <div className='mt-5  px-8  md:px-10 lg:px-20  '>
  <div className='relative'>
    <Slider  {...settings} >
    {project_images.map((img, index) => (
      <div key={index}  className='p-3'>
        <div className=' relative group '>
        <img src={img.imgs} className='w-full h-80 rounded-xl' alt={`Project ${index}`} />
        <div className='text-overlay absolute inset-0 rounded-xl bg-black/20 flex flex-col gap-4 items-center justify-center transition-opacity duration-300 text-white opacity-0 group-hover:opacity-100'>
        <strong>{img.text}</strong>
        <Link  to={img.path} className='bg-black text-white px-4 py-2 rounded-md hover:bg-gray-600 hover:text-white'>Open Project</Link>
        </div>
        </div>
      </div>
    ))}
    </Slider>
  </div> 
</div>

      <div className='flex items-center flex-col px-4  md:px-10 lg:px-20 gap-4 my-16 md:my-12'>
          <h1 className='text-[24px] font-bold font-header'>Our Devotion to Quality</h1>
          <p className='font-sans'>At Zarobi Builder, excellence is at the core of everything we do. We are committed 
              to delivering outstanding outcomes that go beyond your expectations. Our focus on quality is evident in
              our careful attention to detail, use of premium materials, and adherence to industry-leading standards.
                We believe that every project deserves the finest craftsmanship and professionalism. From the first 
                consultation to the final handover, our experienced team ensures that each stage meets the highest 
                quality benchmarks. We collaborate closely with you to understand your vision and deliver a finished 
                product that shines with distinction, exceeding your expectations and honoring our commitment.</p>
        <Link to="/contactus" className=' bg-black hover:bg-gray-600 mr-10 sm:py-2 sm:px-4 px-2   text-white rounded-md'>Contact Us</Link>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 px-4  md:px-10 lg:px-20 gap-8'>
          <div>
              <img src={pic4} alt="noimage" className='w-50 h-[400px]'/>
          </div>
          <div className='space-y-5 flex flex-col justify-center'>
              <h1 className='font-header'>A commitment to Excellence</h1>
              <h1 className='font-header text-[24px] font-bold '>Why Zarobi Builders?</h1>
              <p  className='font-sans'>For over 25 years, Zarobi Builder has established a strong reputation in the construction industry by
                  consistently delivering top-tier results for our clients. We recognize how valuable your property 
                  is—whether it's your home or your workplace—and we’re deeply committed to excellence in every 
                  detail. Our dedication to quality sets us apart from other builders.Project after project, we’ve 
                    that our priority isn’t just profit, but going above and beyond to exceed client expectations. With Zarobi,
                    you can have complete confidence that your project is in capable hands. From elegant bathroom upgrades to 
                    stylish loft transformations, Zarobi Builder is here to reimagine and enhance your living or working environment.</p>
          </div>
      </div>
      <div className='my-16 md:my-12 flex  items-center flex-col px-4  md:px-10 lg:px-20 gap-5 relative'>
          <h1 className='font-header font-bold text-[24px]'>Our Recent Projects</h1>
          <div className='w-full overflow-hidden'>
          <div  className="flex transition-transform duration-700 ease-in-out  mb-10 "
          style={{ transform: `translateX(-${current * 100}%)`,  }}>
              {images.map((img ,index) => (
        <img key={index} src={img} className='w-full flex-shrink-0 h-96' alt=""/>
              ))}
          </div>
          </div>
          <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white px-3 py-1 rounded-full"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white px-3 py-1 rounded-full"
        >
          ›
        </button>
      </div>
      <div className='relative w-full  my-16 md:my-8'>
      <h1 className='font-header text-[24px] font-bold text-center mb-5'>Clients Reviews</h1>
      <div className='w-full overflow-hidden '>
          <div  className="flex transition-transform duration-700 ease-in-out "
          style={{ transform: `translateX(-${currentRev * 100}%)`,  }}>
          {reviews.map((rev, index) => {
          const Icon = rev.icon;
          return (
            <div
              key={index}
              className="w-full flex-shrink-0  flex items-center flex-col shadow-lg mb-10 px-4  md:px-10 lg:px-20"
            >
              <Icon className="text-2xl mb-2" />
              <p className=" mb-4">{rev.paragraph}</p>
              <p className="font-semibold">{rev.name}</p>
              <div className="flex mt-3 gap-2 mb-3">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-yellow-500" />
          ))}
        </div>
            </div>
          );
        })}
          </div>
          <div>
          <button
          onClick={nextRev}
          className="absolute top-1/2 left-4  transform -translate-y-1/2 bg-black text-white px-3 py-1 rounded-full"
        >
          ‹
        </button>
        <button
          onClick={prevRev}
          className="absolute top-1/2  right-4  transform -translate-y-1/2 bg-black text-white px-3 py-1 rounded-full"
        >
          ›
        </button>
  </div>
  </div>
          </div>
          <div className=' relative'>
            <img src={pic5} alt="" className='w-full object-cover h-[800px] md:h-[700px]' /> 
            <div className='absolute inset-0 flex justify-center items-center px-4 md:px-16 mb-24 mt-24 md:mt-10 md:mb-16'>
              <form ref={scrollRef} id="contact-form"  onSubmit={handleSubmit} className='bg-black  text-white max-w-xl flex flex-col py-10 gap-7 px-10 font-sans'>
                <h2 className='font-header text-[24px]'>Get in touch!</h2>
                <div className='flex'>
               <input
                   type="text"
                   name="Name"
                   value={formData.Name}
                   onChange={handleChange}
                   placeholder="Name"
                   className="bg-black border-b flex-1 focus:outline-none py-3"
                  />
                  </div>

                  <div className='flex'>
                <input type="email" placeholder='Email' name="Email" value={formData.Email} onChange={handleChange}className='bg-black border-b flex-1 focus:outline-none py-3'/>
                </div>
                  <div className='flex'>
                <input type="tel" placeholder='Phone' name="Phone" value={formData.Phone} onChange={handleChange} className='bg-black border-b flex-1 focus:outline-none py-3'/>
                </div>
                <textarea type="text" placeholder='Message' name="Message" value={formData.Message} onChange={handleChange}className='bg-black border-b focus:outline-none py-4'/>
                <div className='flex items-center gap-2 '>
                <input type="checkbox" className='mb-5' required/>
                <p className='text-[14px]'>I agree that my information and data will be collected and stored electronically to answer my request.</p>
                </div>
                 {status && <p className="text-white text-sm mb-4">{status}</p>}
                <button type="submit" className='bg-white text-black p-2 max-w-40 hover:bg-slate-600 hover:text-white'>Send</button>
              </form>
            </div>
          </div>
      </>
      )
  }
  export default Home;