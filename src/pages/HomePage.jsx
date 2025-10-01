import { useState, useEffect } from "react";
import { getApi } from "../fetch/FetchApi";
import { Link } from 'react-router-dom';
import DeviceListCard from "../components/DeviceListCard";
import SearchBar from "../components/SearchBar";

export default function HomePage() {
    const [devicesAll, setDevicesAll] = useState([]);
    const [devices, setDevices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchResult, setSearchResult] = useState('');
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
        let result = [];
        if (searchResult && searchResult.length > 0) {
            result = [...searchResult];
        } else {
            result = [...devicesAll];
        }

        if (order && result.length > 0) {
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
    }, [searchResult, order, devicesAll]);

    if (loading) {
        return <div>Caricamento dati...</div>;
    }


    return (
        <div>
            <SearchBar
                SearchResult={setSearchResult}
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
