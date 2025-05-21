import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {FaCheckCircle, FaUser, FaListAlt, FaPlusCircle, FaSignOutAlt, FaEyeSlash, FaMinusCircle  } from 'react-icons/fa';
import logopic from './realstatelogo.jpeg';
import {toast} from 'react-toastify';

const AddBlogForm = () => {
  const [form, setForm] = useState({ title: '', image: '', excerpt: '', content: '', image1: '', content1: '', image2: '', content2: '' });
  const history = useHistory();
  const [blogName, setBlogName] = useState([]);
  const [editIndex, setEditIndex] =useState(null); 
  const [showPost, setShowPosts] = useState(false);
  const [showForm, setShowForm] = useState(false);
  
  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    if (isAdmin !== 'true') {
      history.push('/onlyAdminLogin');  
    }
    else{
      toast.success('login ')
    }
    // load blogs from local storage when page loads
    const addedblogs = JSON.parse(localStorage.getItem('blogs')) || [];
    setBlogName(addedblogs);
  }, [history]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleImageChange = (e, field) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
        setForm((prevForm) => ({
        ...prevForm,
        [field]: reader.result,
      }));
    };
    if (file) reader.readAsDataURL(file);
  };

  const handleAddBlog = (e) => {
    e.preventDefault();
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    if(editIndex !== null){
      storedBlogs[editIndex] = form;
       toast.success('Blog edited successfully', {
    icon: <FaCheckCircle style={{color: '#87ceeb'}}/>,
  });
    }else{
    storedBlogs.push(form);
    localStorage.setItem('blogs', JSON.stringify(storedBlogs)); // Save the new blog in localStorage
    toast.success('Blog added succesfully', {
      icon: <FaCheckCircle style={{color: '#87ceeb'}}/>
    });
  }
    setForm({ title: '', image: '', excerpt: '', content: '',  image1: '', content1: '', image2: '', content2: '' });  // Reset the form
    setEditIndex(null);
    history.push('/blog');
  };

   const deleteBlog = (indexToDelete) => {
  const updatedBlogs = blogName.filter((_, index) => index !== indexToDelete);
  setBlogName(updatedBlogs);
  localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
  toast.success('Blog deleted successfully', {
    icon: <FaCheckCircle style={{color: '#87ceeb'}}/>,
  });
};

 const editBlog = (index) => {
    setEditIndex(index);
    const blogToEdit = blogName[index];
    setForm({
      title: blogToEdit.title,
      image: blogToEdit.image,
      excerpt: blogToEdit.excerpt,
      content: blogToEdit.content,
      image1: blogToEdit.image1,
      content1: blogToEdit.content1,
      image2: blogToEdit.image2,
      content2: blogToEdit.content2,
    });
    setShowForm(true);
    setShowPosts(false);
  };

   const handleLogOut = () => {
    localStorage.removeItem('isAdmin');
    toast.success('Logout successfully', {
      icon: <FaCheckCircle style={{color: '#87ceeb'}}/>
    })
    history.push('onlyAdminLogin')
   }
  return (
    <>
    <div className="bg-black text-white w-full md:w-full  lg:w-1/5  lg:min-h-screen flex flex-col items-start lg:fixed  top-0 left-0 gap-y-2 p-4">
     <img src={logopic} alt="logoimage" className='w-32 h-32 rounded-full'/>
     <div className='flex items-start flex-col gap-y-3 ml-2'>
      <div className='flex items-center gap-2'>
    <FaUser/>
    <p>Admin Dashboard</p>
    </div>
      <button onClick={() => {setShowPosts(!showPost);
        setShowForm(false);
      }}  className='flex items-center gap-2'>
        {showPost ? <><FaEyeSlash/> Hide Posts </> : <><FaListAlt/> All Posts</>}
      </button>
      <button onClick={() => {setShowForm(!showForm)
        setShowPosts(false);
      }} className='flex items-center gap-2'>
        {showForm ? <><FaMinusCircle/>Hide Form</> : <><FaPlusCircle/>Add Blog</>}
      </button>
      <button onClick={handleLogOut}  className='flex items-center gap-2'><FaSignOutAlt/>Logout</button>
    </div>
    </div>
    {showPost && (
  <div className='lg:ml-[240px] md:ml-[20px] xl:ml-[280px] py-10 space-y-3 mr-6 ml-4'>
      <strong className='ml-2 lg:ml-0'>Project Title</strong>
     {blogName.map((blog, index) => (
     <div key={index} className='border-b border-black pb-4'>
  <div className='flex justify-between items-center  pr-1 '>
    <p className='font-header ml-2 lg:ml-0'>{blog.title}</p>
    <div className='space-x-5'>
      <button className='bg-black hover:bg-gray-600 text-white rounded-md font-sans px-4 py-1' onClick={() => editBlog(index)}>Edit</button>
      <button className='bg-black hover:bg-gray-600 text-white rounded-md font-sans px-2 py-1' onClick={() => deleteBlog(index)}>Delete</button>
    </div>
  </div>
</div>
    ))}
    </div>
  )}

    {showForm  && ( 
    <div className="w-full max-w-4xl   lg:ml-40 xl:ml-72 px-4 py-10">
      <h1 className="text-3xl font-bold font-header text-center mb-8">{editIndex !== null ? 'Update Blog Post': 'Add a Blog Post'}</h1>
      <form onSubmit={handleAddBlog} className="max-w-xl mx-auto font-sans bg-black text-white p-6 rounded shadow-lg">
       <label htmlFor='title'>Title</label>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          className="w-full p-2 mb-4 text-black outline-none rounded"
          required
        />
        <label>Feature Image (Less than 1MB)</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleImageChange(e, 'image')}
          className="w-full p-2 mb-4  rounded"
          required
        />
      
        <label htmlFor='excerpt'>Excerpt</label>
        <input
          name="excerpt"
          value={form.excerpt}
          onChange={handleChange}
          className="w-full p-2 mb-4 text-black outline-none rounded"
          required
        />
        <label htmlFor='content'>Description</label>
         <textarea
          name="content"
          value={form.content}
          onChange={handleChange}
          className="w-full p-2 mb-4 text-black outline-none rounded "
          required
        ></textarea>
        <label>Image 1 (Less than 1MB)</label>
         <input
          type="file"
          accept="image/*"
           onChange={(e) => handleImageChange(e, 'image1')}
          className="w-full p-2 mb-4  rounded "
        />
        <label htmlFor='content'>Image 1 Description</label>
        <textarea
          name="content1"
          value={form.content1}
          onChange={handleChange}
          className="w-full p-2 mb-4 text-black outline-none rounded"
        ></textarea>
        <label>Image 2 (Less than 1MB)</label>
         <input
          type="file"
          accept="image/*"
           onChange={(e) => handleImageChange(e, 'image2')}
          className="w-full p-2 mb-4  rounded"
        />
        <label htmlFor='content'>Image 2 Description</label>
        <textarea
          name="content2"
          value={form.content2}
          onChange={handleChange}
          className="w-full  p-2 mb-4 text-black outline-none rounded"
        ></textarea>
        <button type="submit" className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500">
         {editIndex !== null ? 'Update Blog': 'Add Blog'}
        </button>
      </form>
      </div>
      )}
</>
  );
};

export default AddBlogForm;
