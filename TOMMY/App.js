import React, { useState } from "react"
import Filter from './components/Filter'
import PersonForm from "./components/PersonForm";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [showNotes, setShowNotes] = useState("");

  const addName = (event) => {
    event.preventDefault();
    const noteObject = {
      name: newName,
      number: newNumber
    };
    persons.map((item) => item.name).includes(newName)
      ? window.alert(`${newName} is already added to phonebook`)
      : setPersons(persons.concat(noteObject));
    setNewName("");
    setNewNumber("");
  };

  const handleName = (event) => {
    setNewName(event.target.value);
  };

  const handleNumber = (event) => {
    setNewNumber(event.target.numval);
    console.log(event.target.numval)
  };

  const handleShowNotes = (event) => {
    setShowNotes(event.target.value.toLowerCase());
  };

  const indexList = (showNotes) => {
    const arr = [...persons].map((person) => person.name.toLowerCase());
    const indices = [];
    arr.forEach((item, index) => {
      if (item.indexOf(showNotes) >= 0) {
        indices.push(index);
      }
    });
    return indices
  };

  const notesToShow = showNotes
    ? indexList(showNotes).map(index => persons[index]) 
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      
      <Filter value={showNotes} onChange={handleShowNotes}/>
      
      <h2>add a new</h2>
      
      <PersonForm
        onSubmit={addName}
        value={newName}
        onChange={handleName}
        numval={newNumber}
        numberhandler={handleNumber} 
      />

      <h2>Numbers</h2>
      <ul>
        {notesToShow.map((item, index) => (
          <li key={index}>
            {item.name} {item.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
