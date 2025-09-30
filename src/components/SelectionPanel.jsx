import { getApi } from "../fetch/FetchApi";
import { useState, useEffect } from "react";
import '../css/SelectionPanel.css'

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

    function handleSelectDevice(id, e) {
        const selectedArray = [...selectedDevices];
        if (!selectedArray.includes(id)) {
            selectedArray.push(id);
            e.add('selected');
        } else {
            const index = selectedArray.indexOf(id);
            if (index > -1) {
                selectedArray.splice(index, 1);
                e.remove('selected');
            }
        }
        setSelectedDevices(selectedArray);
    }

    function handleSelection(selected) {
        comparisonDevicesChange(selected);
    }

    return (
        <div className="selection-panel">
            <h2>Seleziona Dispositivo</h2>
            <ul className="device-list">
                {devices.map(device => (
                    <li key={device.id}>
                        <button
                            onClick={(e) => handleSelectDevice(device.id, e.currentTarget.classList)}
                            className="device-button"
                        >
                            <p className="device-title">{device.title}</p>
                            <span className="device-category">{device.category}</span>
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