import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {  deleteAStudentThunk}  from "../Redux/students/students.actions"
import { fetchSingleCampusThunk } from "../Redux/campuses/campuses.actions";


function SingleCampusList(props) {
  const { campus } = props;
  const students = campus.students;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [deletedStudentId, setDeletedStudentId] = useState(null);

  const handleDelete = (id) => {
    dispatch(deleteAStudentThunk(id));
    setDeletedStudentId(id);
  };

  const handleEdit = (studentId) => {
    navigate(`/students/${studentId}/edit`);
  };

  useEffect(() => {
    fetchSingleCampusThunk();
  }, [deletedStudentId]);

  return (
    <div className="campus-container">
      { !campus && campus.length === 0 ? (
        <div>
          <div>Empty</div>
          <div>No campus</div>
        </div>
      ) : (
        <div>
          <div className="campus" key={campus.id}>
          <div>
            <img src={campus.imageUrl} alt={campus.Name} className="campus-image" style={{ width: '350px', height: '250px' }} />
          </div>
          <div>
            <h2 className="campus-name" style ={{fontSize: '50px', marginRight: '45px', marginBottom: '135px', fontFamily: 'Lucida Sans'}}>{campus.name}</h2>
          <div className="campus-address" style={{ fontSize: '25px',marginBotton: '100px', marginLeft: '60px' }}>{campus.address}</div>
          </div>
          </div>

      { students && students.length > 0 ? (
        <div>
          <h2>Students</h2>
          <div id="student-container">
            {students.map((student) => (
              <div key={student.id} id="student">
                <img src={student.imageUrl} alt={student.firstName} id="studentImage" />
                <h1 id="student-name">
                <Link to={`/students/${student.id}`}>{student.firstName} {student.lastName}</Link>
                </h1>
                <button className="button-edit button-size" onClick={() => handleEdit(student.id)}>Edit</button>
                <button className="student-button-delete button-size" onClick={() => handleDelete(student.id)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
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