import React, { useState } from 'react';
import "./style.css";

const Form = ({ calculateCurrency, convertedAmount }) => {

    const [firstCurrency, setFirstCurrency] = useState("");
    const [secondCurrency, setSecondCurrency] = useState("");
    const [moneyAmount, setMoneyAmount] = useState("");

    const onSelectChangeFirst = ({ target }) => setFirstCurrency(target.value);
    const onSelectChangeSecond = ({ target }) => setSecondCurrency(target.value);
    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateCurrency(firstCurrency, secondCurrency, moneyAmount)
    }

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <p className="form__paragraph">
                <label className="form__label">Calculate from:</label>
                <select className="form__select" value={firstCurrency} onChange={onSelectChangeFirst}>
                    <option />
                    <option>PLN</option>
                    <option>GBP</option>
                    <option>EUR</option>
                    <option>USD</option>
                </select>
            </p>
            <p className="form__paragraph">
                <label className="form__label">Calculate to:</label>
                <select className="form__select" value={secondCurrency} onChange={onSelectChangeSecond}>
                    <option />
                    <option>PLN</option>
                    <option>GBP</option>
                    <option>EUR</option>
                    <option>USD</option>
                </select>
            </p>
            <p className="form__paragraph">
                <label className="form__label">Select amount:</label>
                <input
                    value={moneyAmount}
                    className="form__input"
                    placeholder="Write amount here."
                    onChange={({ target }) => setMoneyAmount(target.value)}
                />
            </p>
            <button
                className="form__button"
                onClick={() => calculateCurrency(firstCurrency, secondCurrency, moneyAmount)}
            >
                Convert!
            </button>
            <p 
            className="form__paragraph"
            >
                <span 
                className="form__result"
                hidden={convertedAmount <=0}
                >Converted currency: {convertedAmount}
                </span>
            </p>
        </form>
    )
};



export default Form;