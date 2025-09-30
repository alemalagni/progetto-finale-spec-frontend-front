import { useEffect, useState } from "react";
import { getApiById } from "../fetch/FetchApi";

export default function ComparatorPanel({ selectedDevices = [] }) {
    const [devices, setDevices] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchDevices = async () => {
        if (selectedDevices.length === 0) {
            setDevices([]);
            return;
        } else {
            const devicesData = await Promise.all(
                selectedDevices.map(id => getApiById(id))
            );

            const extractedData = devicesData.map(response =>
                response.smartphone
            );
            setDevices(extractedData);
        }
    }

    useEffect(() => {
        fetchDevices();
        setLoading(false)
    }, [selectedDevices]);

    if (loading) {
        return <div>Caricamento...</div>;
    }

    return (
        <div>
            <h2>Comparator Panel</h2>
            {selectedDevices.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <th>Prodotto</th>
                        </tr>
                    </thead>
                    <tbody>
                        {devices.map((device, index) => (
                            <tr key={selectedDevices[index]}>
                                <td>{device?.title}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )
            }
        </div >
    );
}
