import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const ThankYou = () => {
  return (
    <div>
        <Navbar/>
        <div className='grid justify-center items-center my-44'>
            <FontAwesomeIcon icon={solid("circle-check")} className="h-56 ml-8 mb-5" style={{color:"#183153"}}/>
            <h1 className='text-4xl font-semibold ml-14'>Thank You !!</h1>
            <Link to="/">
                <button className='text-white bg-zinc-700 rounded-2xl w-64 m-5 p-5'>Go to Home</button>
            </Link>
        </div>
    </div>
  );
};

export default ThankYou;
