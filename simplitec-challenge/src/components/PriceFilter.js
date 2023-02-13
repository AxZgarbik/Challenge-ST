import React, { useEffect, useState, useContext } from "react";
import VehiclesContext from "../context/vehiclesContext";

const PriceFilter = () => {
  const { vehicles } = useContext(VehiclesContext);
  const [priceMinRange, setMinPriceRange] = useState(Infinity);
  const [priceMaxRange, setMaxPriceRange] = useState(-Infinity);

  const [priceMinFilter, setMinPriceFilter] = useState(priceMinRange);
  const [priceMaxFilter, setMaxPriceFilter] = useState(priceMaxRange);

  useEffect(() => {
    const allVariants = [];
    let min = Infinity
    let max = -Infinity
    vehicles.forEach((v) => {
      v.var.forEach((variant) => {
        allVariants.push({ ...variant });
      });
    });

    allVariants.forEach((v) => {
      if (v.price < min){
        min = v.price
      } 
      if (v.price > max) {
        max = v.price
      } 
    });
    setMaxPriceRange(max);
    setMinPriceRange(min)

  }, [vehicles]);

  const filterVehicles = (vehicles, priceMinRange, priceMaxRange) => {
    return vehicles.filter(vehicle => {
      return vehicle.var.some(variant => variant.price >= priceMinRange && variant.price <= priceMaxRange)
    });
  };

  const [filteredVehicles, setFilteredVehicles] = useState([]);

  useEffect(() => {
    setFilteredVehicles(filterVehicles(vehicles, priceMinRange, priceMaxRange));
  }, [vehicles, priceMinRange, priceMaxRange]);
  
  return (
    <div>
      <input
        type="range"
        min={priceMinRange}
        max={priceMaxRange}
        //value={priceMinRange}
        name="min"
        //onChange={filterVehicles}
      />
      <input
        type="range"
        min={priceMinRange}
        max={priceMaxRange}
        //value={priceMaxRange}
        name="max"
        //onChange={filterVehicles}
      />
      <p>Precio mínimo: ${priceMinRange}</p>
      <p>Precio máximo: ${priceMaxRange}</p>
    </div>
  );
};

export default PriceFilter;
