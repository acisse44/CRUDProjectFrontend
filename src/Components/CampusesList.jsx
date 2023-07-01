import React from "react";

function CampusesList(props) {
  const { list } = props;

  return (
    <div>
      {list.length === 0 ? (
        <div>
          <div>Empty</div>
          <div>No campuses</div>
        </div>
      ) : (
        <div>
          {list.map((item) => (
            <div key={item.id} id="campus">
              <img src={item.imageUrl} alt={item.Name} id="campusImage" />
              <div>{item.description}</div>
              <div>{item.address}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CampusesList;