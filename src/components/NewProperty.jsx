import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const NewProperty = () => {
    const [newProperties, setNewProperties] = useState([]);

    // Retrieve data from local storage on component mount
    useEffect(() => {
        const storedProperties = JSON.parse(localStorage.getItem('newProperties')) || [];
        setNewProperties(storedProperties);
    }, []);

    return (
        <div className="mt-12">
            <NavLink to="/add" className="btn btn-primary mb-5">
                Add New
            </NavLink>
            {/* Render property cards */}
            <div className="w-full grid grid-cols-1  gap-5">
                {newProperties.length > 0 ? (
                    newProperties.map((property) => (
                        <div
                            key={property.id}
                            className="rounded-lg overflow-hidden shadow-lg bg-white p-4 hover:scale-105 transition ease-in-out duration-300"
                        >
                            <h3 className="text-xl font-semibold">{property.title}</h3>
                            <p className="text-gray-600 text-sm">{property.description}</p>
                            <div className="mt-4">
                                <p className="text-lg font-semibold text-purple-600">
                                    ${property.price}/month
                                </p>
                                <p
                                    className={`mt-2 text-sm ${
                                        property.status === 'Available'
                                            ? 'text-green-500'
                                            : 'text-red-500'
                                    }`}
                                >
                                    {property.status}
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">
                        No new properties available. Add some!
                    </p>
                )}
            </div>
        </div>
    );
};

export default NewProperty;
