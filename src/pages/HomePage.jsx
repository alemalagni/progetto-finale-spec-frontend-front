import { useState, useEffect } from "react";
import { getApi } from "../fetch/FetchApi";
import { Link } from 'react-router-dom';
import DeviceListCard from "../components/DeviceListCard";
import SearchBar from "../components/SearchBar";

export default function HomePage() {
    const [devicesAll, setDevicesAll] = useState([]);
    const [devices, setDevices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filtered, setFiltered] = useState('');
    const [order, setOrder] = useState('');

    useEffect(() => {
        const fetchDevices = async () => {
            try {
                const data = await getApi();
                setDevicesAll(data || []);
                setDevices(data || []);
                setOrder('title-asc');
            } finally {
                setLoading(false);
            }
        };

        fetchDevices();
    }, []);

    useEffect(() => {
        let result = [...devicesAll];

        if (searchTerm) {
            result = result.filter(d =>
                d.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (filtered) {
            result = result.filter(d => d.category === filtered);
        }

        if (order) {
            result.sort((a, b) => {
                if (order === 'title-asc') {
                    return a.title.localeCompare(b.title);
                } else if (order === 'title-desc') {
                    return b.title.localeCompare(a.title);
                } else if (order === 'category-asc') {
                    return a.category.localeCompare(b.category);
                } else if (order === 'category-desc') {
                    return b.category.localeCompare(a.category);
                }
                return 0;
            });
        }

        setDevices(result);
    }, [devicesAll, searchTerm, filtered, order]);


    if (loading) {
        return <div>Caricamento dati...</div>;
    }


    return (
        <div>
            <SearchBar
                onSearchChange={setSearchTerm}
                onFilterChange={setFiltered}
                onOrderChange={setOrder}
            />
            <Link to="/compare">
                <button>Compara 2 o più prodotti</button>
            </Link>
            <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                {devices && devices.map(device => (
                    <DeviceListCard key={device.id} device={device} />
                ))}
            </div>
        </div>
    );
}
