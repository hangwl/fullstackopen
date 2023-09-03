import React, { useState } from 'react';

// Filter component
const Filter = ({ searchQuery, handleSearchChange }) => {
  return (
    <div>
      Search <input value={searchQuery} onChange={handleSearchChange} />
    </div>
  )
}

// PersonForm component
const PersonForm = ({ newName, newNumber, handleNameChange, handleNumberChange, addPerson }) => {
  return (
    <div>
      <form onSubmit={addPerson}>
        <div>
          Name <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          Number <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

// Persons Component
const Persons = ({ persons }) => {
  return (
    <div>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>{person.id} {person.name} {person.number} </li>
          
        ))}
      </ul>
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`)
    } else {
      const newId = Math.max(...persons.map(person => person.id)) + 1
      const newPerson = { name: newName, number: newNumber, id: newId };
      setPersons([...persons, newPerson])
      setNewName('')
      setNewNumber('')
    }
  }

  const filteredPersons = persons.filter((person) => 
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchQuery={searchQuery} handleSearchChange={handleSearchChange} />
      <h3>New Contact</h3>
      <PersonForm 
        newName={newName} 
        newNumber={newNumber} 
        handleNameChange={handleNameChange} 
        handleNumberChange={handleNumberChange} 
        addPerson={addPerson} 
      />
      <h3>Contacts</h3>
      <Persons persons={filteredPersons} />
    </div>
  )
}

export default App