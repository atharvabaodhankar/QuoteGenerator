import { useEffect, useState } from 'react'
import './App.css'
import { getQuote } from './api/QuoteGenerator'


function App() {

  const [quote, setQuote] = useState(null)
  const [numQuotes, setNumQuotes] = useState(1)
  const [tags, setTags] = useState('')
  


  useEffect(() => {
   const getQuoteData = async () => {
    const q = await getQuote(numQuotes, tags)
    setQuote(q)
    }
    getQuoteData()
  }, [numQuotes, tags])
  
  const getNewQuote = async () => {
    const q = await getQuote(numQuotes, tags)
    setQuote(q)
  }

  return (
    <div className="app-container">
      <h1>Quote Generator</h1>
      <div className="quote-card">
        {quote && 
        (
          quote.map((i) => (
            <div key={i._id} className="quote-content">
              <h2>"{i.content}"</h2>
              <p>- {i.author}</p>
            </div>
          ))
        )
        
        }
        <div className="input-group">
          <label htmlFor="numQuotes">Number of Quotes:</label>
          <input
            type="number"
            id="numQuotes"
            min="1"
            value={numQuotes}
            onChange={(e) => setNumQuotes(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="tags">Tags (comma or | separated):</label>
          <input
            type="text"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="e.g., technology,famous-quotes or history|civil-rights"
          />
        </div>
        <button onClick={getNewQuote} className="new-quote-btn">Generate New Quote</button>
      </div>
    </div>
  )
}

export default App
