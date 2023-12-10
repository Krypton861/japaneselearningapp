import React from 'react';
import { DeckDataInterface } from '../../Contexts/DecksContext';

interface SingleDeckProps {
  DeckData:DeckDataInterface;
  onClick: () => void;
}

const SingleDeckComponent: React.FC<SingleDeckProps> = ({ DeckData, onClick }) => {
    //#region CSS
    const buttonStyle: React.CSSProperties = {
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '10px',
        width: 'auto', // Adjust width as needed
        margin: '10px',
        display: 'inline-block',
      };
    
      const headingStyle: React.CSSProperties = {
        margin: '0',
        fontSize: '16px',
      };
    
      const paragraphStyle: React.CSSProperties = {
        margin: '5px 0',
        fontSize: '14px',
      };

      //#endregion CSS
    
      const handleClick = () => {
        onClick();
      };
      
      return (
        <button style={buttonStyle} onClick={handleClick}>
            <h2 style={headingStyle}>{DeckData.baseData.name}</h2>
            <p style={paragraphStyle}>From: {DeckData.baseData.authorName}</p>
            <p style={paragraphStyle}>{DeckData.baseData.numOfCards} Cards</p>
            <p style={paragraphStyle}>Level: {DeckData.baseData.level}</p>
        </button>
      );
    
};

export default SingleDeckComponent;
