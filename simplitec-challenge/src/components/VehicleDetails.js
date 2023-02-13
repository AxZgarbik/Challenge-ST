import React, {useEffect,useState,useContext} from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Banner from './Banner';
import VehiclesContext from '../context/vehiclesContext';
import VariantCard from "./VariantCard";
import ContactForm from './ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const VehicleDetails = () => {

  let {id} = useParams()
  const [ vehicle, setVehicle] = useState({});
  const [ loading, setLoading] = useState(true);
  const { findVehicleById } = useContext(VehiclesContext);

  useEffect(() => {
      findVehicleById(id,setVehicle,setLoading);
  }, []);

  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <div className="h-72">
        <Banner/>
      </div>
      <div className='flex justify-center'>
        <div className='h-full w-1/3'>
          {!loading && <img src={vehicle.var[0].photo[0]} alt={vehicle.name}/>}
          {!loading && <span className='text-2xl font-semibold'>Caracteristicas destacadas</span>}
          <div className='flex gap-4'>
            <FontAwesomeIcon icon={solid("clock") } className="mt-1"  /><span>{vehicle.year}</span>
            <FontAwesomeIcon icon={solid('door-open')} className="mt-1"  /><span>{vehicle.doors} puertas</span>
            <FontAwesomeIcon icon={solid('gas-pump')} className="mt-1"  /><span>{vehicle.fuelType}</span>
            <FontAwesomeIcon icon={solid('car')} className="mt-1"  /><span>{vehicle.bodyType}</span>
          </div>
        </div>
        <div className='mt-5'>
          {!loading && <h1 className='font-bold text-4xl'>{vehicle.brand} {vehicle.name}</h1>}
          {!loading && <h1 className='font-semibold text-4xl mt-4 text-blue-900 tracking-wide'>${vehicle.var[0].price.toLocaleString()}</h1>}
          {!loading && <h1 className='font-semibold text-2xl mt-4'>Reserva este auto por ${vehicle.var[0].reserved.toLocaleString()}</h1>}
          <h1 className='font-bold text-2xl mt-5 border-b-2 border-gray-200'>Elegi las caracteristicas</h1>
          <div className='grid grid-cols-2 gap-4'>
            {!loading && vehicle.var.map(variant => (
              <VariantCard variant={variant} key={variant.id}/>
            ))}
          </div>
          <ContactForm dealerId={vehicle.dealerId} vehicleId={vehicle.id}/>
        </div>
      </div>
    </div>
  );
};
export default VehicleDetails;