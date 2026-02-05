import React from 'react';
import './components.css';

const LineupView = ({ lineups }) => {
    // lineups is array [homeLineup, awayLineup]
    // We can show a pitch view or list. Given complexity of pitch CSS, list is safer MVP.
    // Actually, let's try a simple visual pitch.

    const home = lineups[0];
    const away = lineups[1];

    return (
        <div className="lineup-container">
            <h3 className="section-title">Expected Lineups</h3>

            <div className="lineup-grid">
                <div className="lineup-column">
                    <div className="team-header mb-4 text-center">
                        <h4 className="font-bold text-accent">{home.team.name}</h4>
                        <span className="text-sm text-dim">{home.formation}</span>
                    </div>
                    <ul className="player-list">
                        {home.startXI.map(({ player }) => (
                            <li key={player.id} className="player-item">
                                <span className="player-num">{player.number}</span>
                                <span className="player-name">{player.name}</span>
                                <span className="player-pos text-xs opacity-50 ml-auto">{player.pos}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="lineup-divider"></div>

                <div className="lineup-column">
                    <div className="team-header mb-4 text-center">
                        <h4 className="font-bold text-accent">{away.team.name}</h4>
                        <span className="text-sm text-dim">{away.formation}</span>
                    </div>
                    <ul className="player-list">
                        {away.startXI.map(({ player }) => (
                            <li key={player.id} className="player-item">
                                <span className="player-num">{player.number}</span>
                                <span className="player-name">{player.name}</span>
                                <span className="player-pos text-xs opacity-50 ml-auto">{player.pos}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LineupView;
