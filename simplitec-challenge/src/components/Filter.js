import React from 'react';
import FilterDealers from './FilterDealers';
import FilterBody from './FiltersBody';
import PriceFilter from './PriceFilter';

const Filter = (props) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-10">
            <p className='indent-5' >Filtros: </p>
            <div className="px-6 py-4">
                <input type="text" placeholder="Filter" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" />
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.title}</div>
                <p className="text-gray-700 text-base">{props.description}</p>
                <FilterDealers/>
                <FilterBody/>
                <PriceFilter/>
            </div>
        </div>
    );
}

export default Filter;
