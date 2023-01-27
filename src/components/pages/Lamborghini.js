// Import
import React, { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";

// Functional Component
const Lamborghini = () => {
    const { lamborghiniState: [lamborghini, setLamborghini] } = useOutletContext();

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });

    {/* This return format is to map all. */}

    return(
        lamborghini && lamborghini.length ? 
        <div className="car-listings-container">
            <div className="row">
                {lamborghini.map((car, idx) => { 
                    return (
                        <div className="car-listing-box">
                            <div className="car-image-container">
                                <img src={car.imageOne} className="car-image" alt="car"></img>
                            </div>
                            <div className="car-details-container">
                                <div className="car-details-container-top">
                                    <p id="car-name">{car.year} {car.make} {car.model}</p>
                                </div>
                                <div className="car-details-container-bottom">
                                    <p id="car-price">Price: {formatter.format(car.price)} | Mileage: {car.mileage}</p>
                                    <Link to={`/inventory/lamborghini/${car.carId}`}><button id="button">View Listing</button></Link>
                                </div>
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
export default Lamborghini;

// Rememeber IDs(#) are more specific than Classes(.)