import { useState } from "react";
import SelectionPanel from "../components/SelectionPanel"
import ComparatorPanel from "../components/ComparatorPanel";
import HomeButton from '../components/HomeButton';

export default function ComparatorPage() {
    const [comparisonDevices, setComparisonDevices] = useState([]);

    return (
        <>
            <HomeButton />
            <SelectionPanel comparisonDevicesChange={setComparisonDevices} />
            <ComparatorPanel selectedDevices={comparisonDevices} />
        </>
    );
}