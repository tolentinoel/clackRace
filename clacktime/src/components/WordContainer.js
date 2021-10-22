import React, { Component } from 'react';
import '../styles/WordContainer.css';

class WordContainer extends Component {

    state = {
        ipsum: "Bacon ipsum dolor amet jowl ground round tri-tip hamburger capicola kielbasa prosciutto. Ham sirloin filet mignon, ground round brisket ball tip bresaola shoulder venison. Filet mignon drumstick prosciutto, ground round beef ribs tenderloin bresaola chuck bacon ham boudin rump pancetta. Ground round t-bone turkey shank jowl turducken cow salami porchetta leberkas tenderloin meatloaf. Tongue pig swine pork, meatball jerky short loin salami turducken pork loin burgdoggen short ribs chislic filet mignon.",
        text: "",
        wordPool: [],
        score: 0,
        wordCounter: 0
    }

    handleChange = (e) => {

        this.setState({[e.target.name]: e.target.value})
        let counter = this.state.wordCounter + 1
        // if text has space, set state

        if (e.target.value.includes(" ") && this.state.ipsum.split(" ")[this.state.wordCounter] === this.state.text) {
            let correct = this.state.score + 1
            this.setState({
                text: "",
                wordPool: `${this.state.wordPool +" "+ this.state.text}`,
                score: correct,
                wordCounter: counter
            })
        } else if (e.target.value.includes(" ") && this.state.ipsum.split(" ")[this.state.wordCounter] !== this.state.text){
            console.log("ENGGGGKK!!!")
            this.setState({
                wordCounter: counter,
                text: "",
                wordPool: `${this.state.wordPool +" "+ this.state.text}`

            })
        }
    }



    render() {


        return (
            <div className="wordCDiv">
                <p>{this.state.wordPool}</p>

                <p>{this.state.score}</p>
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
                    />
                </form>
            </div>
        );
    }
}

export default WordContainer;
