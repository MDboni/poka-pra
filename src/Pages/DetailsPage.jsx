import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DetailsPage = () => {
  const { id } = useParams()
  const [book, setBook] = useState(null)

  const [ pumch,setPumch ] = useState([])

  const AddHandel = (book)=>{
       setPumch(prev=>[...prev,book])
  }

  useEffect(() => {
    fetch('/booksData.json') // public folder হলে শুরুতে / ব্যবহার করো
      .then(res => res.json())
      .then(data => {
        const found = data.find(b => b.bookId === parseInt(id))
        setBook(found)
      })
  }, [id])

  // Data না আসা পর্যন্ত loading দেখাবে
  if (!book) {
    return <div className="p-6 text-xl">Loading...</div>
  }

  return (
    <div className='flex'>
          <div className="p-6 w-4/6">
      <h1 className="text-3xl font-bold">{book.bookName}</h1>
      <p className="mt-2">Author: {book.author}</p>
      <img
        src={book.image}
        alt={book.bookName}
        className="mt-4 w-60 rounded-lg shadow-lg"
      />
      <p className="mt-4">{book.review}</p>
      <button onClick={()=>AddHandel(book)} className='btn btn-success'>Read</button>
    </div>
    <div className='w-2/6 border'>
        {
            pumch.map((b,i)=>(
                <div key={i}>
                   <img
                    src={b.image}
                   />
                </div>
            ))
        }
    </div>
    </div>
  )
}

export default DetailsPage
