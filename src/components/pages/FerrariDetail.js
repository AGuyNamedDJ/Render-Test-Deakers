// Import
import React, { useState, useEffect} from "react";
import { useNavigate, useOutletContext, Link, useParams } from "react-router-dom";

// Functional Component
const FerrariDetail = () => {
    const { ferrariState: [ferrari, setFerrari] } = useOutletContext();
    const navigate = useNavigate();
    const {carId} = useParams();
    const [localFerrari, setLocalFerrari] = useState({});

    // fetchFerrariDetail
    useEffect (() => {
        console.log("BID", carId)
        async function fetchFerrariDetail(){
            // Fetch;
            try{
                const response = await fetch (`https://car-haven-back.onrender.com/api/ferrari/${carId}`,{
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                })
                // Translate the promise data;
                console.log("Response:", response)
                const car = await response.json();
                console.log("Here is translated Json:", car)
                setLocalFerrari(car)
            } catch (error)
                {console.error(error)}
            // Set the State
        }
        fetchFerrariDetail()
    }, [])
    
    // Return
    return(
        <div className="more-detail">
            <div id="car-detail">
                {/* year */}
                {
                    localFerrari.year && localFerrari.make && localFerrari.model ?
                    <p id="car-year">{localFerrari.year} {localFerrari.make} {localFerrari.model}</p>:
                    <p>Description can not be viewed</p>
                }
                {/* Make */}
                {/* {
                    localFerrari.make ?
                    <p id="recipe-detail-name">{localFerrari.make}</p>:
                    <p>Name can not be viewed</p>
                } */}

                {/* Model */}
                {/* {
                    localFerrari.model ?
                    <p id="car-year">{localFerrari.model}</p>:
                    <p>Description can not be viewed</p>
                } */}
            
                {/* Price */}
                {/* {
                    localFerrari.price ?
                    <p id="car-year">{localFerrari.price}</p>:
                    <p>Description can not be viewed</p>
                } */}

                {/* Description */}
                {
                    localFerrari.description ?
                    <p id="car-description">{localFerrari.description}</p>:
                    <p>Description can not be viewed</p>
                }

                {/* Color */}
                <div id="car-color-box">
                    <div id="car-color-item">
                        {
                            localFerrari.exteriorColor ?
                            <p id="car-color">Exterior Color: {localFerrari.exteriorColor}</p>:
                            <p>Exterior Color can not be viewed</p>
                        }
                    </div>
                    {/*Interior Color */}
                    <div id="car-color-item">
                        {
                            localFerrari.interiorColor ?
                            <p id="car-color">Interior Color: {localFerrari.interiorColor}</p>:
                            <p>Interior Color can not be viewed</p>
                        }
                    </div>
                </div>

                {/* details */}
                <div id="car-details-box">
                    <div id="car-details-items">
                        {
                            localFerrari.vin ?
                            <p id="car-vin">VIN: {localFerrari.vin}</p>:
                            <p>Vin can not be viewed</p>
                        }
                    </div>

                    {/* Mileage */}
                    <div id="car-details-items">
                        {
                            localFerrari.mileage ?
                            <p id="car-vin">Mileage: {localFerrari.mileage}</p>:
                            <p>Mileage can not be viewed</p>
                        }
                    </div>

                    {/* BodyType */}
                    <div id="car-details-items">
                        {
                            localFerrari.bodyType ?
                            <p id="car-vin">Body Type: {localFerrari.bodyType}</p>:
                            <p>Body Type can not be viewed</p>
                        }
                    </div>
                    
                    {/* Doors */}
                    <div id="car-details-items">
                        {
                            localFerrari.doors ?
                            <p id="car-vin">Doors: {localFerrari.doors}</p>:
                            <p>Doors can not be viewed</p>
                        }
                    </div>
                </div>
            </div>
            <div className="car-images-container">
                <div id="car-images-item">
                    {/* Images */}
                    {
                        localFerrari.imageOne ?
                        <img src={localFerrari.imageOne} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localFerrari.imageTwo ?
                        <img src={localFerrari.imaget} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localFerrari.imageThree ?
                        <img src={localFerrari.imageThree} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localFerrari.imageFour ?
                        <img src={localFerrari.imageFour} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localFerrari.imageFive ?
                        <img src={localFerrari.imageFive} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localFerrari.imageSix ?
                        <img src={localFerrari.imageSix} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localFerrari.imageSeven ?
                        <img src={localFerrari.imageSeven} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localFerrari.imageEight ?
                        <img src={localFerrari.imageEight} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                </div>
                
                {/* Go Back Button */}
                {/* <button onClick={() => navigate(-1)} id="go-back-button">Back</button> */}
            </div>
        </div>
    )
};

// Export
export default FerrariDetail;