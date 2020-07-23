import React from 'react';
import './style.css'


const Results = ({convertedAmount}) => (

    <div
    className="results_result"
    hidden={convertedAmount <= 0}
    >
        Converted amount:  {convertedAmount}
    </div>
)

export default Results;