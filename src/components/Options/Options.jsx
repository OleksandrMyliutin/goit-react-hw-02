const Options = ({totalFeedback, updateFeedback, resetUpdate}) => {
    return(
        <>
            <button onClick={() => updateFeedback('good')}>Good</button>
            <button onClick={() => updateFeedback('neutral')}>Neutral</button>
            <button onClick={() => updateFeedback('bad')}>Bad</button>
            { totalFeedback > 0 && (<button onClick={resetUpdate}>Reset</button>)}
        </>
    );
};

export default Options;