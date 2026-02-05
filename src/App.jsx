import { useState } from 'react'
import { Trophy } from 'lucide-react'
import MatchList from './components/MatchList'
import MatchDetail from './components/MatchDetail'
import './App.css'

function App() {
  const [selectedMatch, setSelectedMatch] = useState(null);

  return (
    <div className="app-container">
      <header className="header">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Trophy className="logo-icon" />
        </div>
        <h1 className="title">Premier <span>League</span><br />Predictor</h1>
        <p className="subtitle">AI-Powered Match Probabilities & Lineups</p>
      </header>

      <main>
        {selectedMatch ? (
          <MatchDetail
            match={selectedMatch}
            onBack={() => setSelectedMatch(null)}
          />
        ) : (
          <MatchList onSelect={setSelectedMatch} />
        )}
      </main>

      <footer className="footer">
        <a
          href="./architecture/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="arch-link"
        >
          View System Architecture
        </a>
      </footer>
    </div>
  )
}

export default App
