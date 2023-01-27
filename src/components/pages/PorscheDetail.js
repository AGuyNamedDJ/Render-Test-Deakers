// Import
import React, { useState, useEffect} from "react";
import { useNavigate, useOutletContext, Link, useParams } from "react-router-dom";

// Functional Component
const PorscheDetail = () => {
    const { porscheState: [porsche, setPorsche] } = useOutletContext();
    const navigate = useNavigate();
    const {carId} = useParams();
    const [localPorsche, setLocalPorsche] = useState({});

    // fetchPorscheDetail
    useEffect (() => {
        console.log("BID", carId)
        async function fetchPorscheDetail(){
            // Fetch;
            try{
                const response = await fetch (`https://car-haven-back.onrender.com/api/porsche/${carId}`,{
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                })
                // Translate the promise data;
                console.log("Response:", response)
                const car = await response.json();
                console.log("Here is translated Json:", car)
                setLocalPorsche(car)
            } catch (error)
                {console.error(error)}
            // Set the State
        }
        fetchPorscheDetail()
    }, [])
    
    // Return
    return(
        <div className="more-detail">
            <div id="car-detail">
                {/* year */}
                {
                    localPorsche.year && localPorsche.make && localPorsche.model ?
                    <p id="car-year">{localPorsche.year} {localPorsche.make} {localPorsche.model}</p>:
                    <p>Description can not be viewed</p>
                }
                {/* Make */}
                {/* {
                    localPorsche.make ?
                    <p id="recipe-detail-name">{localPorsche.make}</p>:
                    <p>Name can not be viewed</p>
                } */}

                {/* Model */}
                {/* {
                    localPorsche.model ?
                    <p id="car-year">{localPorsche.model}</p>:
                    <p>Description can not be viewed</p>
                } */}
            
                {/* Price */}
                {/* {
                    localPorsche.price ?
                    <p id="car-year">{localPorsche.price}</p>:
                    <p>Description can not be viewed</p>
                } */}

                {/* Description */}
                {
                    localPorsche.description ?
                    <p id="car-description">{localPorsche.description}</p>:
                    <p>Description can not be viewed</p>
                }

                {/* Color */}
                <div id="car-color-box">
                    <div id="car-color-item">
                        {
                            localPorsche.exteriorColor ?
                            <p id="car-color">Exterior Color: {localPorsche.exteriorColor}</p>:
                            <p>Exterior Color can not be viewed</p>
                        }
                    </div>
                    {/*Interior Color */}
                    <div id="car-color-item">
                        {
                            localPorsche.interiorColor ?
                            <p id="car-color">Interior Color: {localPorsche.interiorColor}</p>:
                            <p>Interior Color can not be viewed</p>
                        }
                    </div>
                </div>

                {/* details */}
                <div id="car-details-box">
                    <div id="car-details-items">
                        {
                            localPorsche.vin ?
                            <p id="car-vin">VIN: {localPorsche.vin}</p>:
                            <p>Vin can not be viewed</p>
                        }
                    </div>

                    {/* Mileage */}
                    <div id="car-details-items">
                        {
                            localPorsche.mileage ?
                            <p id="car-vin">Mileage: {localPorsche.mileage}</p>:
                            <p>Mileage can not be viewed</p>
                        }
                    </div>

                    {/* BodyType */}
                    <div id="car-details-items">
                        {
                            localPorsche.bodyType ?
                            <p id="car-vin">Body Type: {localPorsche.bodyType}</p>:
                            <p>Body Type can not be viewed</p>
                        }
                    </div>
                    
                    {/* Doors */}
                    <div id="car-details-items">
                        {
                            localPorsche.doors ?
                            <p id="car-vin">Doors: {localPorsche.doors}</p>:
                            <p>Doors can not be viewed</p>
                        }
                    </div>
                </div>
            </div>
            <div className="car-images-container">
                <div id="car-images-item">
                    {/* Images */}
                    {
                        localPorsche.imageOne ?
                        <img src={localPorsche.imageOne} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localPorsche.imageTwo ?
                        <img src={localPorsche.imaget} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localPorsche.imageThree ?
                        <img src={localPorsche.imageThree} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localPorsche.imageFour ?
                        <img src={localPorsche.imageFour} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localPorsche.imageFive ?
                        <img src={localPorsche.imageFive} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localPorsche.imageSix ?
                        <img src={localPorsche.imageSix} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localPorsche.imageSeven ?
                        <img src={localPorsche.imageSeven} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localPorsche.imageEight ?
                        <img src={localPorsche.imageEight} id="car-images-size"></img>:
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
export default PorscheDetail;