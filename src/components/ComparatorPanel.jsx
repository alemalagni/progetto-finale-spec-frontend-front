export default function ComparatorPanel({ selectedDevices = [] }) {

    return (
        <div>
            <h2>Comparator Panel</h2>
            {selectedDevices.length > 0 && (
                <ul>
                    {selectedDevices.map((id, index) => (
                        <li key={index}>{id}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}
