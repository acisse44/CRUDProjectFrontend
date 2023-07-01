import React from "react";

function SingleStudentList(props) {
  const { student } = props;

  return (
    <div>
      {Object.keys(student).length === 0 ? (
        <div>
          <div>Empty</div>
          <div>No student</div>
        </div>
      ) : (
        <div>
          <div id="student" key={student.id}>
            <img src={student.imageUrl} alt={student.firstName} id="studentImage" />
            <div>{student.firstName} {student.lastName}</div>
            <div>{student.email}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleStudentList;