import React from 'react';
import Container from './components/Container/Container';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

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
        neutral: prevState.value + 1,
        }));
    }
    neutralFeedbackIncrement = () => {
      console.log("кликнули на Neutral");
      this.setState(prevState => ({
        good: prevState.value + 1,
        }));
    }
    badFeedbackIncrement = () => {
      console.log("кликнули на Bad");
      this.setState(prevState => ({
        bad: prevState.value + 1,
        }));
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
              {this.state.good === 0 && this.state.neutral === 0 && this.state.bad === 0 ?
                <Notification message="No feedback given"/>
                :
                <Statistics
                  good={this.state.good}
                  neutral={this.state.neutral}
                  bad={this.state.bad}
                  total={1}
                  positivePercentage={1} />}
              
            </Section>
          </Container>
        );
    }
}

export default App;
