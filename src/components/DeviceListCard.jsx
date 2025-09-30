import { Link } from 'react-router-dom'
import '../css/DeviceListCard.css'

export default function DeviceListCard({ device }) {
    return (
        <Link to={`/${device.id}`} className="device-card-link">
            <button className="device-list-card">
                <h2 className="device-card-title">{device.title}</h2>
                <p className="device-card-category">{device.category}</p>
            </button>
        </Link>
    );
}