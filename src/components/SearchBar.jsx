import { use, useEffect, useState } from 'react';
import { searchApi } from '../fetch/FetchApi';
import '../css/SearchBar.css'

export default function SearchBar({ SearchResult, onOrderChange }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [filtered, setFiltered] = useState('');
    const [order, setOrder] = useState('title-asc');

    const handleSearchChange = (e) => {
        setSearchTerm(e);
    }

    const handleFilterChange = (e) => {
        setFiltered(e);
    }

    const handleOrderChange = (e) => {
        setOrder(e);
        onOrderChange(e);
    }

    useEffect(() => {
        if (searchTerm || filtered) {
            let query = '';
            if (searchTerm) query += `search=${searchTerm}`;
            if (filtered) query += `category=${filtered}`;
            if (searchTerm && filtered) query = `search=${searchTerm}&category=${filtered}`;

            console.log(query);

            searchApi(query).then(results => {
                SearchResult(results);
                console.log(results)
            });
        } else {
            SearchResult([]);
        }
    }, [searchTerm, filtered, SearchResult]);
    return (
        <div className='search-container'>
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
            <div className="order-bar">
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