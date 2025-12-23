import React from 'react'
import { Link } from 'react-router-dom'
import { useLoaderData, useParams } from 'react-router'

export default function UserDetails() {
    // Hook (useParams) to access URL parameters >>> Get the dynamic parameter from the URL  
    const {userId} = useParams();
    // console.log("User Details id:", id);

    // Hook = useLoaderData() >>> to access the data loaded by the loader function defined in the route configuration
    const data = useLoaderData();

    console.log("Loader Data in UserDetails:", data);

    const filterData = data.find((flower) => flower.id === userId);

  return (
    <div>
        <div><img width={600} height={300} src={filterData.image} alt="" /></div>   
        <div>{filterData.name}</div> 
        <div>{filterData.description}</div>
        <div>{filterData.likeCount}</div>
        <Link to="/">Back to Home</Link>
    </div>
  )
}
