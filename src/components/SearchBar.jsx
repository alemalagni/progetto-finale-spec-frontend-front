import { useState } from 'react';

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Cerca dispositivo..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="filter-bar">
                <select>
                    <option value="">Tutti i dispositivi</option>
                    <option value="smartphone">Smartphone</option>
                    <option value="tablet">Tablet</option>
                </select>
            </div>
            <div>
                <select>
                    <option value="title-asc">Titolo (A-Z)</option>
                    <option value="title-desc">Titolo (Z-A)</option>
                    <option value="category-asc">Categoria (A-Z)</option>
                    <option value="category-desc">Categoria (Z-A)</option>
                </select>
            </div>
        </div>
    );
}