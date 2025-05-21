import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import video from './BlogPic/blogvideo.mp4';
const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs = localStorage.getItem('blogs');
    if (storedBlogs) {
      setBlogs(JSON.parse(storedBlogs)); // Get blogs from localStorage
    }
    
  }, []);

  return (
    <>
    <div className='relative'>
     <video src={video} autoPlay muted loop className='h-[70vh] md:h-[90vh] w-full object-cover'></video>
     <div className='absolute inset-0 bg-black/20'>
     <h1 className='absolute inset-0 flex items-center justify-center text-white font-header font-semibold md:font-bold  text:3xl   md:text-6xl  '>Explore Our Blogs</h1>
    </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl  font-header text-center mb-8">Our <strong>Blogs</strong></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 font-sans  md:px-10 lg:px-20">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-black/90 p-4 rounded  text-white">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h2 className="text-xl mb-2">{blog.title}</h2>
            <p className="mb-4">{blog.excerpt}</p>
            <Link to={`/blogs/${index}`} className="text-blue-300 hover:underline">
              Read More 
            </Link>
          </div>
        ))}
      </div>
    </div>
</>
  );
};

export default BlogPage;
