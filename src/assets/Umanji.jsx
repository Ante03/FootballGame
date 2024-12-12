import { useState } from "react";

function Uvecaj([a, setA]) {
    if(a <= 0){
        return(
            setA(0)
        )
    }
    return (
        <div>
                {setA(prevA => prevA - 1)}
        </div>
    )
}

export default Uvecaj;