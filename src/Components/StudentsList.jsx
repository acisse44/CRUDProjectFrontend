import React from "react";
import "../App/App.css";

function StudentsList(props) {
    console.log("PROPS", props.list);
    return (  
        <div>
          {props.list.map((item) => (
            <div id="student" key={item.id}>
              <img src={item.imageUrl} alt={item.firstName} id="studentImage"/>
              <div>{item.firstName} {item.lastName}</div>
              <div>{item.email}</div>
            </div>
          ))}
        </div>
      );
}

export default StudentsList;