import React, { useState } from 'react';

const PriceFilter = () => {
  const [priceRange, setPriceRange] = useState({
    min: 0,
    max: 100
  });

  const handlePriceRange = (e) => {
    setPriceRange({
      ...priceRange,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <input
        type="range"
        min={0}
        max={100}
        value={priceRange.min}
        name="min"
        onChange={handlePriceRange}
      />
      <input
        type="range"
        min={0}
        max={100}
        value={priceRange.max}
        name="max"
        onChange={handlePriceRange}
      />
      <p>Precio mínimo: ${priceRange.min}</p>
      <p>Precio máximo: ${priceRange.max}</p>
    </div>
  );
};

export default PriceFilter;