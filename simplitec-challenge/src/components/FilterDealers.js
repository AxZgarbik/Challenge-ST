import React, { useState } from "react";

const FilterDealers = () => {
  const [selectedDealer, setSelectedDealer] = useState("");

  const handleChange = (event) => {
    setSelectedDealer(event.target.value);
  };

  return (
    <div>
      <label htmlFor="type-select">Dealer: </label>
      <select
        className="mt-2 bg-white p-2 rounded-lg shadow-md"
        id="type-select"
        value={selectedDealer}
        onChange={handleChange}>
        <option value="">Todos los Dealers</option>
        <option value="dealer1">Dealer 1</option>
        <option value="dealer2">Dealer 2</option>
        <option value="dealer3">Dealer 3</option>
        <option value="dealer4">Dealer 4</option>
      </select>
    </div>
  );
};

export default FilterDealers;
