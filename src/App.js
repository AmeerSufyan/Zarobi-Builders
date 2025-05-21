import {useRef} from 'react';
import {Route, Switch, useLocation } from 'react-router-dom';
import Navabr from "./Navbar";
import Home from   "./Home";
import Footer from "./Footer";
import Header from './header';
import Residential from './Residential';
import Commercial from './Commercial';
import ScrollToTop from './scrollToTop';
import Projects from './Projects';
import ProjectPic from './projectpics';
import AboutUs from './Aboutus';
import ContactUs from './ContactUs';
import BlogPage from './BlogPage';
import BlogPost from './BlogPost';
import LoginPage from './AdminLogin';
import AddBlogForm from './AddBlogForm';
import { ToastContainer } from 'react-toastify';


function App() {
  const location = useLocation();
  const bottomRef = useRef(null);
  const scrollToBottom = () => {
      bottomRef.current?.scrollIntoView({behavior: 'smooth'});
};
  
const admindash_paths = ['/onlyAdminLogin', '/add-blog']
const  show_Admin_Dash = admindash_paths.includes(location.pathname);
  return (
    <>
   {!show_Admin_Dash && <Header onHomeScroll={scrollToBottom}/> }
    {!show_Admin_Dash && <Navabr/>}
     <ScrollToTop/>
    <Switch>
    <Route exact path="/" render={(props) => <Home {...props} scrollRef={bottomRef}/>}/>
    <Route path="/residential" component={Residential}/>
    <Route path="/commercial" component={Commercial}/>
    <Route path="/projects" component={Projects}/>
    <Route path="/project/:id"component={ProjectPic}/>
    <Route path="/aboutus" component={AboutUs}/>
    <Route path="/contactus" component={ContactUs}/>
    <Route path="/blog" component={BlogPage} />
    <Route path="/blogs/:id" component={BlogPost} />
    <Route path="/onlyAdminLogin" component={LoginPage} />
    <Route path="/add-blog" component={AddBlogForm} />
    </Switch>
    {!show_Admin_Dash && <Footer/>}
    <ToastContainer position="top-right" autoClose={3000}  hideProgressBar={false}/>
    </>
  );
}

export default App;
