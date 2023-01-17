import React from "react";
import data from "./profile.json";
import styles from "./RenderList.module.css";

const RenderList = () => {
  const { mentor, students } = data;

  const Mentor = () => {
    if (mentor) {
      return (
        <React.Fragment>
          <h2 className={styles.heading}>Mentor</h2>
          <div className={styles.mainClass}>
            <div>
              <img
                className={styles.imageStyle}
                src="https://avatars.githubusercontent.com/u/42451210?v=4"
                alt="logo"
              />
            </div>
            <div className={styles.mentorClass}>
              <div className={styles.mentorName}>{mentor.name}</div>
              <div className={styles.mentorDes}>{mentor.description}</div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  };

  const StudentList = () => {
    if (students) {
      return students.map((student) => {
        return (
          <React.Fragment>
            <div className={styles.studentClass}>
              <div className={styles.studentName}>{student.name}</div>
              <div className={styles.studentDes}>{student.description}</div>
            </div>
          </React.Fragment>
        );
      });
    }
  };

  return (
    <React.Fragment>
      <Mentor />
      <h2 className={styles.heading}>Students</h2>
      <StudentList className={styles.studentStyle} />
    </React.Fragment>
  );
};

export default RenderList;
