// Import
import React, { useState, useEffect} from "react";
import { useNavigate, useOutletContext, Link, useParams } from "react-router-dom";

// Functional Component
const BugattiDetail = () => {
    const { bugattiState: [bugatti, setBugatti] } = useOutletContext();
    const navigate = useNavigate();
    const {carId} = useParams();
    const [localBugatti, setLocalBugatti] = useState({});

    // fetchBugattiDetail
    useEffect (() => {
        console.log("BID", carId)
        async function fetchBugattiDetail(){
            // Fetch;
            try{
                const response = await fetch (`https://car-haven-back.onrender.com/api/bugatti/${carId}`,{
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                })
                // Translate the promise data;
                console.log("Response:", response)
                const car = await response.json();
                console.log("Here is translated Json:", car)
                setLocalBugatti(car)
            } catch (error)
                {console.error(error)}
            // Set the State
        }
        fetchBugattiDetail()
    }, [])
    
    // Return
    return(
        <div className="more-detail">
            <div id="car-detail">
                {/* year */}
                {
                    localBugatti.year && localBugatti.make && localBugatti.model ?
                    <p id="car-year">{localBugatti.year} {localBugatti.make} {localBugatti.model}</p>:
                    <p>Description can not be viewed</p>
                }
                {/* Make */}
                {/* {
                    localBugatti.make ?
                    <p id="recipe-detail-name">{localBugatti.make}</p>:
                    <p>Name can not be viewed</p>
                } */}

                {/* Model */}
                {/* {
                    localBugatti.model ?
                    <p id="car-year">{localBugatti.model}</p>:
                    <p>Description can not be viewed</p>
                } */}
            
                {/* Price */}
                {/* {
                    localBugatti.price ?
                    <p id="car-year">{localBugatti.price}</p>:
                    <p>Description can not be viewed</p>
                } */}

                {/* Description */}
                {
                    localBugatti.description ?
                    <p id="car-description">{localBugatti.description}</p>:
                    <p>Description can not be viewed</p>
                }

                {/* Color */}
                <div id="car-color-box">
                    <div id="car-color-item">
                        {
                            localBugatti.exteriorColor ?
                            <p id="car-color">Exterior Color: {localBugatti.exteriorColor}</p>:
                            <p>Exterior Color can not be viewed</p>
                        }
                    </div>
                    {/*Interior Color */}
                    <div id="car-color-item">
                        {
                            localBugatti.interiorColor ?
                            <p id="car-color">Interior Color: {localBugatti.interiorColor}</p>:
                            <p>Interior Color can not be viewed</p>
                        }
                    </div>
                </div>

                {/* details */}
                <div id="car-details-box">
                    <div id="car-details-items">
                        {
                            localBugatti.vin ?
                            <p id="car-vin">VIN: {localBugatti.vin}</p>:
                            <p>Vin can not be viewed</p>
                        }
                    </div>

                    {/* Mileage */}
                    <div id="car-details-items">
                        {
                            localBugatti.mileage ?
                            <p id="car-vin">Mileage: {localBugatti.mileage}</p>:
                            <p>Mileage can not be viewed</p>
                        }
                    </div>

                    {/* BodyType */}
                    <div id="car-details-items">
                        {
                            localBugatti.bodyType ?
                            <p id="car-vin">Body Type: {localBugatti.bodyType}</p>:
                            <p>Body Type can not be viewed</p>
                        }
                    </div>
                    
                    {/* Doors */}
                    <div id="car-details-items">
                        {
                            localBugatti.doors ?
                            <p id="car-vin">Doors: {localBugatti.doors}</p>:
                            <p>Doors can not be viewed</p>
                        }
                    </div>
                </div>
            </div>
            <div className="car-images-container">
                <div id="car-images-item">
                    {/* Images */}
                    {
                        localBugatti.imageOne ?
                        <img src={localBugatti.imageOne} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localBugatti.imageTwo ?
                        <img src={localBugatti.imaget} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localBugatti.imageThree ?
                        <img src={localBugatti.imageThree} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localBugatti.imageFour ?
                        <img src={localBugatti.imageFour} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localBugatti.imageFive ?
                        <img src={localBugatti.imageFive} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localBugatti.imageSix ?
                        <img src={localBugatti.imageSix} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localBugatti.imageSeven ?
                        <img src={localBugatti.imageSeven} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localBugatti.imageEight ?
                        <img src={localBugatti.imageEight} id="car-images-size"></img>:
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
export default BugattiDetail;