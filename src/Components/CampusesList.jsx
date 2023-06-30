import React from "react";

function CampusesList(props) {
    console.log("PROPS", props.list);
    return (  
        <div>
          {props.list.map((item) => (
            <div key={item.id}>
              <img src={item.imageUrl} alt={item.Name} style={{ width: "200px", height: "200px" }}/>
              <div>{item.description}</div>
              <div>{item.address}</div>
            </div>
          ))}
        </div>
      );
}

export default CampusesList;