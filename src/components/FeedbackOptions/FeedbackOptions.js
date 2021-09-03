//import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({onGoodFeedbackIncrement,onNeutralFeedbackIncrement,onBadFeedbackIncrement}) => {
    return (
        <div>
            <button type="button" onClick={onGoodFeedbackIncrement}>Good</button>
            <button type="button" onClick={onNeutralFeedbackIncrement}>Neutral</button>
            <button type="button" onClick={onBadFeedbackIncrement}>Bad</button>
        </div>
    )
}

export default FeedbackOptions;