// Import
import React, { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";

// Functional Component
const Bentley = () => {
    const { bentleyState: [bentley, setBentley] } = useOutletContext();
    {/* This return format is to map all. */}

    return(
        bentley && bentley.length ? bentley.map((car, idx) => { 
            <p className="title-text">Bentley</p> 
            return (
                <div>
                    {/* Image */}
                    <div>
                        <img src={car.imageOne}></img>
                    </div>

                    {/* Item Details */}
                    <div>
                        <p >{car.make}</p>
                        <p >{car.model}</p>
                        <p >{car.year}</p>
                        <p >{car.price}</p>
                        <p >{car.mileage}</p>
                        <p >{car.exteriorColor}</p>
                    </div>
                </div>


            )
        }) : "No Recipes to display, our Chefs are busy preparing for you!"
    )
};

// Export
export default Bentley;

// Rememeber IDs(#) are more specific than Classes(.)