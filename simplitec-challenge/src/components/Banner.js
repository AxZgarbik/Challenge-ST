import React from 'react';

const Banner = () => {
    return (
        <div className=" bg-center h-72 w-full bg-cover " style={{ backgroundImage: "url(https://res.cloudinary.com/dzmgycgym/image/upload/v1676128889/vista-aerea-trafico-rotonda-autopista-noche_fk4fqs.jpg)" }}>
            <div className="flex-auto items-center h-full text-white">
                <h1 className="basis-full relative top-24 font-bold text-4xl whitspace-pre-line indent-5">Conoce nuestra oferta de Vehiculos</h1>
                <h1 className="basis-full relative top-24 font-bold text-4xl whitspace-pre-line indent-5">y adquirilo 100% online</h1>
            </div>
        </div>
    );
};

export default Banner;
