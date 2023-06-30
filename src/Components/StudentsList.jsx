import React from "react";

function StudentsList(props) {
    console.log("PROPS", props.list);
    return (  
        <div>
            {props.list.map((item) => {
                return <div key={item.id}>{item.id} {item.firstName} {item.lastName} {item.email}</div>
            })}
        </div>
    );
}

export default StudentsList;