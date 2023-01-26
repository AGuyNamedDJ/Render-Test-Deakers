// Import
import React from "react";

// Functional Component
const HomePage = () => {
    return(
        <div>
            <div className="video-container">
                <video src = "https://f1rstmotors.com/wp-content/uploads/2022/12/website-video_resized.mp4" loop autoPlay muted playsInline></video>
            </div>
            <div className="hp-text-box">
                <div id="hp-subtext-box">
                    <p id="homepage-subtitle">Welcome to</p>
                    <p id="homepage-title">Car Haven</p>
                </div>
            </div>
        </div>
    )
};


// Export
export default HomePage;