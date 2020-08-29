import styled from 'styled-components';

export const StyledForm = styled.form`
    background-color:rgb(197, 196, 196);
    margin: auto;
    text-align: center;
    max-width:1000px;
    border-bottom: 2px solid  rgb(62, 172, 62);
    padding:20px;
`;

export const Select = styled.select`
    padding: 5px;
    color: rgb(49, 138, 49);
    border: 2px solid rgb(49, 138, 49);
`;

export const Label = styled.label`
    font-size: 26px;
    max-width: 180px;
    margin-right: 20px;
    text-shadow:rgb(62, 172, 62) 1px 1px;
`;

export const Button = styled.button`
    background: rgb(49, 138, 49);
    color:white;
    border:none;
    padding:10px;
    margin: 20px 0 0 20px;
    font-size: 16px;
    transition: 1s;

    &:hover{
    transform:scale(1.2);
    background-color: hsl(120, 48%,67%);
    }
`;

export const Input = styled.input`
    padding: 5px;
    color: rgb(49, 138, 49);
    border: 2px solid rgb(49, 138, 49);
`;