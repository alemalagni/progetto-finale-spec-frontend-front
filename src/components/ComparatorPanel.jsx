import { useEffect, useState } from "react";
import { getApiById } from "../fetch/FetchApi";
import '../css/ComparatorPanel.css'

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
                <table className="comparison-table">
                    <thead>
                        <tr>
                            <th>Prodotto</th>
                            <th>Brand</th>
                            <th>Prezzo</th>
                            <th>Anno di uscita</th>
                            <th>Batteria</th>
                            <th>Camera</th>
                            <th>Processore</th>
                            <th>RAM</th>
                            <th>Dimensioni schermo</th>
                            <th>Spazio di archiviazione</th>
                        </tr>
                    </thead>
                    <tbody>
                        {devices.map((device, index) => (
                            <tr key={selectedDevices[index]}>
                                <td>{device?.title}</td>
                                <td>{device?.brand}</td>
                                <td>{device?.price}€</td>
                                <td>{device?.year}</td>
                                <td>{device?.specifications.battery}</td>
                                <td>{device?.specifications.camera}</td>
                                <td>{device?.specifications.processor}</td>
                                <td>{device?.specifications.ram}</td>
                                <td>{device?.specifications.screenSize}</td>
                                <td>{device?.specifications.storage}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )
            }
        </div >
    );
}
