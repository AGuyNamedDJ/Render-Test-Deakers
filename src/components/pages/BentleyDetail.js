// Import
import React, { useState, useEffect} from "react";
import { useNavigate, useOutletContext, Link, useParams } from "react-router-dom";

// Functional Component
const BentleyDetail = () => {
    const { bentleyState: [bentley, setBentley] } = useOutletContext();
    const navigate = useNavigate();
    const {carId} = useParams();
    const [localBentley, setLocalBentley] = useState({});

    // fetchBentleyDetail
    useEffect (() => {
        console.log("BID", carId)
        async function fetchBentleyDetail(){
            // Fetch;
            try{
                const response = await fetch (`https://car-haven-back.onrender.com/api/bentley/${carId}`,{
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                })
                // Translate the promise data;
                console.log("Response:", response)
                const car = await response.json();
                console.log("Here is translated Json:", car)
                setLocalBentley(car)
            } catch (error)
                {console.error(error)}
            // Set the State
        }
        fetchBentleyDetail()
    }, [])
    
    // Return
    return(
        <div className="more-detail">
            <div id="car-detail">
                {/* year */}
                {
                    localBentley.year && localBentley.make && localBentley.model ?
                    <p id="car-year">{localBentley.year} {localBentley.make} {localBentley.model}</p>:
                    <p>Description can not be viewed</p>
                }
                {/* Make */}
                {/* {
                    localBentley.make ?
                    <p id="recipe-detail-name">{localBentley.make}</p>:
                    <p>Name can not be viewed</p>
                } */}

                {/* Model */}
                {/* {
                    localBentley.model ?
                    <p id="car-year">{localBentley.model}</p>:
                    <p>Description can not be viewed</p>
                } */}
            
                {/* Price */}
                {/* {
                    localBentley.price ?
                    <p id="car-year">{localBentley.price}</p>:
                    <p>Description can not be viewed</p>
                } */}

                {/* Description */}
                {
                    localBentley.description ?
                    <p id="car-description">{localBentley.description}</p>:
                    <p>Description can not be viewed</p>
                }

                {/* Color */}
                <div id="car-color-box">
                    <div id="car-color-item">
                        {
                            localBentley.exteriorColor ?
                            <p id="car-color">Exterior Color: {localBentley.exteriorColor}</p>:
                            <p>Exterior Color can not be viewed</p>
                        }
                    </div>
                    {/*Interior Color */}
                    <div id="car-color-item">
                        {
                            localBentley.interiorColor ?
                            <p id="car-color">Interior Color: {localBentley.interiorColor}</p>:
                            <p>Interior Color can not be viewed</p>
                        }
                    </div>
                </div>

                {/* details */}
                <div id="car-details-box">
                    <div id="car-details-items">
                        {
                            localBentley.vin ?
                            <p id="car-vin">VIN: {localBentley.vin}</p>:
                            <p>Vin can not be viewed</p>
                        }
                    </div>

                    {/* Mileage */}
                    <div id="car-details-items">
                        {
                            localBentley.mileage ?
                            <p id="car-vin">Mileage: {localBentley.mileage}</p>:
                            <p>Mileage can not be viewed</p>
                        }
                    </div>

                    {/* BodyType */}
                    <div id="car-details-items">
                        {
                            localBentley.bodyType ?
                            <p id="car-vin">Body Type: {localBentley.bodyType}</p>:
                            <p>Body Type can not be viewed</p>
                        }
                    </div>
                    
                    {/* Doors */}
                    <div id="car-details-items">
                        {
                            localBentley.doors ?
                            <p id="car-vin">Doors: {localBentley.doors}</p>:
                            <p>Doors can not be viewed</p>
                        }
                    </div>
                </div>
            </div>
            <div className="car-images-container">
                <div id="car-images-item">
                    {/* Images */}
                    {
                        localBentley.imageOne ?
                        <img src={localBentley.imageOne} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localBentley.imageTwo ?
                        <img src={localBentley.imaget} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localBentley.imageThree ?
                        <img src={localBentley.imageThree} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localBentley.imageFour ?
                        <img src={localBentley.imageFour} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localBentley.imageFive ?
                        <img src={localBentley.imageFive} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localBentley.imageSix ?
                        <img src={localBentley.imageSix} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localBentley.imageSeven ?
                        <img src={localBentley.imageSeven} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localBentley.imageEight ?
                        <img src={localBentley.imageEight} id="car-images-size"></img>:
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
export default BentleyDetail;