import React, { useState, useEffect } from 'react';
import "./style.css";

const formatDate = (date) => date.toLocaleDateString("en-GB", {
    month: "long",
    weekday: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
});



const Timer = () => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {

        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId)
        };

    }, []);

    return (
        <div className="timer">Today is: {""}{formatDate(date)}</div>
    )
};

export default Timer;