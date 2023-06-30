import React from "react";

function SingleStudentList(props) {
  const { student } = props;
  if (!Object.keys(student).length) {
    return (
        <div>
          <div>Empty</div>
          <div>No student</div>
        </div>
    );
  }

  return (  
    <div>
      <div key={student.id} id="student">
        <img src={student.imageUrl} alt={student.firstName} id="studentImage"/>
        <div>{student.firstName} {student.lastName}</div>
        <div>{student.email}</div>
      </div>
    </div>
  );
}

export default SingleStudentList;