import React, { useRef, useState } from 'react';
import SingleDeckComponent from './SingleDeckComponent';
import InfoboxComponent from './InfoboxComponent';
import { DeckDataInterface } from '../../Contexts/DecksContext';
import { Link, useNavigate } from 'react-router-dom';

interface OverviewDeckComponentsInterface {
  quizDecks: DeckDataInterface[];
}

//quizDecks are all Decks that are in this Overview Collection
const OverviewDecksUI: React.FC<OverviewDeckComponentsInterface> = ({quizDecks}) => {
  const [selectedDeck, setSelectedDeck] = useState<DeckDataInterface | null>(null); //The current Selected Deck

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    overflowX: 'scroll', // Use 'scroll' instead of 'auto'
    whiteSpace: 'nowrap',
  };

  const handleDeckClick = (deck: DeckDataInterface) => {
    setSelectedDeck(null);
    setSelectedDeck(deck);
  };

  const handleCloseInfobox = () => {
    setSelectedDeck(null);
  };

  const navigate = useNavigate(); // Ensure this is inside a React function component

  const handlePlayQuiz = () => {
    //THe Variables are there to pass Data to another Component via: import { useLocation } from "react-router-dom";
    navigate('/quizz', { state: { deckID: selectedDeck?.id, authorID: selectedDeck?.baseData.authorName } });
    //console.log("Navigating to QUIZ");
  };

  //To be able to scroll vertically within the Element
  const containerRef = useRef<HTMLDivElement>(null);
  const handleWheelScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += event.deltaY;
      // Adjust the scroll speed by changing the value added to scrollLeft
    }
  };
  
  return (
    <div>
      <div id="quizDeckContainer" style={containerStyle} ref={containerRef} onWheel={handleWheelScroll}>
        {quizDecks.map((deck: DeckDataInterface, index: React.Key | null | undefined) => (
          <SingleDeckComponent
            key={index}
            DeckData = {deck}
            onClick={() => handleDeckClick(deck)}
          />
        ))}
      </div>

      {selectedDeck && (
        
        <InfoboxComponent
          DeckData = {selectedDeck}
          onClose={handleCloseInfobox}
          onPlay={handlePlayQuiz}
        />       
      )}
    </div>
  );
};

export default OverviewDecksUI;

/*
<div>
      <div id="quizDeckContainer" style={containerStyle}>
        {quizDecks.map((deck, index) => (
          <SingleDeckComponent
            key={index}
            {...deck}
            onClick={() => handleDeckClick(deck)}
          />
        ))}
      </div>

      {selectedDeck && (
        <InfoboxComponent
          {...selectedDeck}
          onClose={handleCloseInfobox}
        />       
      )}
    </div>
*/