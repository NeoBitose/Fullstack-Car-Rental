import { useState, useEffect } from 'react';

export function useFetchCar(filters) {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCar = async () => {
            setLoading(true);
            try {
                const response = await fetch('http://localhost:3000/api/v1/cars', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        driverType: filters.driverType,
                        date: filters.date,
                        timeRent: filters.timeRent,
                        passenger: filters.passenger
                    })
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch cars');
                }

                const data = await response.json();
                setCars(data.data.cars);
            } catch (error) {
                console.error("Error fetching cars:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCar();
    }, [filters]);

    return { cars, loading };
}
