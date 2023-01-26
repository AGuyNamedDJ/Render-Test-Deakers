// Import
import React, { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";

// Functional Component
const Bentley = () => {
    const { bentleyState: [bentley, setBentley] } = useOutletContext();

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });

    {/* This return format is to map all. */}

    return(
        bentley && bentley.length ? 
        <div className="car-listings-container">
            <div className="row">
                {bentley.map((car, idx) => { 
                    return (
                        <div className="car-listing-box">
                            <div className="car-image-container">
                                <img src={car.imageOne} className="car-image" alt="car"></img>
                            </div>
                            <div className="car-details-container">
                                <p id="car-name">{car.year} {car.make} {car.model}</p>
                                <br></br>
                                <p id="car-price">Price: {formatter.format(car.price)} | Mileage: {car.mileage}</p>
                                <br></br>
                                <button id="view-listing-button"><Link className="link" to={`/inventory/bentley/${car.carId}`}>View Listing</Link></button>
                            </div>
                            <br></br>
                            <br></br>
                        </div>
                        
                    )
                })}
            </div>
        </div>
         : "No Vehicles to display."
    )
};


// Export
export default Bentley;

// Rememeber IDs(#) are more specific than Classes(.)