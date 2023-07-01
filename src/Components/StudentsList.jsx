import React from "react";
import "../App/App.css";

function StudentsList(props) {
  const { list } = props;

  return (
    <div>
      {list.length === 0 ? (
        <div>
          <div>Empty</div>
          <div>No students</div>
        </div>
      ) : (
        <div>
          {list.map((item) => (
            <div id="student" key={item.id}>
              <img src={item.imageUrl} alt={item.firstName} id="studentImage" />
              <div>{item.firstName} {item.lastName}</div>
              <div>{item.email}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default StudentsList;