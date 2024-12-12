import './Datum.css'
import React from 'react';

function Datum(){
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`;

    return (
        <div>
            <p id="datum">{formattedDate}</p>
        </div>
    );
} 

export default Datum;
