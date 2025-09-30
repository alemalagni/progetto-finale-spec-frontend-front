import { useParams } from 'react-router-dom';
import { getApiById } from "../fetch/FetchApi";
import { useEffect, useState } from "react";
import HomeButton from '../components/HomeButton';

export default function DetailPage() {
    const { id } = useParams();
    const [device, setDevice] = useState(null);

    useEffect(() => {
        getApiById(id).then(data => {
            setDevice(data.smartphone);
        });
    }, []);

    console.log(device);

    return (
        <div>
            <HomeButton />
            {device && (
                <>
                    <h1>{device.title}</h1>
                    <div>
                        <h2>{`Categoria: ${device.category}`}</h2>
                        <p>{`Brand: ${device.brand}`}</p>
                        <p>{`Prezzo: ${device.price}€`}</p>
                        <p>{`Anno di uscita: ${device.year}`}</p>
                        <p>{`Specifiche:`}</p>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li>{`Batteria: ${device.specifications.battery}`}</li>
                            <li>{`Camera: ${device.specifications.camera}`}</li>
                            <li>{`Processore: ${device.specifications.processor}`}</li>
                            <li>{`RAM: ${device.specifications.ram}`}</li>
                            <li>{`Dimensioni schermo: ${device.specifications.screenSize}`}</li>
                            <li>{`Spazio di archiviazione: ${device.specifications.storage}`}</li>

                        </ul>
                    </div>
                </>
            )}
        </div>
    );
}