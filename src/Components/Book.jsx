import React from 'react'
import { Link } from 'react-router-dom'

const Book = ({item}) => {
    const {image,bookId} =item
  return (
    <Link to={`/detail/${bookId}`}>
        <div className="hero bg-base-200  border">
  <div className="hero-content flex-col ">
    <img
      src={image}
      className="w-40px"
    />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    </Link>
  )
}

export default Book