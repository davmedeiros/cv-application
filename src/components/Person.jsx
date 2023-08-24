import { useState } from 'react';

const EditPersonal = ({ person }) => {
  return (
    <>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" value={person.name} />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" value={person.email} />
      <label htmlFor="phone">Phone</label>
      <input type="number" name="phone" id="phone" value={person.phone} />
      <button type="button" className="save">
        Save
      </button>
    </>
  );
};

const ShowPersonal = ({ person }) => {
  return (
    <>
      <p>{person.name}</p>
      <p>{person.email}</p>
      <p>{person.phone}</p>
      <button type="button" className="edit">
        Edit
      </button>
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

  const info = isEditing ? (
    <EditPersonal person={person} />
  ) : (
    <ShowPersonal person={person} />
  );

  return (
    <div className="personal">
      <h2>Personal</h2>
      {info}
    </div>
  );
};

export default Personal;
