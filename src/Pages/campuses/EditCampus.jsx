import React from 'react';
import EditCampusForm from '../../Components/EditCampusForm';
import { useParams } from 'react-router-dom';

function EditCampus() {
    const campusId = useParams();
    return (
      <div>
        <EditCampusForm campusId={campusId} />
      </div>
    );
}

export default EditCampus;