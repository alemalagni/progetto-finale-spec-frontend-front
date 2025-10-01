import { getFavoriteDevices } from "../components/HandleFavorite";
import { useEffect, useState } from "react";
import { getApiById } from "../fetch/FetchApi";
import DeviceListCard from "../components/DeviceListCard";

export default function FavoritePage() {
    const favoriteDevices = getFavoriteDevices();
    const [devices, setDevices] = useState([]);

    const fetchDevices = async () => {
        if (favoriteDevices.length === 0) {
            setDevices([]);
            return;
        } else {
            const devicesData = await Promise.all(
                favoriteDevices.map(id => getApiById(id))
            );

            const extractedData = devicesData.map(response =>
                response.smartphone
            );
            setDevices(extractedData);
        }
    }

    useEffect(() => {
        fetchDevices();
    }, [favoriteDevices]);

    return (
        <div>
            <h1>Preferiti</h1>
            <div>
                {favoriteDevices.length > 0 ? (
                    devices.map((device, index) => (
                        <div key={favoriteDevices[index]}>
                            <DeviceListCard key={favoriteDevices[index]} device={device} />
                        </div>
                    ))
                ) : (
                    <div>Nessun dispositivo preferito trovato.</div>
                )}
            </div>
        </div>
    );
}