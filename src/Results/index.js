import React from 'react';
import './style.css'


const Results = ({convertedAmount}) => {

    if (convertedAmount !== undefined) 

    {return <div
    className="results_result"
    hidden={convertedAmount <= 0}
    >
        Converted amount:  {convertedAmount}
    </div>}

    else return ( <div>
    
    </div>)
      
}

export default Results;