// List.jsx
import React from 'react';
import Card from './Card';
import './List.css';

function List({ students }) {
  return (
    <div role="list" className="list">
      {students.map(student => (
        <Card key={student.id} student={student} />
      ))}
    </div>
  );
}

export default List;
