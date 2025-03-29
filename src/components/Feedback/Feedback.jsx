const Feedback = ({positive, totalFeedback, good, neutral, bad}) => {

    return(
        <>
            { totalFeedback > 0 ? (
            <>
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
                <p>Total: {totalFeedback}</p>
                <p>Positive: {positive}</p>
            </>) : 
            (<p> No feedback yet</p>)
            }
        </>
    );
};

export default Feedback;