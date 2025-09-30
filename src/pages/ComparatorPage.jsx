import { useState } from "react";
import SelectionPanel from "../components/SelectionPanel"
import ComparatorPanel from "../components/ComparatorPanel";

export default function ComparatorPage() {
    const [comparisonDevices, setComparisonDevices] = useState([]);

    return (
        <>
            <SelectionPanel comparisonDevicesChange={setComparisonDevices} />
            <ComparatorPanel selectedDevices={comparisonDevices} />
        </>
    );
}