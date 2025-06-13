import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getQuote } from './api/QuoteGenerator'

function App() {

  const [quote, setQuote] = useState(null)
  


  useEffect((e) => {
   const getQuoteData = async () => {
    const q = await getQuote()
    setQuote(q)
    }
    getQuoteData()
  }, [])
  
  const getNewQuote = async () => {
    const q = await getQuote()
    setQuote(q)
  }

  return (
    <>
      
      {quote && 
      (
        quote.map((i) => (
          <div key={i._id}>
            <p>{i.content}</p>
            <p>{i.author}</p>
          </div>
        ))
      )
      
      }
    

      <button onClick={getNewQuote}>Get New Quote</button>
    </>
  )
}

export default App
