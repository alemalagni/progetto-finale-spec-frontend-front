import { useEffect, useState } from 'react';

export default function SearchBar({ onSearchChange, onFilterChange, onOrderChange }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [filtered, setFiltered] = useState('');
    const [order, setOrder] = useState('title-asc');

    const handleSearchChange = (e) => {
        setSearchTerm(e);
        onSearchChange(e);
    }

    const handleFilterChange = (e) => {
        setFiltered(e);
        onFilterChange(e);
    }

    const handleOrderChange = (e) => {
        setOrder(e);
        onOrderChange(e);
    }

    return (
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Cerca dispositivo..."
                    value={searchTerm}
                    onChange={(e) => handleSearchChange(e.target.value)}
                />
            </div>
            <div className="filter-bar">
                <select
                    value={filtered}
                    onChange={(e) => handleFilterChange(e.target.value)}
                >
                    <option value="">Tutti i dispositivi</option>
                    <option value="smartphone">Smartphone</option>
                    <option value="tablet">Tablet</option>
                </select>
            </div>
            <div>
                <select
                    value={order}
                    onChange={(e) => handleOrderChange(e.target.value)}
                    placeholder="Ordina per"
                >
                    <option value="title-asc">Titolo (A-Z)</option>
                    <option value="title-desc">Titolo (Z-A)</option>
                    <option value="category-asc">Categoria (A-Z)</option>
                    <option value="category-desc">Categoria (Z-A)</option>
                </select>
            </div>
        </div>
    );
};