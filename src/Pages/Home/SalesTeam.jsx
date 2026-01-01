import React from 'react';
import amazon from '../../assets/brands/amazon.png'
import amazonV from '../../assets/brands/amazon_vector.png'
import casio from '../../assets/brands/casio.png'
import moonstar from '../../assets/brands/moonstar.png'
import randstar from '../../assets/brands/randstad.png'
import star from '../../assets/brands/star.png'
import starP from '../../assets/brands/start_people.png'

const SalesTeam = () => {
    return (

        <div className='text-2xl text-center font-bold my-6 border-b border-dotted '>We've helped thousands of sales teams
        <div className='flex flex-col md:flex-row  justify-center items-center gap-5 my-5 md:my-20 '>

           <img src={amazon} alt=""  /> 
            <img src={amazonV} alt="" /> 
             <img src={casio} alt="" /> 
              <img src={moonstar} alt="" /> 
               <img src={randstar} alt="" /> 
                <img src={star} alt="" /> 
                 <img src={starP} alt="" /> 
        </div>
        </div>
    );
};

export default SalesTeam;