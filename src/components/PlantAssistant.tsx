import React from "react";
import Header from "./Header";
import ChatArea from "./ChatArea";
import PlantAnalytics from "./PlantAnalytics";
import "./PlantAssistant.css";

function PlantAssistant() {
    return (
        <div className="plant-assistant">
            <Header />
            <div className="content-area">
                <ChatArea />
                <PlantAnalytics />
            </div>
        </div>
    );
}

export default PlantAssistant;
