// Import
import React, { useState, useEffect} from "react";
import { useNavigate, useOutletContext, Link, useParams } from "react-router-dom";

// Functional Component
const BentleyDetail = () => {
    const { bentleyState: [bentley, setBentley] } = useOutletContext();
    const navigate = useNavigate();
    const {carId} = useParams();

    const [localBentley, setLocalBentley] = useState({})

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
            {/* Name */}
            {
                localBentley.make ?
                <p id="recipe-detail-name">{localBentley.make}</p>:
                <p>Name can not be viewed</p>
            }

            {/* Description */}
            {
                localBentley.model ?
                <p id="recipe-detail-description">{localBentley.model}</p>:
                <p>Description can not be viewed</p>
            }

            {/* Image */}
            {
                localBentley.imageOne ?
                <img src={localBentley.imageOne} id="recipe-detail-image"></img>:
                <p>Image can not be viewed</p>
            }
            
            {/* Go Back Button */}
            <button onClick={() => navigate(-1)} id="go-back-button">Back</button>
        </div>
    )
};

// Export
export default BentleyDetail;