import React from 'react';
import Cards from './Cards';

const CardList = ({vehicles}) => {
  return (
    <div className='grid grid-cols-4 gap-4'>
      {vehicles.map(vehicle => (
        <div>
          <div key={vehicle.id}><Cards vehicle={vehicle} key={vehicle.id}/></div>
        </div>
      ))}
    </div>
  );
};

export default CardList;