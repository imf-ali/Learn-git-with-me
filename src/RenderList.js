import React from "react";
import data from "./profile.json";
import styles from "./RenderList.module.css";

const RenderList = () => {
  const { mentor, students } = data;

  const Mentor = () => {
    if (mentor) {
      return (
        <React.Fragment>
          <div className={styles.mentorClass}>
            <div className={styles.mentorName}>{mentor.name}</div>
            <div className={styles.mentorDes}>{mentor.description}</div>
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
      <img
        className={styles.imageStyle}
        src="https://git-scm.com/images/logos/downloads/Git-Icon-Black.png"
        alt="logo"
      />
      <Mentor className={styles.mentorStyle} />
      <StudentList className={styles.studentStyle} />
    </React.Fragment>
  );
};

export default RenderList;
