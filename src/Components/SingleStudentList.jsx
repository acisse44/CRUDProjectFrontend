import React from "react";
import { Link } from 'react-router-dom';

function SingleStudentList(props) {
  const { student, handleDelete } = props;
  const campus = student.campus;
  const studentsCount = (campus) => {
    return campus.students && campus.students.length > 0 ? campus.students.length : 0;
  }

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
             <div key={campus.id} id="campus">
             {campus.imageUrl && <img src={campus.imageUrl} alt={campus.name} id="campusImage" />}
             <h1 id="campus-name">
               <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
             </h1>
             <p id="campus-students">{studentsCount(campus)} students</p>
             <button className="button-edit">Edit</button>
             <button className="button-delete" onClick={() => handleDelete(campus.id)}>
               Delete
             </button>
           </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SingleStudentList;