import React from "react";

function SingleCampusList(props) {
  const { campus } = props;
  if (!campus) {
    return (
        <div>
          <div>Empty</div>
          <div>No campus</div>
        </div>
    );
  }

  return (  
    <div>
      <div key={campus.id} id="campus">
        <img src={campus.imageUrl} alt={campus.Name} id="campusImage"/>
        <div>{campus.Name}</div>
        <div>{campus.address}</div>
        <div>{campus.email}</div>
        <div>{campus.description}</div>
      </div>
    </div>
  );
}

export default SingleCampusList;