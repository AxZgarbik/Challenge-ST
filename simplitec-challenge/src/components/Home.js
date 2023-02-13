import React from 'react';
import Banner from './Banner';
import Navbar from './Navbar';
import Filter from './Filter';
import CardList from './CardList';
import { useState, useEffect, useContext } from "react";
import VehiclesContext from "../context/vehiclesContext";

const Home = () => {

    const { vehicles, fetchVehicles } = useContext(VehiclesContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchVehicles(setLoading);
    }, []);

  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <div className="h-72">
        <Banner/>
      </div>
      <div className='flex'>
        <div className='h-full w-1/3'>
          <Filter/>
        </div>
        <div className='mt-5'>
            {!loading && <CardList vehicles={vehicles}/>} 
        </div>
      </div>
      <footer className="flex items-center justify-center text-gray-600 bg-white p-6">
        <p className="text-xs">&copy; 2023 Axel Zgarbik</p>
      </footer>
    </div>
  );
};

export default Home;