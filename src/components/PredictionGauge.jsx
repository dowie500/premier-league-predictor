import React from 'react';
import './components.css';

const PredictionGauge = ({ predictions }) => {
    const { percent, advice, winner } = predictions;

    // Parse percentages "55%" -> 55
    const home = parseInt(percent.home);
    const draw = parseInt(percent.draw);
    const away = parseInt(percent.away);

    return (
        <div className="prediction-gauge-container">
            <h3 className="section-title">Match Prediction</h3>

            <div className="gauge-bar">
                <div className="gauge-segment home" style={{ width: percent.home }}>
                    {originalVal(percent.home) > 15 && `Home ${percent.home}`}
                </div>
                <div className="gauge-segment draw" style={{ width: percent.draw }}>
                    {originalVal(percent.draw) > 15 && `Draw ${percent.draw}`}
                </div>
                <div className="gauge-segment away" style={{ width: percent.away }}>
                    {originalVal(percent.away) > 15 && `Away ${percent.away}`}
                </div>
            </div>

            {/* Legend / Key if segments too small */}
            <div className="gauge-legend">
                <div className="legend-item"><span className="dot home"></span> Home</div>
                <div className="legend-item"><span className="dot draw"></span> Draw</div>
                <div className="legend-item"><span className="dot away"></span> Away</div>
            </div>

            <div className="prediction-advice">
                <strong>AI Advice:</strong> {advice}
            </div>
        </div>
    );
};

// Helper to check if text fits
const originalVal = (str) => parseInt(str);

export default PredictionGauge;
