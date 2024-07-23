import {useState} from 'react'
import {InputBox} from './components/index'
import useCurrencyInfo from './hooks/useCurryinfo'

function App(){
    const [amount,setAmount]=useState(0)
    const [from,setFrom]=useState("usd")
    const [to,setTo]=useState("inr")
    const [convertedAmount,setConvertedAmount]=useState(0)
    const currencyInfo=useCurrencyInfo(from)
    const options=Object.keys(currencyInfo)
    function swap(){
        setFrom(to);
        setTo(from);
        setAmount(convertedAmount);
        setConvertedAmount(amount)
    }
    const convert=()=>{
        setConvertedAmount(amount*currencyInfo[to])
    }
    return(
        <>
        <div>
            <div>
                <form onSubmit={(e)=>
                    {
                        e.preventDefault()
                        convert();
                    }}>
                <div>
                    <InputBox label="From" amount={amount} currencyOptions={options} selectCurrency={from}
                    onAmountChange={(amount)=>setAmount(amount)}
                    onCurrencyChange={(currency)=>setAmount(amount)}
                    />
                </div>
                </form>
            </div>
        </div>
        </>
    )
}