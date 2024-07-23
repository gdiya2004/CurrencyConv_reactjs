import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurryinfo";

function App(){
    const [amount,setAmount]=useState(0);
    const [from,setFrom]=useState("usd");
    const [to,setTo]=useState("inr");
    const [convertedAmount,setConvertedAmount]=useState(0)
    const currencyInfo=useCurrencyInfo(from)
    const options=Object.keys(currencyInfo)

    const swap=()=>{
        setFrom(to)
        setTo(from)
        setConvertedAmount(amount)
        setAmount(convertedAmount)
    }
    const convert=()=>{
        setConvertedAmount(amount*currencyInfo[to])
    }
    return(
        <>
        <form onSubmit={(e)=>{
            e.preventDefault();
            convert()
        }}>
            <div>
                <InputBox
                label="From" 
                amount={amount}
                currencyOptions={options}
                selectCurrency={from}
                onCurrencyChange={(currency)=>setFrom(currency)}
                onAmountChange={(amount)=>setAmount(amount)}
                />
            </div>
            <div><button onClick={swap}>SWAP</button></div>
            <div>
                <InputBox
            label="to"
            amountDisable
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency)=>setTo(currency)}
            selectCurrency={to}
            />
            </div>
            <button type="submit">Convert</button>
        </form>
        </>
    )
}