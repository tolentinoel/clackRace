import React, { Component } from 'react';
import '../styles/WordContainer.css';

class WordContainer extends Component {

    state = {
        ipsum: "Bacon ipsum dolor amet jowl ground round tri-tip hamburger capicola kielbasa prosciutto. Ham sirloin filet mignon, ground round brisket ball tip bresaola shoulder venison. Filet mignon drumstick prosciutto, ground round beef ribs tenderloin bresaola chuck bacon ham boudin rump pancetta. Ground round t-bone turkey shank jowl turducken cow salami porchetta leberkas tenderloin meatloaf. Tongue pig swine pork, meatball jerky short loin salami turducken pork loin burgdoggen short ribs chislic filet mignon.",
        text: "",
        wordPool: [],
        score: 0
    }

    handleChange = (e) => {

        this.setState({[e.target.name]: e.target.value})

        // if text has space, set state
        if (e.target.value.includes(" ") && this.state.ipsum.split(" ")[this.state.score] === this.state.text) {
            let correct = this.state.score + 1
            this.setState({
                text: "",
                wordPool: `${this.state.wordPool +" "+ this.state.text}`,
                score: correct
            })
        }
    }


    // renderScore = () => {
    //     debugger
    //     let str = this.state.wordPool

    //     if (this.state.text === str.split(" ")[str.length-1]) {
    //         let num = this.state.score + 1
    //         this.setState({
    //             score: num
    //         })
    //     }
    // }

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
