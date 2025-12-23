import React from 'react'
import { Link } from "react-router-dom";


export default function FlowerCard({flower}) {
  return (
    <div className='shadow'>
        <div>
            <img className= "w-full h-[250px] object-cover" src={flower.image} alt="" />
        </div>
        {/* <h2><a href={`/details/${flower.id}`}>{flower.name}</a></h2> */}

        <div className='bg-green-400 p-2 text-white py-8 rounded-xl'> 
        <h2>
          <Link to={`/details/${flower.id}`}>
          {flower.name}</Link> </h2>
        <h2>Like Count: {flower.likeCount}</h2>
        </div>
    </div>
  )
}
