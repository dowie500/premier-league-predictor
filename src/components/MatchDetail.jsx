import React from 'react';
import { ArrowLeft, Calendar, MapPin } from 'lucide-react';
import { format } from 'date-fns';
import PredictionGauge from './PredictionGauge';
import LineupView from './LineupView';
import './components.css';

const MatchDetail = ({ match, onBack }) => {
    const { fixture, teams, predictions, lineups } = match;
    const matchDate = new Date(fixture.date);

    return (
        <div className="match-detail fade-in">
            <button onClick={onBack} className="back-button">
                <ArrowLeft size={20} /> Back to Matches
            </button>

            {/* Header Section */}
            <div className="detail-header glass-panel">
                <div className="detail-meta">
                    <span>{format(matchDate, 'd MMMM yyyy, HH:mm')}</span>
                    <span className="mx-2">•</span>
                    <span>{fixture.venue.name}, {fixture.venue.city}</span>
                </div>

                <div className="teams-vs-large">
                    <div className="team-large">
                        <img src={teams.home.logo} alt={teams.home.name} />
                        <h2>{teams.home.name}</h2>
                    </div>
                    <div className="vs-large">VS</div>
                    <div className="team-large">
                        <img src={teams.away.logo} alt={teams.away.name} />
                        <h2>{teams.away.name}</h2>
                    </div>
                </div>
            </div>

            {/* Predictions Section */}
            {predictions && <PredictionGauge predictions={predictions} />}

            {/* Lineups Section */}
            {lineups && lineups.length > 0 && <LineupView lineups={lineups} />}
            {!lineups && <div className="text-center p-4">Lineups not available yet.</div>}
        </div>
    );
};

export default MatchDetail;
