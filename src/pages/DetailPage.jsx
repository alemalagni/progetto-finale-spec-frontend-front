import { useParams } from 'react-router-dom';

export default function DetailPage() {
    const { id } = useParams();

    return (
        <div>
            <h1>{`Dettagli del dispositivo ${id}`}</h1>
        </div>
    );
}
