import { useState } from 'react';
import React from 'react';

/* component to “remember” some information and display it */
export default function MyStateHandeling() {
    const [count, setCount] = useState(0);
  
    function handleClick() {
      setCount(count + 1);
    }
  
    return (
      <button onClick={handleClick}>
        Clicked {count} times
      </button>
    );
  }