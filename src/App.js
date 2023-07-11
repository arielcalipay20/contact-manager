import './App.css';
import { useState } from 'react';

function ContactManager(props) {
  const [contacts, setContacts] = useState(props.data);
  const addPerson = (name) => {
    setContacts([...contacts, name]);
  }
  return (
    <>
      <AddPersonForm handleSubmit={addPerson} />
      <PeopleList data={contacts} />
    </>
  );
}

const PeopleList = (props) => {
  const arr = props.data;
  const listItems = arr.map((val, index) => {
    return <li key={index}>{val}</li>
  })
  return (
    <ul>{listItems}</ul>
  );
}

const AddPersonForm = (props) => {
  const [person, setPerson] = useState('');

  const handleChange = (e) => {
    setPerson(e.target.value);
  }

  const handleSubmit = (e) => {
    if (person !== '') {
      props.handleSubmit(person);
      setPerson('');
    }
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Add Contact' value={person} onChange={handleChange} />
      <button type='submit'>Add</button>
    </form>
  );
}


export default ContactManager;
