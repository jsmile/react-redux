// Import the React and ReactDOM libraries.
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() { return 'Click on me'; }

// Create a react component. 
// const App = function() 
// {
//   return <div>Hi, there!</div>;
// }
const App = () => 
{
  const labelText = 'Enter your name : ';
  const buttonStyle = { backgroundColor: 'orange', color: 'dark-gray' };
  const buttonText1 = 'Click me 1 !, ';             // javascript String
  const buttonText2 = { text: 'Click me 2 !, ' };   // javascript object
  const buttonText3 = [ 'Hi', 'there, '];           // javascript array
  const buttonText4 = [ 123, 456 ];                 // javascript array
  

  // Objects are not valid as a React child
  // but objects are valid as an attribute
  return (
    <div>
      <label className="label" htmlFor="name">{labelText}</label>
      <input id="name" type="text" />
      <button style={buttonStyle}>    {/* as an attribute : object is O.K. */}
        {getButtonText()}
        {buttonText1}
        {buttonText2.text}            {/* as an React child : not object */}
        {buttonText3}
        {buttonText4}
      </button>
    </div>
  );
  // classical expression of html
  // return <div>
  //   <label class="label" for="name">Enter you name</label>
  //   <input id="name" type="text" />
  //   <button style="background-color: orange; color: white">submit</button>
  //   <button style={{ backgroundColor: 'orange', color: 'white' }}>submit</button>
  // </div>;
};  // end of App

// Take the react component and show it on the screen.
ReactDOM.render( <App />, document.querySelector( '#root' ) );