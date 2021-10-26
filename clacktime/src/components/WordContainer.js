import React, { Component } from 'react';
import '../styles/WordContainer.css';

class WordContainer extends Component {

    state = {
        ipsum: "",
        text: "",
        wordPool: [],
        score: 0,
        wordCounter: 0
    }

    componentDidMount() {

        const input = document.getElementById('form')

        input.addEventListener('keyup', event => {
            if (event.code === 'Space') {
              this.checkText(this.state.text)
            }
          })

        fetch("https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1", {
            method:  'GET',
            })
            .then(res => res.json())
            .then(newData =>
                this.setState({
                    ipsum: newData[0].replace(/[,.]+/g, " ").split(" ").slice(0, 60).join(" ")
                })
            )

    }

    checkText = (e) => {

        // this.setState({[e.target.name]: e.target.value})
        let counter = this.state.wordCounter + 1
        
        if (e.charCode === 32 && this.state.ipsum.split(" ")[this.state.wordCounter] === this.state.text) {
            let correct = this.state.score + 1
            this.setState({
                text: "",
                // wordPool: [...this.state.wordPool, `${this.state.text}`],
                score: correct,
                wordCounter: counter
            })
        } else if (e.charCode === 32 && this.state.ipsum.split(" ")[this.state.wordCounter] !== this.state.text){
            this.setState({
                text: "",
                // wordPool: [...this.state.wordPool, `${this.state.text}`],
                wordCounter: counter,

            })
        }
    }

    handleChange = (e) => {

        this.setState({[e.target.name]: e.target.value})

        // if (e.target.value.includes(" ") && this.state.ipsum.split(" ")[this.state.wordCounter] === this.state.text) {

        //     this.setState({
        //         text: "",
        //         wordPool: `${this.state.wordPool +" "+ this.state.text}`,
        //     })
        // } else if (e.target.value.includes(" ") && this.state.ipsum.split(" ")[this.state.wordCounter] !== this.state.text){
        //     this.setState({
        //         text: "",
        //         wordPool: `${this.state.wordPool +" "+ this.state.text}`

        //     })
        // }
    }



    render() {
        return (
            <div className="wordCDiv">

                <p>{this.state.wordCounter}</p>

                <p>SCORE: {this.state.score}</p>
                <div id="window">

                    <p>{this.state.ipsum}</p>
                </div>
                <form id="form">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Type here"
                        value={this.state.text}
                        name="text"
                        onChange= {this.handleChange}
                        onKeyPress={this.checkText}
                    />
                </form>
            </div>
        );
    }
}

export default WordContainer;
