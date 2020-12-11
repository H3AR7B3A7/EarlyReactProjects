import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {books} from './books'
import Model from './Book'

function BookList() {
  return (
    <React.Fragment>
      <h1>Books</h1>
      <section className='booklist'>
        {books.map((book) => {
          return <Model key={book.id} {...book}/>
        })}
      </section>
    </React.Fragment>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))