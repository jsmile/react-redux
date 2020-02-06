import React from "react";
import ReactDOM from "react-dom";
// import faker from "faker";

/*
    porps : object arguemnt to passed from parent's attributes to child 
*/
const CommentDetail = ( props ) => 
{
  return (
    <div className="comment">
        <a className="avatar" href="/">
          <img alt="avatar" src={props.avatar}/>
        </a>
        <div className="content">
          <a className="author" href="/">{props.author}</a>
          <div className="metadata">
            <span className="date">{props.date}</span>
          </div>
          <div className="text">{props.text}</div>
        </div>
      </div>
  );
}

export default CommentDetail;