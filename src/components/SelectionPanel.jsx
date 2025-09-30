import { getApi } from "../fetch/FetchApi";
import { useState, useEffect } from "react";

export default function SelectionPanel() {
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
        selectedArray.push(id);
        setSelectedDevices(selectedArray);
    }


    return (
        <div>
            <h2>Selection Panel</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {devices.map(device => (
                    <li key={device.id}>
                        <button
                            onClick={e => handleSelectDevice(e.target.value)}
                            value={device.id}
                        >
                            {device.title}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}