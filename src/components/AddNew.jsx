import { useEffect, useState } from "react";

const AddNew = () => {
    const [newProperties, setNewProperties] = useState([]);
     // Load new properties from local storage
     useEffect(() => {
        try {
            const storedProperties = JSON.parse(localStorage.getItem("newProperties")) || [];
            setNewProperties(storedProperties);
        } catch (error) {
            console.error("Failed to parse properties from local storage:", error);
            setNewProperties([]);
        }
    }, []);
    
    const handleAddNewProperty = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newProperty = {
            id: Date.now(),
            name: formData.get("name"),
            title: formData.get("title"),
            description: formData.get("description"),
            type: formData.get("type"),
            status: formData.get("status"),
            price: formData.get("price"),
        };
        const updatedProperties = [...newProperties, newProperty];
        setNewProperties(updatedProperties);
        localStorage.setItem("newProperties", JSON.stringify(updatedProperties));
        alert("Property added successfully!");
        // Reset the form
        e.target.reset();
    };
    
    return (
        <div data-aos="zoom-in" className="min-h-screen  flex justify-center items-center mt-16">
            <div className="card bg-slate-100 w-full max-w-lg shrink-0 rounded-xl p-10">
                <h2 className="text-3xl text-[#3d84a8] font-semibold text-center mt-2">New Property</h2>
                <form onSubmit={handleAddNewProperty} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Property Name</span>
                        </label>
                        <input name="name" type="text" placeholder="Enter property name" className="input input-bordered " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input name="title" type="text" placeholder="Add property title" className="input input-bordered " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Short description</span>
                        </label>
                        <textarea name="description" placeholder="Description" className="textarea input-bordered " required ></textarea>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Select Property</span>
                            </label>
                            <select
                                name="type"
                                required
                                className="input input-bordered w-full "
                            >
                                <option value="">Select Type</option>
                                <option value="Apartment">Apartment</option>
                                <option value="House">House</option>
                                <option value="Commercial">Commercial</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Status</span>
                            </label>
                            <select
                                name="status"
                                required
                                className="input input-bordered w-full "
                            >
                                <option value="">Set Status</option>
                                <option value="Available">Available</option>
                                <option value="Unavailable">Rented</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input name="price" type="number" placeholder="Add Price" className="input input-bordered " required />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#3d84a8] text-sm lg:text-base text-gray-50 rounded-lg">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddNew;