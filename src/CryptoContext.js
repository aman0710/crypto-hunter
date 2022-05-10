import React, { useContext, useState, createContext, useEffect } from 'react';

const Crypto = createContext()

const CryptoContext = ({children}) => {
	const [currency, setCurrency] = useState("INR")
	const [symbol, setSymbol] = useState("₹")

	useEffect(() => {
    // eslint-disable-next-line
		if(currency == "INR") setSymbol("₹")
    // eslint-disable-next-line 
		else if(currency == "USD") setSymbol("$")
	}, [currency]);

  return (
    <Crypto.Provider value={{currency, symbol, setCurrency}}>
      {children}
    </Crypto.Provider>
  )
}

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto)
};