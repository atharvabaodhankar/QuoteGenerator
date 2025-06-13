import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getQuote } from './api/QuoteGenerator'

function App() {

  const [quote, setQuote] = useState(null)
  


  useEffect((e) => {
   const getQuoteData = async () => {
    const quote = await getQuote()
    setQuote(quote)
   }
   getQuoteData()
  }, [])
  
  const getNewQuote = async () => {
    const quote = await getQuote()
    setQuote(quote)
  }

  return (
    <>
      {quote && (
        <div>
          <h1>{quote.content}</h1>
          <p>{quote.author}</p>
        </div>
      )}

      <button onClick={getNewQuote}>Get New Quote</button>
    </>
  )
}

export default App
