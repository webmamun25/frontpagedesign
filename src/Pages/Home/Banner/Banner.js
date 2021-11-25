import React from 'react';
import banner from "../../../images/logos/Frame.png"
import {motion} from "framer-motion"
const Banner = () => {
    const hire={
        width: "170px",
        marginLeft:"-255px",
        marginTop:30,
        height:"45px",
        background: "#111430",
        borderRadius:" 5px",
        color:"#FFFFFF",
        
    }
    return (
        <div className="md:container p-4">
        <div className="flex justify-evenly" >
           <motion.div animate={{ x: 100 }} transition={{ duration: 1 }}  className="content mt-6 leading-8">
   

               <h1 className=" text-justify text-6xl ">
               Let’s Grow Your <br />
                Brand To The <br />
                Next Level
               </h1>
               <p style={{textAlign:"justify",marginTop:20}}>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Purus commodo ipsum duis <br /> laoreet maecenas. Feugiat </p>
               <button style={hire}>Hire us</button>
           </motion.div>
           <motion.div style={{width:"600px"}}  animate={{ x: -100 }}
  transition={{ type: "spring", stiffness: 100 }} >
               <img src={banner} style={{marginLeft:"320px"}} alt="" />
           </motion.div>
           
        </div>

        </div>
    );
};

export default Banner;