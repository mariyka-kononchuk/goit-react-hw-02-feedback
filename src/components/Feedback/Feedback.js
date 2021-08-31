//import PropTypes from 'prop-types';
import React from 'react';
import s from './Feedback.module.css';
import Controls from '../Controls/Controls';

class Feedback extends React.Component {
    static defaultProps = {
        initialValue:0,
    }
    state = {
            good: this.props.initialValue,
            neutral: this.props.initialValue,
            bad: this.props.initialValue, 
        };
    
    goodFeedbackIncrement = () => {
        console.log("кликнули на Good");
        this.setState(prevState => ({
           good: prevState.value + 1,
        }));
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
                <Controls
                    onGoodFeedbackIncrement={this.goodFeedbackIncrement}
                    onNeutralFeedbackIncrement={this.neutralFeedbackIncrement}
                    onBadFeedbackIncrement={this.badFeedbackIncrement}
                />
            </div>

        );

    }
}

export default Feedback;