import React from 'react'

function InputBox(
   { label,
    amount,
    onAmountChange,
    onCurrencyChange,
    amountDisable,
    currencyDisable,
    currencyOptions=[],
    selectCurrency="usd",
    className="",}
){
    return(
        <>
        <div>
        <label>{label}</label>
        <input
        type="number"
        value={amount} 
        disabled={amountDisable}
        onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}/>
        </div>
        <div>
            <p>Currency Type</p>
            <select
             value={selectCurrency}
             onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
             disabled={currencyDisable}>
               {currencyOptions.map((currency)=>{
                <option key={currency} value={currency}>{currency}</option>
               })}
            </select>
        </div>
        </>
    )
}