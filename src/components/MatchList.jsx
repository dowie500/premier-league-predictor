import React, { useEffect, useState } from 'react';
import { fetchFixtures } from '../api/client';
import MatchCard from './MatchCard';
import { Loader2 } from 'lucide-react';

const MatchList = ({ onSelect }) => {
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true);
                const data = await fetchFixtures();
                setMatches(data);
            } catch (err) {
                setError('Failed to load matches');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem', color: 'var(--color-accent)' }}>
                <Loader2 className="animate-spin" size={48} />
            </div>
        );
    }

    if (error) {
        return <div style={{ textAlign: 'center', color: 'var(--color-danger)' }}>{error}</div>;
    }

    return (
        <div className="match-grid">
            {matches.map((match, idx) => (
                <MatchCard
                    key={match.fixture.id || idx}
                    match={match}
                    onClick={() => onSelect(match)}
                />
            ))}
        </div>
    );
};

export default MatchList;
