import { getFavoriteDevices } from "../components/HandleFavorite";
import { useEffect, useState } from "react";
import { getApiById } from "../fetch/FetchApi";
import SearchBar from "../components/SearchBar";
import DeviceListCard from "../components/DeviceListCard";

export default function FavoritePage() {
    const favoriteDevices = getFavoriteDevices();
    const [devices, setDevices] = useState([]);

    const [devicesAll, setDevicesAll] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filtered, setFiltered] = useState('');
    const [order, setOrder] = useState('');

    const fetchDevices = async () => {
        if (favoriteDevices.length === 0) {
            setDevices([]);
            setDevicesAll([]);
            return;
        } else {
            const devicesData = await Promise.all(
                favoriteDevices.map(id => getApiById(id))
            );

            const extractedData = devicesData.map(response =>
                response.smartphone
            );
            setDevices(extractedData);
            setDevicesAll(extractedData);
        }
    }

    useEffect(() => {
        fetchDevices();
    }, [favoriteDevices]);

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

    return (
        <div>
            <h1>Preferiti</h1>
            <div >
                <SearchBar
                    onSearchChange={setSearchTerm}
                    onFilterChange={setFiltered}
                    onOrderChange={setOrder}
                />
                {favoriteDevices.length > 0 ? (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                        {devices.map((device, index) => (
                            <div key={favoriteDevices[index]}>
                                <DeviceListCard key={favoriteDevices[index]} device={device} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>Nessun dispositivo preferito trovato.</div>
                )}
            </div>
        </div>
    );
}