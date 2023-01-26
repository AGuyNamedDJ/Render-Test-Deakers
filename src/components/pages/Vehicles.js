// Import
import React, { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";


// Functional Component
const Vehicles = () => {
    const { inventoryState: [inventory, setInventory] } = useOutletContext();
    {/* This return format is to map all. */}

    return(
        <div>
           <h2 id="vehicle-title">Manufacturers</h2>
            <div className="logo-container">
                <Link to="/inventory/bentley">
                    <img src="https://www.carlogos.org/car-logos/bentley-logo-1400x800.png" className="manufacturer-logo" alt="Manufacturer 1 Logo"></img>
                </Link>
                <Link to="/inventory/bugatti">
                    <img src="https://pngimg.com/uploads/bugatti_logo/bugatti_logo_PNG14.png" className="manufacturer-logo" alt="Manufacturer 2 Logo"></img>
                </Link>
                <Link to="/inventory/ferrari">
                    <img src="https://logos-world.net/wp-content/uploads/2020/05/Ferrari-Emblem.png" className="manufacturer-logo" alt="Manufacturer 3 Logo"></img>
                </Link>
                <Link to="/inventory/koenigsegg">
                    <img src="https://pngimg.com/uploads/koenigsegg/small/koenigsegg_PNG7.png" className="manufacturer-logo" alt="Manufacturer 4 Logo"></img>
                </Link>
                <Link to="/inventory/lamborghini">
                    <img src="https://www.freepnglogos.com/uploads/lamborghini-logo-png/lamborghini-logo-wallpapers-pictures-images-1.png" className="manufacturer-logo" alt="Manufacturer 5 Logo"></img>
                </Link>
                <Link to="/inventory/mclaren">
                    <img src="https://pngimg.com/d/Mclaren_PNG49.png" className="manufacturer-logo" alt="Manufacturer 6 Logo"></img>
                </Link>
                <Link to="/inventory/porsche">
                    <img src="https://logos-world.net/wp-content/uploads/2021/04/Porsche-Logo.png" className="manufacturer-logo" alt="Manufacturer 6 Logo"></img>
                </Link>
                <Link to="/inventory/rollsroyce">
                    <img src="https://www.carlogos.org/logo/Rolls-Royce-logo-2048x2048.png" className="manufacturer-logo" alt="Manufacturer 6 Logo"></img>
                </Link>
            </div>
        </div>
    )
};


// Export
export default Vehicles;

// Rememeber IDs(#) are more specific than Classes(.)