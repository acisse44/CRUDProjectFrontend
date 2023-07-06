import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import {
  deleteAStudentThunk,
  fetchSingleStudent,
} from "../Redux/students/students.actions";
import "../CSS/SingleStudentList.css";

function SingleStudentList(props) {
  const { student } = props;
  const dispatch = useDispatch();
  const campus = student.campus;
  const navigate = useNavigate();
  const studentsCount = (campus) => {
    return campus.students && campus.students.length > 0
      ? campus.students.length
      : 0;
  };
  // console.log("STUDENTS", studentsCount(campus));

  const handleEdit = (id, option) => {
    if (option === 1) {
      navigate(`/students/${id}/edit`);
    } else {
      navigate(`/campuses/${id}/edit`);
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteAStudentThunk(id)).then(() =>
      dispatch(fetchSingleStudent(student.id))
    );
  };

  return (
    <div>
      {!student || !student.id ? (
        <div className="empty-list">
          <div>Empty</div>
          <div>No student</div>
        </div>
      ) : (
        <div>
          <div id="singleStudent" key={student.id} >
            <div>
              <img
                src={student.imageUrl}
                alt={student.firstName}
                id="singleStudentImage"
              />
            </div>
            <div>
              <h2
                id="full-name"
              >
                {student.firstName} {student.lastName}
              </h2>
              <div>
                <div
                  id="student-email"
                >
                  Email: {student.email}
                </div>
                <div
                  id="student-GPA"
                >
                  {" "}
                  GPA: {student.gpa}
                </div>
              </div>
              <button
                className="edit-button"
                onClick={() => handleEdit(student.id, 1)}
              >
                Edit
              </button>
              <button
                className="delete-button"
                onClick={() => handleDelete(student.id, 1)}
              >
                Delete
              </button>
            </div>
          </div>

          {campus ? <h2 id= "single-campus-heading">Campus</h2> : <div>No campus</div>}

          {campus && (
            <div key={campus.id} id="campus">
              {campus.imageUrl && (
                <img
                  src={campus.imageUrl}
                  alt={campus.name}
                  id="studentCampusImage"
                />
              )}
              <h1 id="campus-name">
                <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
              </h1>
              {/* <p id="campus-students">{studentsCount(campus)} students</p> */}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SingleStudentList;
