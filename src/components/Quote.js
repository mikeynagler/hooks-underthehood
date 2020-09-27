import React, { useEffect, useState } from "react";

function Quote() {
    const [quote, setQuote] = useState({});

	useEffect(() => {
		fetch(`https://quotes.rest/qod?language=en`).then((res) => {
			return res.json();
		}).then((res)=> {
            setQuote(res.contents.quotes[0]);
        });
		return () => {
			console.log('cleanup');
		};
	}, []);
	return <div className='quote-container'>
        <div className="quote">{quote.quote}</div>
        <div className="author">{quote.author}</div>
        <div className="author">{quote.date}</div>
    </div>;
}

export default Quote;
