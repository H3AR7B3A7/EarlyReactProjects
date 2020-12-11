import React from 'react'

const Book = ({ id, title, author, img, description }) => {
  // const { title, author, img, description } = props
  const clickHandler = (id) => {
    alert('that tickles')
    console.log(id)
  }
  return (
    <article className='book' type='button' onClick={() => clickHandler(id)}>
      <h2
        onMouseOver={() => {
          console.log(title)
        }}
      >
        {title}
      </h2>
      <h4>{author}</h4>
      <img src={img} alt='pic' />
      <p>{description}</p>
    </article>
  )
}

export default Book
