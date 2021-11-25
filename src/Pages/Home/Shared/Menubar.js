import React from 'react';
import logo from '../../../images/logos/logo.png'
import {Link} from 'react-router-dom'
import './Menubar.css'
const Menubar = () => {
    return (
        <div className="md:container p-4">
        <div className="flex justify-between">
            <div className="logo">
                <img src={logo} style={{width:"8rem",marginLeft:"250px"}} alt="" />
            </div>
            <div className="navigate">
            

            <ul class="flex parent">
  <li class="mr-6">
    <Link to="/" className="common" >Home</Link>
  </li>
  <li class="mr-6">
    <Link to="/" className="common" >About</Link>
  </li>
  <li class="mr-6">
    <Link to="/" className="common" >Service</Link>
  </li>
  
</ul>



            </div>
        </div>
        
        </div>
    );
};

export default Menubar;