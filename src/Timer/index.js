import React, { useState, useEffect } from 'react';
import "./style.css";

const Timer = () => {

    const [timeDateNow, setTimeDateNow] = useState();

    useEffect(() => {
    
        const intervalId = setInterval(() => {

            const datePattern = {
                month: "long", 
                weekday: "long", 
                day: "numeric", 
                year: "numeric", 
                hour:"numeric", 
                minute:"numeric", 
                second:"numeric"
               };

            const newDate = new Date().toLocaleDateString("en-GB", datePattern);
            setTimeDateNow(newDate);
        }, 1000);

        return () => {
            clearInterval(intervalId)
        };

    },[]);

    return(
        <div className="timer">Today is: {timeDateNow}</div>
    )
};

export default Timer;