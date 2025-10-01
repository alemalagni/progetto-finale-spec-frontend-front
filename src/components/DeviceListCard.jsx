import { Link } from 'react-router-dom'
import FavoriteButton from './FavoriteButton';
import '../css/DeviceListCard.css'

export default function DeviceListCard({ device }) {

    return (
        <Link to={`/${device.id}`} className="device-card-link" >
            <div className="device-list-card">
                <h2 className="device-card-title">{device.title}</h2>
                <p className="device-card-category">{device.category}</p>
                <FavoriteButton id={device.id} />
            </div>
        </Link>
    );
}