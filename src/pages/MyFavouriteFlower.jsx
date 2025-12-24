import React, { useEffect, useState } from 'react'

export default function MyFavouriteFlower() {

  const data = localStorage.getItem('fav');
  console.log("My Favourite Flower Data from localStorage:", data);

  // let items = [];
  // if(data){
  //   items = JSON.parse(data); // Convert JSON string back to JavaScript object/array
  // }
  // console.log("Parsed My Favourite Flower Data:", items);


  // useState to manage favorite items
  const [items, setItems] = useState([]);

  // UseEffect to load favorite items on component mount
  useEffect(() => {
    const data = localStorage.getItem('fav');
    if (data) {
      setItems(JSON.parse(data)); // Set parsed data to items state
    }
  }, [])

  // Remove a favorite flower by id
  const removeFav = (id) => {
    // Keep this item only if its "id" is NOT the same as the "id" we want to remove
    const updateditems = items.filter(item => item.id !== id);
    setItems(updateditems); // Update state/UI
    localStorage.setItem('fav', JSON.stringify(updateditems)); // Update localStorage
  };

  return (
    <div>My Favourite Flower
      <div className='grid justify-center space-y-3'>
        {
          items.map((item) => (
            <div className='flex gap-4 py-4'>
              <h2><img className='h-48 w-48 object-cover' src={item.image} alt="" /></h2>
              <h2>{item.name}</h2> <br />
              <h2>{item.description}</h2> <br />

              {/* Button to remove favorite item */}
              <button onClick={() => removeFav(item.id)}
                className="bg-green-500 text-white px-3 py-1 rounded text-sm">
                Remove favorite
              </button>
            </div>
          ))
        }
      </div>
    </div>
  )
}
