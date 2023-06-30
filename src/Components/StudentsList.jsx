import React from "react";

function StudentsList(props) {
    return (  
        <div>
            {props.list.map((item) => {
                return <div>{item}</div>
            })}
        </div>
    );
}

export default StudentsList;