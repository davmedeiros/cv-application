import { useState } from 'react';

const EditEducation = ({ course, setCourse, toggleEdit }) => {
  const editedCourse = structuredClone(course);

  const updateCourse = (event) => {
    event.preventDefault();

    setCourse({
      schoolName: editedCourse.schoolName,
      study: editedCourse.study,
      date: new Date(editedCourse.date),
    });

    toggleEdit();
  };

  return (
    <form onSubmit={updateCourse}>
      <label htmlFor="school-name">schoolName</label>
      <input
        type="text"
        name="school-name"
        id="schoolName"
        defaultValue={editedCourse.schoolName}
        onChange={(event) => (editedCourse.schoolName = event.target.value)}
      />
      <label htmlFor="study">Email</label>
      <input
        type="text"
        name="study"
        id="study"
        defaultValue={editedCourse.study}
        onChange={(event) => (editedCourse.study = event.target.value)}
      />
      <label htmlFor="date">Phone</label>
      <input
        type="date"
        name="date"
        id="date"
        defaultValue={editedCourse.date}
        onChange={(event) => (editedCourse.date = event.target.value)}
      />
      <button type="submit" className="save">
        Save
      </button>
    </form>
  );
};

const ShowEducation = ({ course }) => {
  return (
    <>
      <p>{course.schoolName}</p>
      <p>{course.study}</p>
      <p>{course.date.toDateString()}</p>
    </>
  );
};

const Education = () => {
  const [course, setCourse] = useState({
    schoolName: 'Hogwarts',
    study: 'Magic',
    date: new Date(),
  });

  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="education">
      <h2>Education</h2>
      <button type="button" className="toggle-edit" onClick={toggleEdit}>
        {isEditing ? 'Cancel' : 'Edit'}
      </button>
      {isEditing ? (
        <EditEducation
          course={course}
          setCourse={setCourse}
          toggleEdit={toggleEdit}
        />
      ) : (
        <ShowEducation course={course} />
      )}
    </div>
  );
};

export default Education;
