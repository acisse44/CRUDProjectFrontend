import React from 'react';
import EditStudentForm from '../../Components/EditStudentForm'
import { useParams } from 'react-router-dom';

function EditStudent() {
    const studentId = useParams();
    return (
      <div>
        <EditStudentForm studentId={studentId} />
      </div>
    );
}

export default EditStudent;