import { useEffect, useState } from "react"
import Book from "./Book"

const Pooka = () => {

    const [data,setData] = useState([])

    useEffect(()=>{
        fetch('booksData.json')
        .then(res => res.json())
        .then(data=> setData(data))
    },[])

  return (
    <div className=" ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {
                data.map((item,i)=><Book key={i} item={item}></Book>)
            }
        </div>
    </div>
  )
}

export default Pooka