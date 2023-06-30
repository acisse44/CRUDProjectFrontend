import React from "react";

function CampusesList(props) {
    console.log("PROPS", props.list);
    return (  
        <div>
            {props.list.map((item) => {
                return <div key={item.id}>{item.id} {item.name} {item.imageUrl} {item.description} {item.address}</div>
            })}
        </div>
    );
}

export default CampusesList;