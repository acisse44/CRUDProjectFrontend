import React from "react";

function SingleCampusList(props) {
  const { campus } = props;
  console.log("Student PROPS", campus);
  return (  
    <div>
      <div key={campus.id}>
        <img src={campus.imageUrl} alt={campus.Name}/>
        <div>{campus.Name}</div>
        <div>{campus.email}</div>
        <div>{campus.description}</div>

        <h1>I added stuff here</h1>

      </div>
    </div>
  );
}
