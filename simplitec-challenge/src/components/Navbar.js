import React from "react";

function Navbar() {
  return (
    <nav className="bg-white-800 p-6 flex items-center justify-between flex-wrap">
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <span className="font-semibold text-xl tracking-tight">
          <img src="https://res.cloudinary.com/dzmgycgym/image/upload/v1676129396/Sin_t%C3%ADtulo_coqph2.png" alt="logo"/>
        </span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-600 hover:text-blue mr-4"
          >
            Vehiculos
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
