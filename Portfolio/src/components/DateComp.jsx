import React from 'react';

function DateComp() {
    const currentDate = new Date().toLocaleDateString();

    return (
        <div className="date-display">
            <p>{currentDate}</p>
        </div>
    );
}

export default DateComp;
