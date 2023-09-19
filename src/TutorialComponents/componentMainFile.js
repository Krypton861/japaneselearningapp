import React from 'react';
import MyComponent from './newComponent'; // Import your component
import MyDisplayData from './displayData'; // Import your component
import MyShoppingList from './listObjects';
import MyEventHandler from './eventHandler';
import MyStateHandeling from './stateHandling';

export default function ComponentMainFile() {
    return (
        <>
        <MyComponent />
        <MyDisplayData />
        <MyShoppingList />
        <MyEventHandler />
        <MyStateHandeling />
        </>
        
    );
}

