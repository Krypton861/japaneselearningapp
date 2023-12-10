import { Button } from '@mui/material';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import CreateNewCardComponent from './CreateNewCardComponent';
import InputComponent from '../LoginPage/InputComponent';
import { QuestionDataInterface } from '../Quiz/QuizQuestionData';
import { setNewDeck } from '../../Database/setNewDeck';
import { useUserContext } from '../../Contexts/UserContext';
import { DeckDataInterface } from '../../Contexts/DecksContext';


const CreateNewDeckComponent: React.FC = () => {
  const [deckName, setDeckName] = useState<string>("")
  const {userData, setUserData } = useUserContext();
  const [questionData, setQuestionData] = useState<QuestionDataInterface[]>([
    {
      CorrectAnswer: "",
      QuestionText: "",
      WrongAnswerOptions: [""],
    },
  ]);

  const handleUpdateQuestion = (newQuestionData: QuestionDataInterface, updateIndex: number) => {
    var updatedQuestionData = questionData.map((question, index) => {
      
      if (index === updateIndex) {
        // Update the second element
        return newQuestionData;
      }

      // Keep other elements unchanged
      return question;
    });

    setQuestionData(updatedQuestionData);
  }

  const addAnotherCard = () => {
    setQuestionData((questionData) => [...questionData, {
      CorrectAnswer: "1",
      QuestionText: "",
      WrongAnswerOptions: [""],
    }]);

  };

  const createNewDeck = () => {
    //TODO: Validate Data before creating new DEck
    if(userData.userName == null || userData.userId == null){
      console.error("YOu have to log in to create a new Deck");
      return;
    }

    if(deckName === null || deckName === "")
      return;

    var newDeckInfo: DeckDataInterface = {
      id:null,
      questionData:questionData,
      baseData:{
        name: deckName,
        description: "DescriptionText",
        level: "LevelText",
    
        authorName: userData.userName,
        authorID:userData.userId,
        numOfCards: questionData.length,
        creationDate: new Date(Date.now()),   
      }
    }

    setNewDeck(newDeckInfo).then(()=>{
      console.log("Successfully Created Quiz. Resetting Data");
      //TODO: Create a seperate Button for resetting the Quiz
      setQuestionData([
        {
          CorrectAnswer: "",
          QuestionText: "",
          WrongAnswerOptions: [""],
        }
      ])
      setDeckName("");
    })

    /*
    questionData.forEach(q => {
      console.log(q.QuestionText + " | " + q.CorrectAnswer + " | " + q.WrongAnswerOptions);
    });*/

    return;
  };

  //#region CSS
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    overflowX: 'scroll', // Use 'scroll' instead of 'auto'
    whiteSpace: 'nowrap',
  };


  const submitStyle: React.CSSProperties = {
    width: '100%',
    padding: '10px',
    boxSizing: 'border-box',

    backgroundColor: '#4CAF50', // Button background color
    color: 'white', // Button text color
    border: 'none', // Remove button border
    cursor: 'pointer', // Add pointer cursor on hover  };
    //TODO: Der Submit Button ist nicht richtig gant oben...
  }
    const disabledStyle: React.CSSProperties = {
    backgroundColor: '#a60c0c', // Change the color when disabled
    cursor: 'not-allowed', // Change the cursor when disabled
  };
  //#endregion CSS

  const handleDeckNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDeckName(e.target.value);
  };
   

  return (
    <div>
      <div style={{ position: 'relative' }}>
      Create new Deck

      <label>
        Name:
        <input type="text" name="deckName" value={deckName} onChange={handleDeckNameChange}/>
      </label>

        <button onClick={createNewDeck} 
        style={{ ...submitStyle, ...(userData.email === null ? disabledStyle : {}) }} 
        disabled={userData.email === null}>Create Deck</button>
      </div>

      <div style={containerStyle}>
        {questionData.map((q, index) => (
          <CreateNewCardComponent
            key={index}
            onSave={(data) => handleUpdateQuestion(data, index)}
            addAnotherCard={addAnotherCard} />
        ))}
        <button onClick={addAnotherCard}>Add Question</button>
      </div>

    </div>
  );
};

export default CreateNewDeckComponent;

