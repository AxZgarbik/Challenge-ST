import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

function ContactForm({ dealerId,vehicleId }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    filing: "",
  });

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const sendLead = async () => {
    const url = `http://localhost:3200/dealer/${dealerId}/leads`;
    try {
      const response = await axios.post(url, {...formData,vehicleId});
      console.log(response);
      if (response.status === 201) {
        navigate("/lead");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1 className="font-bold text-2xl mt-5 mb-5">
        Compartinos algunos datos de contacto
      </h1>
      <div className="flex gap-4 mb-5">
        <div className="w-1/2">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-2 shadow appearance-none border rounded w-full py-2 bg-gray-100"
            required
          />
        </div>
        <div className="w-1/2">
          <label htmlFor="lastName">Apellido:</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="mt-2 shadow appearance-none border rounded w-full py-2 bg-gray-100"
            required
          />
        </div>
      </div>
      <div className="flex gap-4 mb-5">
        <div className="w-1/2">
          <label htmlFor="email">Mail:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-2 shadow appearance-none border rounded w-full py-2 bg-gray-100"
            required
          />
        </div>
        <div className="w-1/2">
          <label htmlFor="phone">Tel??fono:</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="mt-2 shadow appearance-none border rounded w-full py-2 bg-gray-100"
            required
          />
        </div>
      </div>
      <div clasname="flex mb-5">
        <div className="w-1/2">
          <label htmlFor="filing">Radicaci??n del veh??culo:</label>
          <input
            type="text"
            name="filing"
            id="vehicleRadiation"
            value={formData.vehicleRadiation}
            onChange={handleInputChange}
            className="mt-2 shadow appearance-none border rounded w-full py-2 bg-gray-100"
            required
          />
        </div>
      </div>
      <label htmlFor="termsAccepted" className="mb-5">
        <input
          type="checkbox"
          name="termsAccepted"
          id="termsAccepted"
          className="mr-4"
        />
        Acepto los <span className="font-bold">t??rminos y condiciones</span>
      </label>
      <button
        type="submit"
        className="w-full border rounded-full bg-zinc-800 text-white bg-solid my-24 p-4"
        onClick={() => sendLead()}
      >
        Cotizar
      </button>
    </form>
  );
}

export default ContactForm;
