import React from "react";

function SingleCampusList(props) {
  const { campus } = props;
  const students = campus.students;
  console.log("CAMPUS:", campus);
  console.log("STUDENT:", students);

  return (
    <div>
      { !campus ? (
        <div>
          <div>Empty</div>
          <div>No campus</div>
        </div>
      ) : (
        <div>
          <div id="campus" key={campus.id}>
            <img src={campus.imageUrl} alt={campus.Name} id="campusImage" />
            <div>{campus.Name}</div>
            <div>{campus.address}</div>
            <div>{campus.email}</div>
            <div>{campus.description}</div>
          </div>

          {students && students.length > 0 ? (
            <div>
              <h2>Students</h2>
              <ul>
                {students.map((student) => (
                  <div>
                  <div id="student" key={student.id}>
                    <img src={student.imageUrl} alt={student.firstName} id="studentImage" />
                    <div>{student.firstName} {student.lastName}</div>
                    <div>{student.email}</div>
                  </div>
                </div>
                ))}
              </ul>
            </div>
          ) : (
            <div>No students</div>
          )}
        </div>
      )}
    </div>
  );
}

export default SingleCampusList;
