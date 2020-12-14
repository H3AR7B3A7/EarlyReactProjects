import { useState, useEffect } from 'react'

const getListOfContacts = () => {
  let people = localStorage.getItem('people')
  if (people) {
    return JSON.parse(localStorage.getItem('people'))
  } else {
    return []
  }
}

function App() {
  const [person, setPerson] = useState({ firstName: '', email: '', age: '' })
  const [people, setPeople] = useState(getListOfContacts())
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setPerson({ ...person, [name]: value })
  };

  // Local storage in browser
  useEffect(() => {
    localStorage.setItem('people', JSON.stringify(people))
  }, [people])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (person.firstName && person.email && person.age) {
      const newPerson = { ...person, id: new Date().getTime().toString() }
      setPeople([...people, newPerson])
      setPerson({ firstName: '', email: '', age: '' })
    }
  }
  return (
    <section className='container'>
      <article className='form'>
        <form>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type='number'
              id='age'
              name='age'
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type='submit' className='btn' onClick={handleSubmit}>
            add person
          </button>
        </form>
      </article>
      <article>
        {people.map((person) => {
          const { id, firstName, email, age } = person
          return (
            <div key={id} className='item'>
              <h4>{firstName}</h4>
              <p>{email}</p>
              <p>{age}</p>
            </div>
          )
        })}
      </article>
    </section>
  )
}

export default App
