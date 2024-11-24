import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PropertyCard from "./PropertyCard";

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

        <div className="flex-col lg:flex-row justify-center items-center">
             {/* Property Cards */}
            <div className="w-full lg:w-3/5">
          
                <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 mt-12">
                    {
                        properties.map(property => (
                            <PropertyCard key={property.id} property={property}></PropertyCard>
                        ))
                    }
                </div>
            </div>
            {/* New Properties */}
            <div className="w-full lg:w-2/5">
             
            </div>
        </div>

    );
};

export default PropertyCards;