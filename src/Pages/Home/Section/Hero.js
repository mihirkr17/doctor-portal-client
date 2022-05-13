import React from 'react';
import chair from '../../../Assets/images/chair.png';

const Hero = () => {
   return (
      <div className="hero min-h-screen">
         <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='hero' />
            <div className='pr-12'>
               <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
               <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
               <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-bold text-white">Get Started</button>
            </div>
         </div>
      </div>
   );
};

export default Hero;