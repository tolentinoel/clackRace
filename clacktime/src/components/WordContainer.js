import React, { Component } from 'react';
import '../styles/WordContainer.css';

class WordContainer extends Component {

    state = {
        text: ""
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <div className="wordCDiv">
                <div id="window">
                    <p>Bacon ipsum dolor amet jowl ground round tri-tip hamburger capicola kielbasa prosciutto. Ham sirloin filet mignon, ground round brisket ball tip bresaola shoulder venison. Filet mignon drumstick prosciutto, ground round beef ribs tenderloin bresaola chuck bacon ham boudin rump pancetta. Ground round t-bone turkey shank jowl turducken cow salami porchetta leberkas tenderloin meatloaf. Tongue pig swine pork, meatball jerky short loin salami turducken pork loin burgdoggen short ribs chislic filet mignon.</p>
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
