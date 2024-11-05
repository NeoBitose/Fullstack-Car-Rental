import { useState } from 'react';

import { CarProvider } from '../context/carContext';
import FilterCard from './landing/FilterCard';
import CarCard from './landing/CarCard';
import Header from "./landing/Header"
import Footer from "./landing/Footer"

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
