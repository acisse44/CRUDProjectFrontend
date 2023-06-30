import React from "react";

function SingleStudentList(props) {
  const { student } = props;
  console.log("Student PROPS", student);
  return (  
    <div>
      <div key={student.id}>
        <img src={student.imageUrl} alt={student.firstName} style={{ width: "200px", height: "200px" }}/>
        <div>{student.firstName} {student.lastName}</div>
        <div>{student.email}</div>
      </div>
    </div>
  );
}

export default SingleStudentList;