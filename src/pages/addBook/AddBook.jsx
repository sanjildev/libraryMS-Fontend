import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddBook = () => {
//   const [bookName,setBookName]=useState('')
//   const [bookPrice,setBookPrice]=useState('')
//   const [authorName,setAuthorName]=useState('')
//   const [isbnNumber,setIsbnNumber]=useState(null)
//   const [publishedAt,setPublishedAt]=useState('')
//   const [publication,setPublication]=useState('')
//   const [imageUrl,setImageUrl]=useState(null)



//   const handleSubmit=async(e)=>{
//     e.preventDefault()

//1st method

//     // await axios.post('http://localhost:5000/book',{
//     //   bookName,bookPrice,isbnNumber,authorName,publishedAt,publication,imageUrl
//     // },{
//     //   headers:{
//     //     'Content-Type':'multipart/form-data'
//     //   }
//     // }) //yo chia frontend bata backend ma pathaune euta method


//2nd method

// const formData=new FormData()
// formData.append('bookName',bookName),
// formData.append('bookPrice',bookPrice)
// formData.append('authorName',authorName),
// formData.append('isbnNumber',isbnNumber)
// formData.append('publishedAt',publishedAt),
// formData.append('publication',publication)
// formData.append('imageUrl',imageUrl)

// const response=await axios.post('http://localhost:5000/book',formData)
 //}
 const navigate=useNavigate()
 const [data,setData]=useState({
    bookName:"",
    bookPrice:'',
isbnNumber:null,
authorName:'',
publishedAt:'',
description:'',
publication:'',
 })
 const [imageUrl,setImageUrl]=useState(null)
 const handleChange=(e)=>{
const {name,value}=e.target
setData({
    ...data,
    [name]:value
})
}
const handleSubmit=async(e)=>{
e.preventDefault()
const formData=new FormData()
Object.entries(data).forEach(([Key,value])=>{ //object.entries le chai data ma object store hunx teslai euta array ma change gardinx jasle garer  loop garna sajilo parx uyedi yesari data gako x vane {
//     bookName: "MMA Kings",
//     bookPrice: "500",
//     isbnNumber: 123456789,
//     authorName: "Sanil",
//     publishedAt: "2025-04-06",
//     publication: "Octaverse Books"
//   }
  // yesto pardinx 
//   [
//     ['bookName', 'MMA Kings'],
//     ['bookPrice', '500'],
//     ['isbnNumber', 123456789],
//     ['authorName', 'Sanil'],
//     ['publishedAt', '2025-04-06'],
//     ['publication', 'Octaverse Books']
//   ]
  
    formData.append(Key,value)

})
formData.append('imageUrl',imageUrl)
const response=await axios.post('https://libraryms-dso4.onrender.com/book',formData)
if(response.status===201){
navigate('/')
}
else{
    alert('Something Went Wrong!!')
}
}
  return (
  <>
    <Navbar/>
    <div className="bg-white rounded-lg shadow-md p-8 w-full mx-auto my-40 max-w-md">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">Add Book</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="bookName" className="block text-sm font-medium text-gray-600">Name</label>
                <input type="text" id="bookName" name="bookName" className="mt-1 p-2 w-full border rounded-md text-gray-800" onChange={handleChange} required/>
            </div>
            <div className="mb-4">
                <label htmlFor="bookPrice" className="block text-sm font-medium text-gray-600">bookPrice</label>
                <input type="number" id="bookPrice" name="bookPrice" className="mt-1 p-2 w-full border rounded-md text-gray-800" onChange={handleChange}/>
            </div>
            <div className="mb-4">
                <label htmlFor="isbnNumber" className="block text-sm font-medium text-gray-600">isbnNumber</label>
                <input type="number" id="isbnNumber" name="isbnNumber" className="mt-1 p-2 w-full border rounded-md text-gray-800" onChange={handleChange}/>
            </div>
            <div className="mb-4">
                <label htmlFor="authorName" className="block text-sm font-medium text-gray-600">authorName</label>
                <input type="text" id="authorName" name="authorName" className="mt-1 p-2 w-full border rounded-md text-gray-800" onChange={handleChange}/>
            </div>
            <div className="mb-4">
    <label htmlFor="description" className="block text-sm font-medium text-gray-600">description</label>
    <textarea 
        id="description" 
        name="description" 
        rows="8"
        className="mt-1 p-2 w-full border rounded-md text-gray-800"
        onChange={handleChange}
    ></textarea>
</div>

            <div className="mb-4">
                <label htmlFor="publishedAt" className="block text-sm font-medium text-gray-600">publishedAt</label>
                <input type="date" id="publishedAt" name="publishedAt" className="mt-1 p-2 w-full border rounded-md text-gray-800" onChange={handleChange}/>
            </div>
            <div className="mb-4">
                <label htmlFor="publication" className="block text-sm font-medium text-gray-600">publication</label>
                <input type="text" id="publication" name="publication" className="mt-1 p-2 w-full border rounded-md text-gray-800" onChange={handleChange}/>
            </div>
            <div className="mb-6">
                <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-600">imageUrl</label>
                <input type="file" id="imageUrl" name="imageUrl" className="mt-1 p-2 w-full border rounded-md text-gray-800" onChange={(e)=>setImageUrl(e.target.files[0])}/>
            </div>
            <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer">Add Book</button>
        </form>
    </div>
  </>
  )

}
export default AddBook