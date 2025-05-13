import React from "react";
import "./PlantAnalytics.css";

function PlantAnalytics() {
    return (
        <div className="plant-analytics">
            <div className="header">Plant Analytics</div>
            <div className="tabs">
                <div className="tab active">Health</div>
                <div className="tab">Nutrients</div>
                <div className="tab">Growth</div>
                <div className="tab">Care</div>
                {/* ... boshqa tablar ... */}
            </div>
            <div className="health-metrics">
                <div className="metric">
                    <div className="value">85</div>
                    <div className="label">Health Score</div>
                </div>
                <div className="metric">
                    <div className="value">15 days</div>
                    <div className="label">Estimated Age</div>
                </div>
                {/* ... boshqa metrikalar ... */}
            </div>
            <div className="health-score-chart">
                {/* Bu yerga grafik komponenti joylashadi */}
                Health Score
                <div className="chart-placeholder">85%</div>
            </div>
        </div>
    );
}

export default PlantAnalytics;
