import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";


const App = () => 
{
  return (
    <div className="ui container comments">
      <CommentDetail 
        author="Sam" 
        date="Today at 6:00 A.M" 
        text="Nice blog test !" 
        avatar={faker.image.avatar()}
      />
      <CommentDetail 
        author="David" 
        date="Today at 6:00 P.M" 
        text="Good morning !"  
        avatar={faker.image.avatar()}   
      />
      <CommentDetail 
        author="Jane" 
        date="Yesterday at 6:00 A.M" 
        text="Have a good time !"  
        avatar={faker.image.avatar()}     
      />
    </div>
  );
};

ReactDOM.render( <App />, document.querySelector( '#root' ) );