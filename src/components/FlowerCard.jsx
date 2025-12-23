import React from 'react'
import { Link } from "react-router-dom";


export default function FlowerCard({flower}) {
  return (
    <div>
        <div>
            <img width={250} src={flower.image} alt="" />
        </div>
        {/* <h2><a href={`/details/${flower.id}`}>{flower.name}</a></h2> */}
        <h2><Link to={`/details/${flower.id}`}>{flower.name}</Link> </h2>
        <h2>{flower.likeCount}</h2>
    </div>
  )
}
