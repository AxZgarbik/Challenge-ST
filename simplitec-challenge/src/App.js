import React from 'react';
import Home from './components/Home';
import VehicleDetails from './components/VehicleDetails'
import NotFound from './components/NotFound';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import {VehiclesProvider} from './context/vehiclesContext';
import ThankYou from './components/ThankYou';

function App() {
  return (
    <VehiclesProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path="/vehicle/:id" element={<VehicleDetails/>}/>
          <Route path="/lead" element={<ThankYou/>}/>
        </Routes>
      </BrowserRouter>
    </VehiclesProvider>
  );
}

export default App;
