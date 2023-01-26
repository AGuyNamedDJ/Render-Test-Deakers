// Import
import React from "react";

// Functional Component
const HomePage = () => {
    return(
        <div>
            <div className="video-container">
                <video src = "https://f1rstmotors.com/wp-content/uploads/2022/12/website-video_resized.mp4" loop autoPlay muted playsInline></video>
            </div>
            <p className="homepage-subtitle">Welcome to</p>
            <p className="homepage-title">Car Haven</p>
        </div>
    )
};


// Export
export default HomePage;