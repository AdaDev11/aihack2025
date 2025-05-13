import React from "react";
import Sidebar from "./components/Sidebar";
import PlantAssistant from "./components/PlantAssistant";
import "./App.css"; // Agar global stillar bo'lsa

function App() {
    return (
        <div className="app-container">
            <Sidebar />
            <PlantAssistant />
        </div>
    );
}

export default App;
