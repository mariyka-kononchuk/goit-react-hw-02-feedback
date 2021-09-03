//import PropTypes from 'prop-types';
import s from './Statistics.module.css';


const Statistics = ({good, neutral, bad}) => {
    return (
        <div>
            <p >Good: {good}</p> 
            <p >Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
        </div> 
    )
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
