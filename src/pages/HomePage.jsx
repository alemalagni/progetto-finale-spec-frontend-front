import { useState, useEffect } from "react";
import { getApi } from "../fetch/FetchApi";
import DeviceListCard from "../components/DeviceListCard";

export default function HomePage() {
    const [devices, setDevices] = useState([]);

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

    return (
        <div>
            {devices && devices.map(device => (
                <DeviceListCard key={device.id} device={device} />
            ))}
        </div>
    );
}
