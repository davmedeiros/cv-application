import { useState } from 'react';

const EditWork = ({ job, setJob, toggleEdit }) => {
  const editedJob = structuredClone(job);

  const updateJob = (event) => {
    event.preventDefault();

    setJob({
      companyName: editedJob.companyName,
      position: editedJob.position,
      responsibilities: editedJob.responsibilities,
      entryDate: new Date(editedJob.entryDate),
      leaveDate: new Date(editedJob.leaveDate),
    });

    toggleEdit();
  };

  return (
    <form onSubmit={updateJob}>
      <label htmlFor="company-name">Company Name</label>
      <input
        type="text"
        name="company-name"
        id="company-name"
        defaultValue={editedJob.companyName}
        onChange={(event) => (editedJob.companyName = event.target.value)}
      />
      <label htmlFor="position">Position</label>
      <input
        type="text"
        name="position"
        id="position"
        defaultValue={editedJob.position}
        onChange={(event) => (editedJob.position = event.target.value)}
      />
      <label htmlFor="responsibilities">
        Responsibilities (separated by commas)
      </label>
      <input
        type="text"
        name="responsibilities"
        id="responsibilities"
        defaultValue={editedJob.responsibilities}
        onChange={(event) =>
          (editedJob.responsibilities = event.target.value.split(','))
        }
      />
      <label htmlFor="entry-date">Entry</label>
      <input
        type="date"
        name="entry-date"
        id="entry-date"
        defaultValue={editedJob.entryDate}
        onChange={(event) => (editedJob.entryDate = event.target.value)}
      />
      <label htmlFor="leave-date">Leave</label>
      <input
        type="date"
        name="leave-date"
        id="leave-date"
        defaultValue={editedJob.leaveDate}
        onChange={(event) => (editedJob.leaveDate = event.target.value)}
      />
      <button type="submit" className="save">
        Save
      </button>
    </form>
  );
};

const ShowWork = ({ job }) => {
  return (
    <>
      <p>{job.companyName}</p>
      <p>{job.position}</p>
      <p>{job.responsibilities.join(', ')}</p>
      <p>{job.entryDate.toDateString()}</p>
      <p>{job.leaveDate.toDateString()}</p>
    </>
  );
};

const Work = () => {
  const [job, setJob] = useState({
    companyName: 'Ministry of Magic',
    position: 'Janitor',
    responsibilities: [
      'Wash the floor',
      'Fix the faucets',
      'Give bad looks to people',
    ],
    entryDate: new Date('1987-07-24'),
    leaveDate: new Date('2023-02-16'),
  });

  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="education">
      <button type="button" className="toggle-edit" onClick={toggleEdit}>
        {isEditing ? 'Cancel' : 'Edit'}
      </button>
      <h2>Work</h2>
      {isEditing ? (
        <EditWork job={job} setJob={setJob} toggleEdit={toggleEdit} />
      ) : (
        <ShowWork job={job} />
      )}
    </div>
  );
};

export default Work;
