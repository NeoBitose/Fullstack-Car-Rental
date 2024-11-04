// import Header from "./landing/Header"
// import Footer from "./landing/Footer"
// import FilterCard from "./landing/FilterCard"
// import CarCard from "./landing/CarCard"

// function Filter() {
//     return (
//         <>
//             <Header/>
//             <FilterCard/>
//             <CarCard/>
//             <Footer/>
//         </>
//     )
// }

// export default Filter

import { useState } from 'react';
import FilterCard from './landing/FilterCard';
import CarCard from './landing/CarCard';
import { useFetchCar } from '../hooks/useFetchCars';

import Header from "./landing/Header"
import Footer from "./landing/Footer"

function ParentComponent() {
    const [filters, setFilters] = useState({
        driverType: "default",
        date: "",
        timeRent: "",
        passenger: 0
    });

    const { cars, loading } = useFetchCar(filters);

    return (
        <>
            <Header/>
            <FilterCard onFilterChange={(newFilters) => setFilters(newFilters)} />
            {loading && <p>Loading...</p>}
            <CarCard cars={cars} />
            <Footer/>
        </>
    );
}

export default ParentComponent;
