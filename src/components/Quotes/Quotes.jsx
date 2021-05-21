import React, {useState, useEffect} from 'react'
import './Quotes.css';

const Quotes = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  

  useEffect(() => {
    getQuote();
    
    
  }, [])
  function getQuote() {
    fetch("http://api.quotable.io/random")
    .then(res=> res.json())
    .then(data=>{
      console.log(data);
      setQuote(data.content); 
      setAuthor(data.author); 
    })
  }                                       
  return (
    <>
    <div className="App">
        
    <div className="quoteBox">
    <h5 id="quote"><i className="material-icons">"</i> {quote}<i className="material-icons">"</i></h5>
    <h6 id="author">-{author}</h6>
    
    </div>
    <button className="btn" onClick={getQuote}>New Quote</button>
    </div>
   </>
  )
}

export default Quotes
