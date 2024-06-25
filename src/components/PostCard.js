import { RxCross1 } from "react-icons/rx"; 
import React from 'react'

const PostCard = ({post,onRemove}) => { 
    const randomImageUrl = `https://picsum.photos/800/600?random=${post.id}`;
  return (
    <div className='bg-white shadow-lg rounded-lg p-4 relative transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl'>
      <img 
      src={randomImageUrl}
      alt='postimage' 
      className='w-full h-48 object-cover rounded-t-lg'
      /> 
      <div className='p-2'>
        <h2 className='text-md font-bold mb-1 text-gray-700 '>{post.title}</h2>
        <p className='text-gray-700 mb-1'>{post.body}</p>
      </div> 
      <button className='absolute top-2 right-2 p-2 bg-red-500  rounded-full text-white  hover:bg-red-700 transition-colors duration-200' 
       onClick={()=>onRemove(post.id)}
       >
        <RxCross1  />
      </button>
    </div>
  )
}

export default PostCard

