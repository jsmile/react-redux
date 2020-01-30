// Import the React and ReactDOM libraries.
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component. 
// const App = function() 
// {
//   return <div>Hi, there!</div>;
// }
const App = () => 
{
  return (
    <div>
      <label class="label" for="name">Enter you name</label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'orange', color: 'white' }}>submit</button>
    </div>
  );
  // classical expression of html
  // return <div>
  //   <label class="label" for="name">Enter you name</label>
  //   <input id="name" type="text" />
  //   <button style="background-color: orange; color: white">submit</button>
  //   <button style={{ backgroundColor: 'orange', color: 'white' }}>submit</button>
  // </div>;
};

// Take the react component and show it on the screen.
ReactDOM.render( <App />, document.querySelector( '#root' ) );