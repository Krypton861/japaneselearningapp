import React from 'react';

function MyComponent() {
    return (
        /* Empty Wrapper good because only one element can be exportet at a time*/
        <>
            <button>I'm a button</button>
            <div>Hello Mom</div>
        </>
        
    );
}
/*
Class beispiel, wenn man mal einen Konstruktor braucht oder sowas
class MyComponentClass extends React.Component {
    render() {
      return <MyComponent {...this.props} />;
    }
  }
*/
export default MyComponent;
