import React from 'react';
import './App.css';
import DisplayQuote from './components/DisplayQuote';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.getQuote = this.getQuote.bind(this);

    this.state = {
      quote: ''
    };
  }

  getQuote() {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then(response => response.data)
      .then(data => {
        console.log(data);
        this.setState({
          quote: data[0],
        });
    });
  }

  render() {
    return (
      <div className="App">
        <DisplayQuote quote={this.state.quote} />
        <button type="button" onClick={this.getQuote}>Get quote</button>
      </div>
    );
  }
}

export default App;
