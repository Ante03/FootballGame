import { useState } from "react";

function Uvecaj([a, setA]) {
    
    return (
        <div>
            {setA(prevA => prevA + 1)}
        </div>
    )
}

export default Uvecaj;