import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Menubar from '../Shared/Menubar';
import './Home.css'
import Sitebar from '../../Sitebar/Sitebar'
import Services from '../Services/Services';
import Projects from '../Projects/Projects';
import Feedback from '../Feedback/Feedback';



const Home = () => {
   
   

    return (
        <div className="home" >
            <div className="total-height">
            <Menubar></Menubar>
            <Banner></Banner>
            </div>
            <Sitebar></Sitebar>
            <Services></Services>
            <Projects></Projects>
            <Feedback></Feedback>
            <Footer></Footer>
            
           
        </div>
    );
};

export default  Home;