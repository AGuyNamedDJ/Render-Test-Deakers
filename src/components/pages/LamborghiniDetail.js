// Import
import React, { useState, useEffect} from "react";
import { useNavigate, useOutletContext, Link, useParams } from "react-router-dom";

// Functional Component
const LamborghiniDetail = () => {
    const { lamborghiniState: [lamborghini, setLamborghini] } = useOutletContext();
    const navigate = useNavigate();
    const {carId} = useParams();
    const [localLamborghini, setLocalLamborghini] = useState({});

    // fetchLamborghiniDetail
    useEffect (() => {
        console.log("BID", carId)
        async function fetchLamborghiniDetail(){
            // Fetch;
            try{
                const response = await fetch (`https://car-haven-back.onrender.com/api/lamborghini/${carId}`,{
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                })
                // Translate the promise data;
                console.log("Response:", response)
                const car = await response.json();
                console.log("Here is translated Json:", car)
                setLocalLamborghini(car)
            } catch (error)
                {console.error(error)}
            // Set the State
        }
        fetchLamborghiniDetail()
    }, [])
    
    // Return
    return(
        <div className="more-detail">
            <div id="car-detail">
                {/* year */}
                {
                    localLamborghini.year && localLamborghini.make && localLamborghini.model ?
                    <p id="car-year">{localLamborghini.year} {localLamborghini.make} {localLamborghini.model}</p>:
                    <p>Description can not be viewed</p>
                }
                {/* Make */}
                {/* {
                    localLamborghini.make ?
                    <p id="recipe-detail-name">{localLamborghini.make}</p>:
                    <p>Name can not be viewed</p>
                } */}

                {/* Model */}
                {/* {
                    localLamborghini.model ?
                    <p id="car-year">{localLamborghini.model}</p>:
                    <p>Description can not be viewed</p>
                } */}
            
                {/* Price */}
                {/* {
                    localLamborghini.price ?
                    <p id="car-year">{localLamborghini.price}</p>:
                    <p>Description can not be viewed</p>
                } */}

                {/* Description */}
                {
                    localLamborghini.description ?
                    <p id="car-description">{localLamborghini.description}</p>:
                    <p>Description can not be viewed</p>
                }

                {/* Color */}
                <div id="car-color-box">
                    <div id="car-color-item">
                        {
                            localLamborghini.exteriorColor ?
                            <p id="car-color">Exterior Color: {localLamborghini.exteriorColor}</p>:
                            <p>Exterior Color can not be viewed</p>
                        }
                    </div>
                    {/*Interior Color */}
                    <div id="car-color-item">
                        {
                            localLamborghini.interiorColor ?
                            <p id="car-color">Interior Color: {localLamborghini.interiorColor}</p>:
                            <p>Interior Color can not be viewed</p>
                        }
                    </div>
                </div>

                {/* details */}
                <div id="car-details-box">
                    <div id="car-details-items">
                        {
                            localLamborghini.vin ?
                            <p id="car-vin">VIN: {localLamborghini.vin}</p>:
                            <p>Vin can not be viewed</p>
                        }
                    </div>

                    {/* Mileage */}
                    <div id="car-details-items">
                        {
                            localLamborghini.mileage ?
                            <p id="car-vin">Mileage: {localLamborghini.mileage}</p>:
                            <p>Mileage can not be viewed</p>
                        }
                    </div>

                    {/* BodyType */}
                    <div id="car-details-items">
                        {
                            localLamborghini.bodyType ?
                            <p id="car-vin">Body Type: {localLamborghini.bodyType}</p>:
                            <p>Body Type can not be viewed</p>
                        }
                    </div>
                    
                    {/* Doors */}
                    <div id="car-details-items">
                        {
                            localLamborghini.doors ?
                            <p id="car-vin">Doors: {localLamborghini.doors}</p>:
                            <p>Doors can not be viewed</p>
                        }
                    </div>
                </div>
            </div>
            <div className="car-images-container">
                <div id="car-images-item">
                    {/* Images */}
                    {
                        localLamborghini.imageOne ?
                        <img src={localLamborghini.imageOne} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localLamborghini.imageTwo ?
                        <img src={localLamborghini.imaget} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localLamborghini.imageThree ?
                        <img src={localLamborghini.imageThree} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localLamborghini.imageFour ?
                        <img src={localLamborghini.imageFour} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localLamborghini.imageFive ?
                        <img src={localLamborghini.imageFive} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localLamborghini.imageSix ?
                        <img src={localLamborghini.imageSix} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localLamborghini.imageSeven ?
                        <img src={localLamborghini.imageSeven} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localLamborghini.imageEight ?
                        <img src={localLamborghini.imageEight} id="car-images-size"></img>:
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
export default LamborghiniDetail;