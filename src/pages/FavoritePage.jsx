import { getFavoriteDevices } from "../components/HandleFavorite";
import { useEffect, useState } from "react";
import { getApiById } from "../fetch/FetchApi";

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
            <ul>
                {favoriteDevices.length > 0 ? (
                    devices.map((device, index) => (
                        <li key={favoriteDevices[index]}>
                            {device.title}
                        </li>
                    ))
                ) : (
                    <li>Nessun dispositivo preferito trovato.</li>
                )}
            </ul>
        </div>
    );
}