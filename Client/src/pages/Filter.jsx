import { useState } from 'react';

import { CarProvider } from '../context/carContext';
import FilterCard from '../components/FilterCard';
import CarCard from '../components/CarCard';
import Header from "../components/Header"
import Footer from "../components/Footer"

function ParentComponent() {
    return (
        <CarProvider>
            <Header/>
            <FilterCard/>
            <CarCard/>
            <Footer/>
        </CarProvider>
    );
}

export default ParentComponent;
