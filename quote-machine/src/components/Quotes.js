import React from 'react';

export default class Quotes extends React.Component {
    constructor(){
        super();
        this.state = {
            quote: "",
            author: ""
        }
        this.saveData = this.saveData.bind(this);
        this.newQuote = this.newQuote.bind(this);
    }

    saveData(data){
        this.setState({
            quote: data.quote,
            author: data.author
        })
        return null;
    }

    componentDidMount(){
        const url = 'http://quotes.stormconsultancy.co.uk/random.json';
        fetch(url)
        .then(results => {
            return results.json();
        }).then(data => {
            let quote = data
            this.saveData(quote);
        })
    }

    newQuote(){
        const url = 'http://quotes.stormconsultancy.co.uk/random.json';
        fetch(url)
        .then(results => {
            return results.json();
        }).then(data => {
            let quote = data
            this.saveData(quote);
        })

    }
  
    render(){
        return(
            <section className="Quotes">
        <div className="text-wrapper">
        <h1><span className="prefix">Quote:</span> {this.state.quote} </h1>
        <h2><span className="prefix">Author:</span> {this.state.author} </h2>
        </div>
        <div className="button-wrapper">
        <button className="quote-button" onClick={this.newQuote}>new quote</button>
        </div>
        </section>
        )
    }
}