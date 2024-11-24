import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import NewProperty from "./NewProperty";

const PropertyCards = () => {
    const allProperty = useLoaderData();
    const { cat } = useParams();
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        if (cat) {
            const filteredByType = allProperty.filter(
                item => item.type === cat
            );
            setProperties(filteredByType);
        } else {
            setProperties(allProperty.slice(0, 9));
        }
    }, [cat, allProperty]);

    return (

        <div className=" w-11/12 mx-auto flex flex-col lg:flex-row gap-4 mt-16">
             {/* Property Cards Section */}
            <div className="w-full lg:w-3/5">
                <h3 className="text-lg lg:text-2xl font-semibold text-gray-900">Properties</h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-12 border-2 p-2 rounded-xl">
                    {
                        properties.map(property => (
                            <PropertyCard key={property.id} property={property}></PropertyCard>
                        ))
                    }
                </div>
            </div>
            {/* New Properties Section */}
            <div className="w-full lg:w-2/5">
            <h3 className="text-lg lg:text-2xl font-semibold text-gray-900">New Properties</h3>
             <NewProperty></NewProperty>
            </div>
        </div>

    );
};

export default PropertyCards;
