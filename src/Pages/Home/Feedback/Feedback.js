import React from 'react';
import feedback from "../../../JSON/client.json"
import Font from 'react-font'
const Feedback = () => {
    return (
        <div className="mt-12 ">
        <Font family='Roboto'>
        <h1 style={{fontSize:"32px"}} >Clients  <span style={{color:"#7AB259"}}> Feedback</span> </h1>
        </Font>  
     <div style={{fontFamily:"Roboto",fontSize:"16px",marginLeft:"140px"}} className="flex justify-around mt-16">
              {
                  feedback.map(data=>  <div >
    
     <div className="max-w-xs mx-auto bg-white rounded-xl p-5 shadow-2xl m-2">
     <div className=' flex items-center'>
             <img src={data.pic} width="20%" className='rounded-full' alt="imgbox"/>
             <div className="ml-3">
                 <h3 className="font-semibold"> {data.name} </h3>
                 <p class="text-gray-500"> {data.category}</p>
             </div>
         </div>
         
         
         <p className="m-3 text-left"> {data.description}
         </p>
        
     </div>
    
  </div>
  
       
                  )
                      
              }
          </div>
          </div>
    );
};

export default Feedback;