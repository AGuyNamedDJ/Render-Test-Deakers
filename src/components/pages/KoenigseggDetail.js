// Import
import React, { useState, useEffect} from "react";
import { useNavigate, useOutletContext, Link, useParams } from "react-router-dom";

// Functional Component
const KoenigseggDetail = () => {
    const { koenigseggState: [koenigsegg, setKoenigsegg] } = useOutletContext();
    const navigate = useNavigate();
    const {carId} = useParams();
    const [localKoenigsegg, setLocalKoenigsegg] = useState({});

    // fetchKoenigseggDetail
    useEffect (() => {
        console.log("BID", carId)
        async function fetchKoenigseggDetail(){
            // Fetch;
            try{
                const response = await fetch (`https://car-haven-back.onrender.com/api/koenigsegg/${carId}`,{
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                })
                // Translate the promise data;
                console.log("Response:", response)
                const car = await response.json();
                console.log("Here is translated Json:", car)
                setLocalKoenigsegg(car)
            } catch (error)
                {console.error(error)}
            // Set the State
        }
        fetchKoenigseggDetail()
    }, [])
    
    // Return
    return(
        <div className="more-detail">
            <div id="car-detail">
                {/* year */}
                {
                    localKoenigsegg.year && localKoenigsegg.make && localKoenigsegg.model ?
                    <p id="car-year">{localKoenigsegg.year} {localKoenigsegg.make} {localKoenigsegg.model}</p>:
                    <p>Description can not be viewed</p>
                }
                {/* Make */}
                {/* {
                    localKoenigsegg.make ?
                    <p id="recipe-detail-name">{localKoenigsegg.make}</p>:
                    <p>Name can not be viewed</p>
                } */}

                {/* Model */}
                {/* {
                    localKoenigsegg.model ?
                    <p id="car-year">{localKoenigsegg.model}</p>:
                    <p>Description can not be viewed</p>
                } */}
            
                {/* Price */}
                {/* {
                    localKoenigsegg.price ?
                    <p id="car-year">{localKoenigsegg.price}</p>:
                    <p>Description can not be viewed</p>
                } */}

                {/* Description */}
                {
                    localKoenigsegg.description ?
                    <p id="car-description">{localKoenigsegg.description}</p>:
                    <p>Description can not be viewed</p>
                }

                {/* Color */}
                <div id="car-color-box">
                    <div id="car-color-item">
                        {
                            localKoenigsegg.exteriorColor ?
                            <p id="car-color">Exterior Color: {localKoenigsegg.exteriorColor}</p>:
                            <p>Exterior Color can not be viewed</p>
                        }
                    </div>
                    {/*Interior Color */}
                    <div id="car-color-item">
                        {
                            localKoenigsegg.interiorColor ?
                            <p id="car-color">Interior Color: {localKoenigsegg.interiorColor}</p>:
                            <p>Interior Color can not be viewed</p>
                        }
                    </div>
                </div>

                {/* details */}
                <div id="car-details-box">
                    <div id="car-details-items">
                        {
                            localKoenigsegg.vin ?
                            <p id="car-vin">VIN: {localKoenigsegg.vin}</p>:
                            <p>Vin can not be viewed</p>
                        }
                    </div>

                    {/* Mileage */}
                    <div id="car-details-items">
                        {
                            localKoenigsegg.mileage ?
                            <p id="car-vin">Mileage: {localKoenigsegg.mileage}</p>:
                            <p>Mileage can not be viewed</p>
                        }
                    </div>

                    {/* BodyType */}
                    <div id="car-details-items">
                        {
                            localKoenigsegg.bodyType ?
                            <p id="car-vin">Body Type: {localKoenigsegg.bodyType}</p>:
                            <p>Body Type can not be viewed</p>
                        }
                    </div>
                    
                    {/* Doors */}
                    <div id="car-details-items">
                        {
                            localKoenigsegg.doors ?
                            <p id="car-vin">Doors: {localKoenigsegg.doors}</p>:
                            <p>Doors can not be viewed</p>
                        }
                    </div>
                </div>
            </div>
            <div className="car-images-container">
                <div id="car-images-item">
                    {/* Images */}
                    {
                        localKoenigsegg.imageOne ?
                        <img src={localKoenigsegg.imageOne} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localKoenigsegg.imageTwo ?
                        <img src={localKoenigsegg.imaget} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localKoenigsegg.imageThree ?
                        <img src={localKoenigsegg.imageThree} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localKoenigsegg.imageFour ?
                        <img src={localKoenigsegg.imageFour} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localKoenigsegg.imageFive ?
                        <img src={localKoenigsegg.imageFive} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localKoenigsegg.imageSix ?
                        <img src={localKoenigsegg.imageSix} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localKoenigsegg.imageSeven ?
                        <img src={localKoenigsegg.imageSeven} id="car-images-size"></img>:
                        <p>Image can not be viewed</p>
                    }
                    {
                        localKoenigsegg.imageEight ?
                        <img src={localKoenigsegg.imageEight} id="car-images-size"></img>:
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
export default KoenigseggDetail;