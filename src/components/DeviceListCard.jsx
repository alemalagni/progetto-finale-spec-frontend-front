export default function DeviceListCard({ device }) {
    return (
        <div>
            <h2>{device.title}</h2>
            <p>{device.category}</p>
        </div>
    );
}