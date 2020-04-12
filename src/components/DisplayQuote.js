import React from 'react';

function DisplayQuote({ quote }) {
return (
    <div className="DisplayQuote">
    <img
        src={quote.image}
        alt={quote.character}
    />
        <p>Character: </p><h3>{quote.character}</h3>
        <p>Quote: </p><h5>{quote.quote}</h5>
    </div>
);
};

export default DisplayQuote;
