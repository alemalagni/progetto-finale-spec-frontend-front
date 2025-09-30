import { useState, useEffect } from "react";
import { getApi } from "../fetch/FetchApi";
import DeviceListCard from "../components/DeviceListCard";
import SearchBar from "../components/SearchBar";

export default function HomePage() {
    const [devices, setDevices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filtered, setFiltered] = useState('');
    const [order, setOrder] = useState('');

    useEffect(() => {
        const fetchDevices = async () => {
            try {
                const data = await getApi();
                setDevices(data || []);
            } catch (error) {
                console.error("Errore nel caricamento dei dispositivi:", error);
                setDevices([]);
            } finally {
                setLoading(false);
            }
        };

        fetchDevices();
    }, []);

    useEffect(() => {
        setDevices(devices.filter(d => d.title.toLowerCase().includes(searchTerm.toLowerCase())));
    }, [searchTerm]);

    useEffect(() => {
        setDevices(devices.filter(d => d.category === filtered));
    }, [filtered]);

    useEffect(() => {
        setDevices(devices.sort((a, b) => {
            if (order === 'title-asc') {
                return a.title.localeCompare(b.title);
            } else if (order === 'title-desc') {
                return b.title.localeCompare(a.title);
            } else if (order === 'category-asc') {
                return a.category.localeCompare(b.category);
            } else if (order === 'category-desc') {
                return b.category.localeCompare(a.category);
            }
        }));
    }, [order]);

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
            {devices && devices.map(device => (
                <DeviceListCard key={device.id} device={device} />
            ))}
        </div>
    );
}
