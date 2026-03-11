import { useState, useMemo } from 'react';
import { politicians } from './data/politicians';
import type { Politician, PoliticalType } from './data/politicians';
import PoliticianCard from './components/PoliticianCard';
import PoliticianDetail from './components/PoliticianDetail';
import SearchBar from './components/SearchBar';
import './App.css';

export default function App() {
  const [selected, setSelected] = useState<Politician | null>(null);
  const [query, setQuery] = useState('');
  const [selectedType, setSelectedType] = useState<PoliticalType | 'All'>('All');

  const filtered = useMemo(() => {
    return politicians.filter((p) => {
      const matchesQuery =
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.state.toLowerCase().includes(query.toLowerCase());

      const matchesType =
        selectedType === 'All' ||
        p.type === selectedType ||
        p.secondaryType === selectedType;

      return matchesQuery && matchesType;
    });
  }, [query, selectedType]);

  if (selected) {
    return (
      <div className="app">
        <div className="pokedex-shell">
          <div className="pokedex-top">
            <div className="pokedex-light big-light" />
            <div className="pokedex-lights-row">
              <div className="pokedex-light sm red" />
              <div className="pokedex-light sm yellow" />
              <div className="pokedex-light sm green" />
            </div>
          </div>
          <div className="pokedex-screen-area">
            <PoliticianDetail politician={selected} onBack={() => setSelected(null)} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="pokedex-shell">
        {/* Top panel with lights */}
        <div className="pokedex-top">
          <div className="pokedex-light big-light" />
          <div className="pokedex-lights-row">
            <div className="pokedex-light sm red" />
            <div className="pokedex-light sm yellow" />
            <div className="pokedex-light sm green" />
          </div>
        </div>

        {/* Screen area */}
        <div className="pokedex-screen-area">
          <div className="pokedex-header">
            <h1 className="pokedex-title">
              <span className="title-poke">Politi</span>
              <span className="title-dex">DEX</span>
            </h1>
            <p className="pokedex-subtitle">The Encyclopedia of Political Creatures</p>
          </div>

          <SearchBar
            query={query}
            selectedType={selectedType}
            onQueryChange={setQuery}
            onTypeChange={setSelectedType}
          />

          <div className="results-count">
            {filtered.length} politician{filtered.length !== 1 ? 's' : ''} found
          </div>

          {filtered.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">🏛️</div>
              <p>No politicians found matching your search.</p>
            </div>
          ) : (
            <div className="card-grid">
              {filtered.map((p) => (
                <PoliticianCard
                  key={p.id}
                  politician={p}
                  onClick={() => setSelected(p)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Bottom panel */}
        <div className="pokedex-bottom">
          <div className="pokedex-dpad">
            <div className="dpad-h" />
            <div className="dpad-v" />
          </div>
          <div className="pokedex-buttons">
            <div className="btn-circle red-btn" />
            <div className="btn-circle blue-btn" />
          </div>
        </div>
      </div>
    </div>
  );
}
