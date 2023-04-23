import React, { useEffect, useState } from 'react';

export default function TotalPot({ info }) {

    const [totalPot, setTotalPot] = useState(0);

    useEffect(() => {
        let sum = 0;
        for (let i = 0; i < info.length; i++) {
            const { tree, water, bunker, triple, late, nr, threePutt, shed } = info[i];
            sum += tree + water + bunker + triple + late + nr + threePutt + shed;
        }
        setTotalPot(sum);
    }, [info]);

    return (
        <div>
            Total Pot = £{totalPot}
        </div>
    );
}
