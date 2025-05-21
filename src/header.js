import React from 'react';
import {withRouter, useHistory} from 'react-router-dom';
import logopic from './realstatelogo.jpeg'
import {FaPhone} from 'react-icons/fa'
const Header = () => {
    const history = useHistory();
    const handleClick = () => {
      history.push('/', {scrollToContact: true});
    }
    
    return (
        <>
        <div className=' flex items-center sm:justify-between ml-2 font-sans mb-[-16px]'>
            <button onClick={handleClick} className='hidden lg:block bg-black sm:py-2 sm:px-4 px-2 mb-3 text-white md:ml-20 rounded-md'>Free Quote</button>
            <img src={logopic} alt="logoimage" className='w-36 h-32 mix-blend-multiply '/>
            <p className='hidden  lg:flex  mr-2 items-center gap-1 sm:gap-3 bg-black mb-3 text-white md:mr-20 px-2 sm:py-2 sm:px-4 rounded-md'><FaPhone/>+92 4734632783</p>
        </div>
        </>
    )
}
export default withRouter(Header);