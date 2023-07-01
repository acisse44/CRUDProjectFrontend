import React from "react";

function SingleStudentList(props) {
  const { student } = props;
  const campus = student.campus;

  return (
    <div className="single-student-container">
      {!student ? (
        <div>
          <div>Empty</div>
          <div>No student</div>
        </div>
      ) : (
        <div>
          <div id="singleStudent" key={student.id}>
            <img src={student.imageUrl} alt={student.firstName} id="singleStudentImage" />
            <div>
              {student.firstName} {student.lastName}
            </div>
            <div>{student.gpa}</div>
            <div>{student.email}</div>
          </div>

          {campus ? (
            <h2>Campus</h2>
          ) : (
            <div>No campus</div>
          )}

          {campus && (
            <div className="studentCampus">
              <div id="studentCampus" key={campus.id}>
                <img
                  src={campus.imageUrl}
                  alt={campus.Name}
                  id="studentCampusImage"
                />
                <div>{campus.description}</div>
                <div>{campus.address}</div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SingleStudentList;