import React from "react";
import'./style.css';
function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={() => props.onDelete(props.id)}>Delete</button>
    </div>
  );
}

export default Note;
