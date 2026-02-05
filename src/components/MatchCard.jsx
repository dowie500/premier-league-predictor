import React from 'react';
import { format } from 'date-fns';
import { Star, MapPin } from 'lucide-react';
import './components.css';

const MatchCard = ({ match, onClick }) => {
    const { fixture, teams, predictions } = match;
    const matchDate = new Date(fixture.date);

    return (
        <div className="match-card" onClick={onClick}>
            <div className="match-header">
                <span className="match-venue">
                    <MapPin size={12} style={{ display: 'inline', marginRight: 4 }} />
                    {fixture.venue.name}
                </span>
                <span>{format(matchDate, 'EEE, d MMM')}</span>
            </div>

            <div className="match-content">
                <div className="team">
                    <img src={teams.home.logo} alt={teams.home.name} className="team-logo" />
                    <span className="team-name">{teams.home.name}</span>
                </div>

                <div className="match-time">
                    {format(matchDate, 'HH:mm')}
                    <span className="match-date">BST</span>
                </div>

                <div className="team">
                    <img src={teams.away.logo} alt={teams.away.name} className="team-logo" />
                    <span className="team-name">{teams.away.name}</span>
                </div>
            </div>

            {predictions && (
                <div className="prediction-mini">
                    <Star size={14} color="var(--color-accent)" fill="var(--color-accent)" />
                    <span>Win: </span>
                    <span style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}>
                        {predictions.percent.home} vs {predictions.percent.away}
                    </span>
                </div>
            )}
        </div>
    );
};

export default MatchCard;
