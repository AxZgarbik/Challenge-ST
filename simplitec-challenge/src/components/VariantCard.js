import React from "react";
import { Link } from "react-router-dom";

const VariantCard = ({ variant }) => {
  //year,price,name,image,marca
  return (
    <Link>
      <div key={variant.id} className="border border-gray-300 rounded-lg overflow-hidden mt-5 mb-5 text-center">
        <div className="p-2">
            <h2 className="text-lg font-semibold">
                {variant.name}
            </h2>
            <div>
                <span className="text-3xl text-blue-900 tracking-wide font-semibold">
                ${variant.price.toLocaleString()}
                </span>
            </div>
        </div>
    </div>
    </Link>
  );
};

export default VariantCard;
