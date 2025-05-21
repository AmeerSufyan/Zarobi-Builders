import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
  const blog = blogs[id];

  if (!blog) return <div className="text-center text-red-500 mt-20">Blog not found</div>;

  return (
    <div>
      <div className='relative'>
      <img src={blog.image} alt={blog.title} className="w-full h-96 md:h-[80vh]  object-cover rounded" />
      <div className='absolute inset-0 bg-black/40'>
      <h1 className="absolute inset-0 flex items-center text-white justify-center text-2xl md:text-4xl lg:text-6xl font-bold font-header  mb-4">{blog.title}</h1>
      </div>
      </div>
      <div className='px-4 md:px-10 lg:px-20 my-12 space-y-5 font-sans'>
      <p>{blog.excerpt}</p>
      <p>{blog.content}</p>
      </div>
      <div className='flex flex-col gap-y-6 px-4 md:px-10 lg:px-20'>
        <img src={blog.image1} alt={blog.title} className="w-full h-72 object-cover rounded " />
        <p className='flex items-center'>{blog.content1}</p>
        </div>
        <div className='flex flex-col gap-y-6  px-4 md:px-10 lg:px-20 my-12'>
         <img src={blog.image2} alt={blog.title} className="w-full h-72 object-cover rounded " />
        <p className='flex items-center'>{blog.content2}</p>
         </div>
         <div className='flex items-center justify-center mb-16 '>
      <Link to="/blog" className="bg-black text-white  px-4 py-2 hover:bg-gray-600 rounded-md"> Back to Blog Page</Link>
      </div>
      </div>
  );
};

export default BlogPost;
