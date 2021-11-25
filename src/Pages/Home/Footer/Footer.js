import React from 'react';

const Footer = () => {
    const footer={    
    height: "60vh",
    background: "#FBD062",
    marginTop:"30px",
    
    }
    return (
        <div style={footer} >
            <div className="grid grid-rows-1">
                <div className="grid grid-cols-2">
                    <div className="mt-24" style={{marginLeft:"270px",lineHeight:"20px"}}>
                        <h2 className="text-4xl text-justify">Let us handle your <br /> project, professionally.</h2>
                        <p className="text-muted mt-8 text-justify">With well written codes, we build amazing apps for all <br /> platforms, mobile and web apps in general.</p>
                    </div>
                    <div className="mt-24" style={{marginRight:"110px",lineHeight:"20px"}}>
                    <form
          action="https://api.web3forms.com/submit"
          method="POST"
          id="form"
          class="needs-validation"
          novalidate
        >
          <input type="hidden" name="apikey" value="YOUR_ACCESS_KEY_HERE" />
          <input
            type="hidden"
            name="subject"
            value="New Submission from Web3Forms"
          />
          <input
            type="checkbox"
            name="botcheck"
            id=""
            style={{display :"none"}}
          />

           
            <div class="mb-4">
             
              <input
                type="text"
                name="name"
                id="full_name"
                placeholder="Mamun"
                required
                class="w-full px-3 py-2 bg-white placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
              <div
                class="empty-feedback invalid-feedback text-red-400 text-sm mt-1"
              >
                
              </div>
            </div>
            
          

        
            <div class="mb-4">
              
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Mamun@gmail.com"
                required
                class="w-full px-3 py-2 bg-white placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
              <div class="empty-feedback text-red-400 text-sm mt-1">
              
              </div>
              <div class="invalid-feedback text-red-400 text-sm mt-1">
                
              </div>
            </div>
 
           
          <div class="mb-4">
            

            <textarea
              rows="4"
              name="message"
              id="message"
              placeholder="Your Message"
              class="w-full h-28 px-3 py-2 bg-white placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              required
            ></textarea>
            <div
              class="empty-feedback invalid-feedback text-red-400 text-sm mt-1"
            >
              
            </div>
          </div>
          <div class="mb-3">
            <button
              type="submit"
              class="w-full px-3 py-4 text-white bg-black rounded-md focus:bg-indigo-600 focus:outline-none"
            >
             Send
            </button>
          </div>
          <p class="text-xs text-center text-gray-400" id="result">
            
          </p>
        </form>

                    </div>
                </div>
            </div>
            <p className="text-center" style={{marginTop:"80px"}}>&copy;copyright Orange labs 2020</p>
        </div>
    );
};

export default Footer;