import React from "react";
import { Link } from "react-router-dom";

const Card = ({ vehicle }) => {
  //year,price,name,image,marca
  return (
    <Link to={`/vehicle/${vehicle.id}`}>
      <div key={vehicle.id} className="border border-gray-300 rounded-lg overflow-hidden">
        <div className="p-2">
          <h2 className="text-lg font-semibold">
            {vehicle.brand} {vehicle.name}
          </h2>
          <div>
            <img src={vehicle.var[0].photo[0]} alt={vehicle.var[0].name}/>
            <div className="border-y flex ">
              <span className="mt-2 mr-5">Precio desde</span>
              <span className="text-3xl text-blue-900 tracking-wide font-semibold">
                ${vehicle.var[0].price.toLocaleString()}
              </span>
            </div>
            
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
