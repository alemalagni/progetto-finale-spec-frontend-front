import { getApi } from "../fetch/FetchApi";
import { useState, useEffect } from "react";

export default function SelectionPanel({ comparisonDevicesChange }) {
    const [devices, setDevices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedDevices, setSelectedDevices] = useState([]);

    useEffect(() => {
        const fetchDevices = async () => {
            const data = await getApi();
            setDevices(data);
            setLoading(false);
        };

        fetchDevices();
    }, []);

    function handleSelectDevice(id) {
        const selectedArray = [...selectedDevices];
        if (!selectedArray.includes(id)) {
            selectedArray.push(id);
        }
        setSelectedDevices(selectedArray);
    }

    function handleSelection(selected) {
        comparisonDevicesChange(selected);
    }

    return (
        <div>
            <h2>Seleziona Dispositivo</h2>
            <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {devices.map(device => (
                    <li key={device.id}>
                        <button
                            onClick={() => handleSelectDevice(device.id)}
                        >
                            <p>{device.title}</p>
                            <span>{device.category}</span>
                        </button>
                    </li>
                ))}
            </ul>

            {selectedDevices.length > 0 && (
                <button onClick={() => handleSelection(selectedDevices)}>Compara</button>
            )}
        </div>
    );
}