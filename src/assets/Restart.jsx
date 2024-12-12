import { useState } from "react";

function Restart([a, setA]) {
    
    return (
        <div>
            {setA(0)}
        </div>
    )
}

export default Restart;