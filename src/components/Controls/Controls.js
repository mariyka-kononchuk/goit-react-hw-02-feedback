import React from 'react';

const Controls = ({onGoodFeedbackIncrement,onNeutralFeedbackIncrement,onBadFeedbackIncrement}) => {
    return (
        <div>
            <button type="button" onClick={onGoodFeedbackIncrement}>Good</button>
            <button type="button" onClick={onNeutralFeedbackIncrement}>Neutral</button>
            <button type="button" onClick={onBadFeedbackIncrement}>Bad</button>
        </div>
    )
}

export default Controls;
