import React, { use, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLoaderData, useParams } from 'react-router'

export default function UserDetails() {
    // Hook (useParams) to access URL parameters >>> Get the dynamic parameter from the URL  
    const {userId} = useParams();
    // console.log("User Details id:", id);

    // Hook = useLoaderData() >>> to access the data loaded by the loader function defined in the route configuration
    const data = useLoaderData();

    // ** use state** >>> to track if the item is added to favorites
    const [favAdded, setAdded] = useState(false);

    // filter >>> the data based on the userId from the URL parameters
    const filterData = data.find((flower) => flower.id === userId);

    const handleFav = () =>{
      // initialize an empty array to hold the saved data
      let saveData = [];
      // Retrieve existing data from localStorage
      const storageData = localStorage.getItem('fav');
      // Check if there is existing data in localStorage
      if(storageData){
        // JSON.parse() >>> method is used to convert a JSON string into a JavaScript object.
        saveData = JSON.parse(storageData);
        // Check if the item is already in favorites
        const found = saveData.find(item => item.id === userId);
        if(found){
          return alert('This flower is already in your favorites!');
        }
      }
      // Add the new filterData to the array
      saveData.push(filterData);
      // Save the updated array back to localStorage
      localStorage.setItem('fav', JSON.stringify(saveData));
      setAdded(true);
    };

    // useEffect >>> to load existing favorite data on component mount
    useEffect(() => {
      // Retrieve existing data from localStorage
      let storageData = localStorage.getItem('fav');
      if(storageData){
        // const saveData = JSON.parse(storageData);
        const found = JSON.parse(storageData).find(item => item.id === userId);

        if(found){
          setAdded(true);
        }
      }
    }, [userId]);

    // const handleFav = () => {
    //   localStorage.setItem('fav', JSON.stringify(filterData));

    //   // localStorage can only store strings. So, to store an object, you need to convert it to a string using JSON.stringify() when saving it, and then parse it back to an object using JSON.parse() when retrieving it.
    //   let favoriteFlowers = JSON.parse(localStorage.getItem('favoriteFlowers')) || [];
    //   // Check if the flower is already in favorites
    //   const isAlreadyFavorite = favoriteFlowers.some(flower => flower.id === filterData.id);
    //   if (!isAlreadyFavorite) {
    //     favoriteFlowers.push(filterData);
    //     localStorage.setItem('favoriteFlowers', JSON.stringify(favoriteFlowers));
    //     alert('Flower added to favorites!');
    //   } else {
    //     alert('Flower is already in favorites!');
    //   }
    // }

  return (
    <div className='mt-10 grid grid-cols-2 container mx-auto'> 
          <img width={500} height={250} src={filterData.image} alt="" />
          
          <div className='my-auto'>
            <h2>{filterData.name}</h2>
            <h2>{filterData.description}</h2>
            <h2>{filterData.likeCount}</h2>

            <button 
             disabled={favAdded}
             onClick= {handleFav}
             className='bg-green-500 text-white cursor-pointer disabled:bg-gray-500 '>Add to favorite</button>
            <br />
            <Link to="/">Back to Home</Link>
          </div> 
        
    </div>
  )
}
