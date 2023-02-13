import { useState, createContext } from "react";

const VehiclesContext = createContext();

const VehiclesProvider = (props) => {
  const [vehicles, setVehicles] = useState([]);

  const fetchVehicles = async (setLoading) => {
    await fetch(`http://localhost:3200/`, {
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then(({ data }) => {
        setVehicles([...data]);
        setLoading(false);
      });
  };

  const findVehicleById = (id,setVehicle,setLoading) => {
      const vehicle = vehicles.find(vehicle => vehicle.id === Number(id))
      setVehicle({...vehicle});
      setLoading(false)
  }

  

  return (
    <VehiclesContext.Provider
      value={{
        vehicles,
        fetchVehicles,
        findVehicleById
      }}
    >
      {props.children}
    </VehiclesContext.Provider>
  );
};

export { VehiclesProvider };

export default VehiclesContext;
