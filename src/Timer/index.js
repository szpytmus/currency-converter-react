import React from 'react';
import { useCurrentDate } from './useCurrentDate.js'
import {Div} from './styled.js'

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

    const date = useCurrentDate();

    return (
        <Div className="timer">Today is: {""}{formatDate(date)}</Div>
    )
};

export default Timer;