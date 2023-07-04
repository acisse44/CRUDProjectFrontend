import React from "react";

function SingleCampusList(props) {
  const { campus } = props;
  const students = campus.students;

  return (
    <div className="single-campus-container">
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

          {students && students.length > 0 ? (
            <div className="students-list">
              <h2>Students</h2>
              <ul>
                {students.map((student) => (
                  <div key={student.id} className="student">
                    <div>
                      <img
                        src={student.imageUrl}
                        alt={student.firstName}
                        className="student-image"
                      />
                      <div className="student-name">
                        {student.firstName} {student.lastName}
                      </div>
                      <div className="student-email">{student.email}</div>
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