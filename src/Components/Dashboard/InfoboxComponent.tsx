import React from 'react';
import { DeckDataInterface } from '../../Contexts/DecksContext';

interface InfoboxProps {
    DeckData:DeckDataInterface;
    onClose: () => void;
    onPlay: () => void;
}

const InfoboxComponent: React.FC<InfoboxProps> = ({ DeckData, onClose, onPlay }) => {
    //#region CSS
    const infoboxStyle: React.CSSProperties = {
        padding: '16px',
        background: '#f0f8ff', // Light blue color
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',

        //Use for absolute Position On Top of it.
        /*position: 'fixed',
        top: '50%',
        left: '50%',        
        transform: 'translate(-50%, -50%)',
        width: '40%', // Set a fixed width
        height:'40%',
        */
    };

    const buttonStyle: React.CSSProperties = {
        width: '51%', // Adjust width as needed
        backgroundColor: '#fcba03',
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

    return (
        <div style={infoboxStyle}>
            <h2 style={headingStyle}> {DeckData.baseData.name}</h2>
            <p style={paragraphStyle}>Author: {DeckData.baseData.authorName}</p>
            <p style={paragraphStyle}>Number of Cards: {DeckData.baseData.numOfCards}</p>
            <p style={paragraphStyle}>Creation Date: {DeckData.baseData.creationDate.toString()}</p>
            <p style={paragraphStyle}>Level: {DeckData.baseData.level}</p>
            {/* Add more information as needed */}
            <button style={buttonStyle} onClick={onPlay}>Play Deck</button>
            <button style={buttonStyle} onClick={onClose}>Close</button>
        </div>
    );
};

export default InfoboxComponent;
