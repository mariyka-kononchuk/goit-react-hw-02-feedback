//import PropTypes from 'prop-types';
import React from 'react';
import s from './Feedback.module.css';

class Feedback extends React.Component {
    goodFeedbackIncrement = () => {
            console.log("кликнули на Good");
    }
    neutralFeedbackIncrement = () => {
            console.log("кликнули на Neutral");
    }
    badFeedbackIncrement = () => {
            console.log("кликнули на Bad");
    }
    render() {
       
        return (
            <div className="s.feedback">
                <span className="s.title">Please leave feedback</span>
                <div>
                    <button type="button" onClick={this.goodFeedbackIncrement}>Good</button>
                    <button type="button" onClick={this.neutralFeedbackIncrement}>Neutral</button>
                    <button type="button" onClick={this.badFeedbackIncrement}>Bad</button>
                </div>
            </div>

        );

    }
}

export default Feedback;