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

    const handleFav = () => {
      localStorage.setItem('fav', JSON.stringify(filterData));


      // localStorage can only store strings. So, to store an object, you need to convert it to a string using JSON.stringify() when saving it, and then parse it back to an object using JSON.parse() when retrieving it.
      // let favoriteFlowers = JSON.parse(localStorage.getItem('favoriteFlowers')) || [];
      // // Check if the flower is already in favorites
      // const isAlreadyFavorite = favoriteFlowers.some(flower => flower.id === filterData.id);
      // if (!isAlreadyFavorite) {
      //   favoriteFlowers.push(filterData);
      //   localStorage.setItem('favoriteFlowers', JSON.stringify(favoriteFlowers));
      //   alert('Flower added to favorites!');
      // } else {
      //   alert('Flower is already in favorites!');
      // }
    }

  return (
    <div className='mt-10 grid grid-cols-2 container mx-auto'> 
          <img width={500} height={250} src={filterData.image} alt="" />
          
          <div className='my-auto'>
            <h2>{filterData.name}</h2>
            <h2>{filterData.description}</h2>
            <h2>{filterData.likeCount}</h2>
            <button onClick= {handleFav}
             className='bg-green-500 text-white'>Add to favorite</button>
            <br />
            <Link to="/">Back to Home</Link>
          </div> 
        
    </div>
  )
}
