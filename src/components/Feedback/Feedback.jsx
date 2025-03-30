const Feedback = ({positive, totalFeedback, good, neutral, bad}) => {

    return(
        <>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {totalFeedback}</p>
            <p>Positive: {positive}</p>
        </>
    );
};

export default Feedback;