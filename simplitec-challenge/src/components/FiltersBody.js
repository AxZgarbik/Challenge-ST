import React, { useState } from "react";

const FilterBody = () => {
  const [selectedType, setSelectedType] = useState("");

  const handleChange = (event) => {
    setSelectedType(event.target.value);
  };

  return (
    <div className="mt-5 mb-5">
      <label htmlFor="type-select">Carroceria: </label>
      <select
        className="mt-2 bg-white p-2 rounded-lg shadow-md"
        id="type-select"
        value={selectedType}
        onChange={handleChange}>
        <option value="">Todos los tipos</option>
        <option value="sedan">Sedán</option>
        <option value="suv">SUV</option>
        <option value="hatchback">Hatchback</option>
        <option value="coupe">Coupé</option>
      </select>
    </div>
  );
};

export default FilterBody;
