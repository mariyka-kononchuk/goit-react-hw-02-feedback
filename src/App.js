import React from 'react';
import Container from './components/Container/Container';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';

class App extends React.Component {
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
          <Container>
            <Section title="Please leave feedback">
              <FeedbackOptions
                options={1}
                onLeaveFeedback={1}
                onGoodFeedbackIncrement={this.goodFeedbackIncrement}
                onNeutralFeedbackIncrement={this.neutralFeedbackIncrement}
                onBadFeedbackIncrement={this.badFeedbackIncrement}/>
            </Section>
            <Section title="Statistics">
              <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={1} positivePercentage={1} />
            </Section>
          </Container>
        );
    }
}

export default App;
