import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { QuestionData, QuestionDataInterface } from '../Quiz/QuizQuestionData';

interface QuestionCreationProps {
  onSave: (data: QuestionDataInterface) => void;
  addAnotherCard : () => void;
}

const CreateNewCardComponent: React.FC<QuestionCreationProps> = ({ onSave, addAnotherCard }) => {  
  const [questionData, setQuestionData] = useState<QuestionDataInterface>({
    QuestionText: "",
    CorrectAnswer: "",
    WrongAnswerOptions: [""],
  });
  const [questionIsNotUsed, setQuestionIsNotUsed] = useState<boolean>(true)

  useEffect(() => {
    onSave(questionData);
  }, [questionData]);

  //Update the Element and Parent as soon as something new is Typed
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setQuestionData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
   
    //the first Time you write in it. Create a new Question Element
    if(questionIsNotUsed)
    {
      addAnotherCard();
      setQuestionIsNotUsed(false);
    }    
  };

  const innerComponentStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column', // Vertical stacking
    marginRight: '3px', // Add margin between inner components if needed
    border: '1px solid black', // Add border to the input
    padding: '2px',
    };

  const labelStyle: React.CSSProperties = {
    fontSize: '0.7em',
    margin: '3px 0',
    display: 'flex',
    alignItems: 'center', // Align items vertically
  };

  const inputStyle: React.CSSProperties = {
    flex: 1, // Take up remaining space
    marginLeft: '8px', // Add margin between label and input if needed
  };

  return (
    <div style={innerComponentStyle}>
      <label style={labelStyle}>
        Question:
        <input type="text" name="QuestionText" value={questionData.QuestionText} onChange={handleChange} style={inputStyle}/>
      </label>
      <label style={labelStyle}>
        Correct Answer:
        <input type="text" name="CorrectAnswer" value={questionData.CorrectAnswer} onChange={handleChange} style={inputStyle}/>
      </label>
      <label style={labelStyle}>
        Wrong Options:<br/>Use , to Seperate
        <input type="text" name="WrongAnswerOptions" value={questionData.WrongAnswerOptions} onChange={handleChange} style={inputStyle} />
      </label>
    </div>
  );
};

export default CreateNewCardComponent;