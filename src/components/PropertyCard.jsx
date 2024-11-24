const PropertyCard = ({ property }) => {
    return (
        <div className="flex flex-col flex-grow h-full">
        <div className="flex-grow rounded-lg overflow-hidden shadow-lg bg-white hover:scale-105 transition ease-in-out duration-1000">
            <div className="p-4">
                <h3 className="text-xl font-semibold">{property.title}</h3>
                <p className="text-gray-600 text-sm">{property.description}</p>
                <div className="mt-4">
                    <p className="text-lg font-semibold text-purple-600">${property.price}/month</p>
                    <p className={`mt-2 text-sm ${property.status === 'Available' ? 'text-green-500' : 'text-red-500'}`}>
                        {property.status}
                    </p>
                </div>
            </div>
        </div>
    </div>
    
    );
};

export default PropertyCard;