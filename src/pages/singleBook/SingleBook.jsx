import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'

const SingleBook = () => {
  const navigate=useNavigate()
  const [book,setBook]=useState({})
  const {id}=useParams()
  const fetchBook=async()=>{
    const response=await axios.get(`http://localhost:5000/book/${id}`)
    if(response.status===200){
      setBook(response.data.data)
    }
  }
  useEffect(()=>{
    fetchBook()
  },[])
  const deleteBook=async()=>{
    const response=await axios.delete(`http://localhost:5000/book/${id}`)
    if(response.status===200){
     navigate('/')
    }
    else{
      alert('something went wrong!!')
    }
  }
  return (
    
    <>
    <Navbar/>
      <div className="w-full flex items-center flex-col mt-40 bg-white  rounded-lg shadow-sm dark:bg-gray-800 mb-10 text-center">
    <Link to='#'>
        <img className="rounded-t-lg object-contain w-200 h-200" src={book.imageUrl ? book.imageUrl : "https://www.ultimato.com.br/image/atualiza_home/principal/ultimas/noticias/2017/01_jan/Not_31_01_17_Gutenberg.jpg"}  alt="" />
   </Link>
    <div className="p-5">
        <Link to='#'>
            <h5 className="mb-2 text-2xl font-bold tracking-tight capitalize text-gray-900 dark:text-white">{book.bookName}</h5>
       </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{book.bookPrice}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{book.authorName}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 w-280 text-center">{book.description}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{book.isbnNumber}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{book.publication}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{book.publishedAt}</p>
      <button onClick={deleteBook} className='border-2 w-20 hover:bg-blue-200 p-2 cursor-pointer mr-8'>Delete</button>
      <Link to={`/editBook/${book._id}`}> <button className='border-2 w-20 hover:bg-blue-200 p-2 cursor-pointer'>Edit</button></Link>
      
    </div>
</div>

    </>
  )
}

export default SingleBook