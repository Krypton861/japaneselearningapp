// QuizDecksContext.tsx
import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { getTestQuizDeckData } from './GetDecksFromDB';
import getFullDeckList from '../Database/getFullDeckList';
//import { Timestamp } from 'firebase/firestore';
import { QuestionDataInterface } from '../Components/Quiz/QuizQuestionData';

var testMode = false;

export interface DeckDataInterface{
  id: string|null
  baseData: baseDeckDataInterface //The Stammdaten/Basic Data
  questionData:QuestionDataInterface[]
}

export interface baseDeckDataInterface{
  name: string,
  description: string,
  level: string,

  authorName: string,
  authorID:string,
  numOfCards: number,
  creationDate: Date,
}

interface QuizDecksContextProps {
  quizDecks: DeckDataInterface[];
  addQuizDeck: (deck: DeckDataInterface) => void;
  isQuizDeckDataLoaded: boolean;
}

const QuizDecksContext = createContext<QuizDecksContextProps | undefined>(undefined);

//Wgebever any Component is loaded that required QuizDeck Lists -> HERE We do the DB Request and get all the Decks
const useQuizDecksContext = () => {
  const context = useContext(QuizDecksContext);
  if (!context) {
    throw new Error('useQuizDecksContext must be used within a QuizDecksProvider');
  }
  return context;
};

export { QuizDecksContext, useQuizDecksContext };


// QuizDecksProvider.tsx
interface QuizDecksProviderProps {
  children: ReactNode;
}

const QuizDecksProvider: React.FC<QuizDecksProviderProps> = ({ children }) => {
  const [quizDecks, setQuizDecks] = useState<DeckDataInterface[]>([]);
  const [isQuizDeckDataLoaded, setIsQuizDeckDataLoaded] = useState(false);
  
  useEffect(() => {
    //TODO: Implement a debug/Test Mode/ FLick / State
    if (!isQuizDeckDataLoaded) {
      // Fetch data when the component mounts for the first time
      if(testMode){
        getTestQuizDeckData().then((data) => {
          setQuizDecks(data);
          setIsQuizDeckDataLoaded(true);
        });
      }
      else{
        getFullDeckList().then((data) => {
          if(data !== null){
            //console.log(data);
            setQuizDecks(data);
            setIsQuizDeckDataLoaded(true);
          }
          else{
            console.error("Error while assinging Decks Data Context");
          }
        });
      }
    
    }
  }, [isQuizDeckDataLoaded]);

  const addQuizDeck = (deck: DeckDataInterface) => {
    setQuizDecks([...quizDecks, deck]);
  };

  const contextValue: QuizDecksContextProps = {
    quizDecks,
    addQuizDeck,
    isQuizDeckDataLoaded,
  };

  return (
    <QuizDecksContext.Provider value={contextValue}>
      {children}
    </QuizDecksContext.Provider>
  );
};

export default QuizDecksProvider;
