import React, {useState} from 'react';
import Container from './Container';
import Header from './Header'
import Form from './Form'
import Results from './Results'


function App() {

  let result;
  const [convertedAmount, setCalculatedCurrency] = useState(0)

  const calculateCurrency = (firstCurrency, secondCurrency, moneyAmount) => {

    const euroBuy = 4.3914;
    const euroSell = 4.4802;
    const dollarBuy = 3.8940;
    const dollarSell = 3.9726;
    const poundBuy = 4.8946;
    const poundSell = 4.9934;

    
    
      switch (firstCurrency) {

      case "PLN":
        switch (secondCurrency) {
          case "EUR":
            result =  moneyAmount / euroBuy;
            break;

          case "USD":
            result =  moneyAmount / dollarBuy;
            break;

          case "GBP":
            result =  moneyAmount / poundBuy;
            break;

          case "PLN":
            result =  moneyAmount / 1;
            break;
        // no default
        
        }
        break;

      case "EUR":
        switch (secondCurrency) {
          case "EUR":
            result =  moneyAmount / 1;
            break;

          case "USD":
            result =  moneyAmount / (dollarBuy / euroBuy);
            break;

          case "GBP":
            result =  moneyAmount / (poundBuy / euroBuy);
            break;

          case "PLN":
            result =  moneyAmount * euroSell;
            break;
          // no default
        }

        break;
      case "USD":
        switch (secondCurrency) {
          case "EUR":
            result =  moneyAmount / (euroBuy / dollarBuy);
            break;

          case "USD":
            result =  moneyAmount / 1;
            break;

          case "GBP":
            result =  moneyAmount / (poundBuy / dollarBuy);
            break;

          case "PLN":
            result =  moneyAmount * dollarSell;
            break;
          // no default
        }
        break;
      case "GBP":
        switch (secondCurrency) {
          case "EUR":
            result =  moneyAmount / (euroBuy / poundBuy);
            break;

          case "USD":
            result =  moneyAmount / (dollarBuy / poundBuy);
            break;

          case "GBP":
            result =  moneyAmount / 1;
            break;

          case "PLN":
            result =  moneyAmount * poundSell;
            break;
          // no default
        }
        // no default
    }
  
    setCalculatedCurrency(convertedAmount => convertedAmount = result);

  };




 return  (

    <Container>
      <Header title="Currency Calculator"></Header>

      <Form
        calculateCurrency={calculateCurrency}
      />
  
    <Results
    convertedAmount={convertedAmount}
    />
    
    </Container>

  )


}


export default App;
