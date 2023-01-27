// Import
import React, { useState, useEffect} from "react";
import { useNavigate, useOutletContext, Link, useParams } from "react-router-dom";

// Functional Component
const RollsRoyceDetail = () => {
    const { rollsRoyceState: [rollsRoyce, setRollsRoyce] } = useOutletContext();
    const navigate = useNavigate();
    const {carId} = useParams();
    const [localRollsRoyce, setLocalRollsRoyce] = useState({});

    // fetchRollsRoyceDetail
    useEffect (() => {
        console.log("BID", carId)
        async function fetchRollsRoyceDetail(){
            // Fetch;
            try{
                const response = await fetch (`https://car-haven-back.onrender.com/api/rollsroyce/${carId}`,{
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                })
                // Translate the promise data;
                console.log("Response:", response)
                const car = await response.json();
                console.log("Here is translated Json:", car)
                setLocalRollsRoyce(car)
            } catch (error)
                {console.error(error)}
            // Set the State
        }
        fetchRollsRoyceDetail()
    }, [])
    
    // Return
    return(
        <div className="more-detail">
            <div id="car-detail">
                {/* year */}
                {
                    localRollsRoyce.year && localRollsRoyce.make && localRollsRoyce.model ?
                    <p id="car-year">{localRollsRoyce.year} {localRollsRoyce.make} {localRollsRoyce.model}</p>:
                    <p>Description can not be viewed</p>
                }
                {/* Make */}
                {/* {
                    localRollsRoyce.make ?
                    <p id="recipe-detail-name">{localRollsRoyce.make}</p>:
                    <p>Name can not be viewed</p>
                } */}

                {/* Model */}
                {/* {
                    localRollsRoyce.model ?
                    <p id="car-year">{localRollsRoyce.model}</p>:
                    <p>Description can not be viewed</p>
                } */}
            
                {/* Price */}
                {/* {
                    localRollsRoyce.price ?
                    <p id="car-year">{localRollsRoyce.price}</p>:
                    <p>Description can not be viewed</p>
                } */}

                {/* Description */}
                {
                    localRollsRoyce.description ?
                    <p id="car-description">{localRollsRoyce.description}</p>:
                    <p>Description can not be viewed</p>
                }

                {/* Color */}
                <div id="car-color-box">
                    <div id="car-color-item">
                        {
                            localRollsRoyce.exteriorColor ?
                            <p id="car-color">Exterior Color: {localRollsRoyce.exteriorColor}</p>:
                            <p>Exterior Color can not be viewed</p>
                        }
                    </div>
                    {/*Interior Color */}
                    <div id="car-color-item">
                        {
                            localRollsRoyce.interiorColor ?
                            <p id="car-color">Interior Color: {localRollsRoyce.interiorColor}</p>:
                            <p>Interior Color can not be viewed</p>
                        }
                    </div>
                </div>

                {/* details */}
                <div id="car-details-box">
                    <div id="car-details-items">
                        {
                            localRollsRoyce.vin ?
                            <p id="car-vin">VIN: {localRollsRoyce.vin}</p>:
                            <p>Vin can not be viewed</p>
                        }
                    </div>

                    {/* Mileage */}
                    <div id="car-details-items">
                        {
                            localRollsRoyce.mileage ?
                            <p id="car-vin">Mileage: {localRollsRoyce.mileage}</p>:
                            <p>Mileage can not be viewed</p>
                        }
                    </div>

                    {/* BodyType */}
                    <div id="car-details-items">
                        {
                            localRollsRoyce.bodyType ?
                            <p id="car-vin">Body Type: {localRollsRoyce.bodyType}</p>:
                            <p>Body Type can not be viewed</p>
                        }
                    </div>
                    
                    {/* Doors */}
                    <div id="car-details-items">
                        {
                            localRollsRoyce.doors ?
                            <p id="car-vin">Doors: {localRollsRoyce.doors}</p>:
                            <p>Doors can not be viewed</p>
                        }
                    </div>
                </div>
            </div>
            <div className="car-images-container">
                <div id="car-images-item">
                    {/* Images */}
                    {
                        localRollsRoyce.imageOne ?
                        <img src={localRollsRoyce.imageOne} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localRollsRoyce.imageTwo ?
                        <img src={localRollsRoyce.imaget} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localRollsRoyce.imageThree ?
                        <img src={localRollsRoyce.imageThree} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localRollsRoyce.imageFour ?
                        <img src={localRollsRoyce.imageFour} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localRollsRoyce.imageFive ?
                        <img src={localRollsRoyce.imageFive} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localRollsRoyce.imageSix ?
                        <img src={localRollsRoyce.imageSix} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localRollsRoyce.imageSeven ?
                        <img src={localRollsRoyce.imageSeven} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localRollsRoyce.imageEight ?
                        <img src={localRollsRoyce.imageEight} id="car-images-size"></img>:
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
export default RollsRoyceDetail;