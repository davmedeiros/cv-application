import { useState } from 'react';

const EditPersonal = ({ person, setPerson, toggleEdit }) => {
  const editedPerson = structuredClone(person);

  const updatePerson = (event) => {
    event.preventDefault();

    setPerson({
      name: editedPerson.name,
      email: editedPerson.email,
      phone: editedPerson.phone,
    });

    toggleEdit();
  };

  return (
    <form onSubmit={updatePerson}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        defaultValue={editedPerson.name}
        onChange={(event) => (editedPerson.name = event.target.value)}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        defaultValue={editedPerson.email}
        onChange={(event) => (editedPerson.email = event.target.value)}
      />
      <label htmlFor="phone">Phone</label>
      <input
        type="tel"
        name="phone"
        id="phone"
        defaultValue={editedPerson.phone}
        onChange={(event) => (editedPerson.phone = event.target.value)}
      />
      <button type="submit" className="save">
        Save
      </button>
    </form>
  );
};

const ShowPersonal = ({ person }) => {
  return (
    <>
      <p>{person.name}</p>
      <p>{person.email}</p>
      <p>{person.phone}</p>
    </>
  );
};

const Personal = () => {
  const [person, setPerson] = useState({
    name: 'John Doe',
    email: 'johndoe@email.com',
    phone: '555-555-5555',
  });

  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="personal">
      <h2>Personal</h2>
      <button type="button" className="toggle-edit" onClick={toggleEdit}>
        {isEditing ? 'Cancel' : 'Edit'}
      </button>
      {isEditing ? (
        <EditPersonal
          person={person}
          setPerson={setPerson}
          toggleEdit={toggleEdit}
        />
      ) : (
        <ShowPersonal person={person} />
      )}
    </div>
  );
};

export default Personal;
