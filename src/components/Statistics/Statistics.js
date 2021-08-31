import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';



class Statistics extends React.Component {
    render() {
        return (
            <div className="s.feedback">
                <span className="s.title">Statistics</span>
                <div>
              {/* <p >Good: { state.good}</p> */}
                    {/* <p >Neutral: { state.neutral}</p>
                    <p>Bad: { state.bad}</p> */}
                </div>
            </div>

        );

    }
}

// Statistics.propTypes = {
//   title: PropTypes.string,
//   stats: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired,
//       percentage: PropTypes.number.isRequired,
//     }),
//   ),
// };

export default Statistics;
