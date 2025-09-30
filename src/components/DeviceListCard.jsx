export default function DeviceListCard({ key, device }) {
    return (
        <div key={key}>
            <h2>{device.title}</h2>
            <p>{device.category}</p>
        </div>
    );
}