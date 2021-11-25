import React from 'react';
import services from "../../../JSON/service.json"
import Font from 'react-font'
const Services = () => {
    return (
        <div className="mt-24 ">
      <Font family='Roboto'>
      <h1 style={{fontSize:"32px"}} >Provide awesome  <span style={{color:"#7AB259"}}>services</span> </h1>
      </Font>  
   <div style={{fontFamily:"Roboto",fontSize:"16px",marginLeft:"140px"}} className="flex justify-around mt-16">
            {
                services.map(data=>  <div >
  
   <div className="max-w-xs mx-auto bg-white rounded-xl p-5 shadow-2xl m-2">
       <p> {data.description}
       </p>
       <div className='mt-5 flex items-center'>
           <img src={data.pic} width="20%" className='rounded-full' alt="imgbox"/>
           <div className="ml-3">
               <h3 className="font-semibold"> {data.category} </h3>
               
           </div>
       </div>
   </div>
  
</div>

     
                )
                    
            }
        </div>
        </div>
     
    );
};

export default Services;