import React, { useState } from 'react';
import {StyledForm, Label, Select, Input, Button} from './styled.js'

const Form = ({ calculateCurrency }) => {

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
        <StyledForm onSubmit={onFormSubmit}>
            <p>
                <Label>Calculate from:</Label>
                <Select value={firstCurrency} onChange={onSelectChangeFirst}>
                    <option />
                    <option>PLN</option>
                    <option>GBP</option>
                    <option>EUR</option>
                    <option>USD</option>
                </Select>
            </p>
            <p>
                <Label>Calculate to:</Label>
                <Select value={secondCurrency} onChange={onSelectChangeSecond}>
                    <option />
                    <option>PLN</option>
                    <option>GBP</option>
                    <option>EUR</option>
                    <option>USD</option>
                </Select>
            </p>
            <p>
                <Label>Select amount:</Label>
                <Input
                    value={moneyAmount}
                    placeholder="Write amount here."
                    onChange={({ target }) => setMoneyAmount(target.value)}
                    required
                />
            </p>
            <Button
                onClick={() => calculateCurrency(firstCurrency, secondCurrency, moneyAmount)}
            >
                Convert!
            </Button>
            
        </StyledForm>
    )
};



export default Form;