import React from 'react';
import data from './profile.json';

const RenderList = () => {
  const { mentor, students } = data;

  const Mentor = () => {
    if(mentor){
      return <React.Fragment>
        <div>{mentor.name}</div>
        <div>{mentor.description}</div>
      </React.Fragment>
    }
  }

  const StudentList = () => {
    if(students){
      return students.map((student) => {
        return <React.Fragment>
          <div>{student.name}</div>
          <div>{student.description}</div>
        </React.Fragment>
      })
    }
  }

  return (
    <React.Fragment>
      <Mentor />
      <StudentList />
    </React.Fragment>
  )
}

export default RenderList;