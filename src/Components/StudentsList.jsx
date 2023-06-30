import React from "react";

function StudentsList(props) {
    console.log("PROPS", props.list);
    return (  
        <div>
          {props.list.map((item) => (
            <div key={item.id}>
              <img src={item.imageUrl} alt={item.firstName} style={{ width: "200px", height: "200px" }}/>
              <div>{item.firstName} {item.lastName}</div>
              <div>{item.email}</div>
              {/* <div>{item.address}</div> */}
            </div>
          ))}
        </div>
      );
}

export default StudentsList;