import Description from './components/Description/Description'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import { useState, useEffect } from "react";

const App = () => { 
  const marks = {
    good:0,
    neutral:0,
    bad:0
  }
  const [clicks, setClicks] = useState(() => {
    const savedClicks = localStorage.getItem("saved-clicks");
    return savedClicks ? JSON.parse(savedClicks) : marks;
  });
  
  useEffect(() => {
    localStorage.setItem("saved-clicks", JSON.stringify(clicks));
  }, [clicks]);
  
  const updateFeedback = feedbackType => {
    setClicks({
      ...clicks,
      [feedbackType]: clicks[feedbackType] + 1,
    });
    console.log(feedbackType);
    
  };
  
  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;

  const positive = Math.round((clicks.good/totalFeedback)*100);

  const resetUpdate = () => {
    setClicks(marks);
  };
  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetUpdate={resetUpdate}/>
      <Feedback positive ={positive} totalFeedback={totalFeedback} good={clicks.good} neutral={clicks.neutral} bad={clicks.bad}/>
    </>
  )
}

export default App
