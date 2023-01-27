// Import
import React, { useState, useEffect} from "react";
import { useNavigate, useOutletContext, Link, useParams } from "react-router-dom";

// Functional Component
const McLarenDetail = () => {
    const { mclarenState: [mclaren, setMcLaren] } = useOutletContext();
    const navigate = useNavigate();
    const {carId} = useParams();
    const [localMcLaren, setLocalMcLaren] = useState({});

    // fetchMcLarenDetail
    useEffect (() => {
        console.log("BID", carId)
        async function fetchMcLarenDetail(){
            // Fetch;
            try{
                const response = await fetch (`https://car-haven-back.onrender.com/api/mclaren/${carId}`,{
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                })
                // Translate the promise data;
                console.log("Response:", response)
                const car = await response.json();
                console.log("Here is translated Json:", car)
                setLocalMcLaren(car)
            } catch (error)
                {console.error(error)}
            // Set the State
        }
        fetchMcLarenDetail()
    }, [])
    
    // Return
    return(
        <div className="more-detail">
            <div id="car-detail">
                {/* year */}
                {
                    localMcLaren.year && localMcLaren.make && localMcLaren.model ?
                    <p id="car-year">{localMcLaren.year} {localMcLaren.make} {localMcLaren.model}</p>:
                    <p>Description can not be viewed</p>
                }
                {/* Make */}
                {/* {
                    localMcLaren.make ?
                    <p id="recipe-detail-name">{localMcLaren.make}</p>:
                    <p>Name can not be viewed</p>
                } */}

                {/* Model */}
                {/* {
                    localMcLaren.model ?
                    <p id="car-year">{localMcLaren.model}</p>:
                    <p>Description can not be viewed</p>
                } */}
            
                {/* Price */}
                {/* {
                    localMcLaren.price ?
                    <p id="car-year">{localMcLaren.price}</p>:
                    <p>Description can not be viewed</p>
                } */}

                {/* Description */}
                {
                    localMcLaren.description ?
                    <p id="car-description">{localMcLaren.description}</p>:
                    <p>Description can not be viewed</p>
                }

                {/* Color */}
                <div id="car-color-box">
                    <div id="car-color-item">
                        {
                            localMcLaren.exteriorColor ?
                            <p id="car-color">Exterior Color: {localMcLaren.exteriorColor}</p>:
                            <p>Exterior Color can not be viewed</p>
                        }
                    </div>
                    {/*Interior Color */}
                    <div id="car-color-item">
                        {
                            localMcLaren.interiorColor ?
                            <p id="car-color">Interior Color: {localMcLaren.interiorColor}</p>:
                            <p>Interior Color can not be viewed</p>
                        }
                    </div>
                </div>

                {/* details */}
                <div id="car-details-box">
                    <div id="car-details-items">
                        {
                            localMcLaren.vin ?
                            <p id="car-vin">VIN: {localMcLaren.vin}</p>:
                            <p>Vin can not be viewed</p>
                        }
                    </div>

                    {/* Mileage */}
                    <div id="car-details-items">
                        {
                            localMcLaren.mileage ?
                            <p id="car-vin">Mileage: {localMcLaren.mileage}</p>:
                            <p>Mileage can not be viewed</p>
                        }
                    </div>

                    {/* BodyType */}
                    <div id="car-details-items">
                        {
                            localMcLaren.bodyType ?
                            <p id="car-vin">Body Type: {localMcLaren.bodyType}</p>:
                            <p>Body Type can not be viewed</p>
                        }
                    </div>
                    
                    {/* Doors */}
                    <div id="car-details-items">
                        {
                            localMcLaren.doors ?
                            <p id="car-vin">Doors: {localMcLaren.doors}</p>:
                            <p>Doors can not be viewed</p>
                        }
                    </div>
                </div>
            </div>
            <div className="car-images-container">
                <div id="car-images-item">
                    {/* Images */}
                    {
                        localMcLaren.imageOne ?
                        <img src={localMcLaren.imageOne} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localMcLaren.imageTwo ?
                        <img src={localMcLaren.imaget} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localMcLaren.imageThree ?
                        <img src={localMcLaren.imageThree} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localMcLaren.imageFour ?
                        <img src={localMcLaren.imageFour} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localMcLaren.imageFive ?
                        <img src={localMcLaren.imageFive} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localMcLaren.imageSix ?
                        <img src={localMcLaren.imageSix} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localMcLaren.imageSeven ?
                        <img src={localMcLaren.imageSeven} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localMcLaren.imageEight ?
                        <img src={localMcLaren.imageEight} id="car-images-size"></img>:
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
export default McLarenDetail;