import '../css/DeviceListCard.css'

export default function DeviceListCard({ device }) {
    return (
        <div className="device-list-card">
            <h2 className="device-card-title">{device.title}</h2>
            <p className="device-card-category">{device.category}</p>
        </div>
    );
}