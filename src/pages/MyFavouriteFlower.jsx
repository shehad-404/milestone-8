import React from 'react'

const data = localStorage.getItem('fav');
console.log("My Favourite Flower Data from localStorage:", data);

let items = [];
if(data){
  items = JSON.parse(data); // Convert JSON string back to JavaScript object/array
}
console.log("Parsed My Favourite Flower Data:", items);

export default function MyFavouriteFlower() {
  return (
    <div>MyFavouriteFlower
      <div className='grid justify-center space-y-3'>
        {
          items.map((item) => (
            <div className='flex gap-4 py-4'>
              <h2><img className='h-48 w-48 object-cover' src={item.image} alt="" /></h2>
              <h2>{item.name}</h2>
              <h2>{item.description}</h2>
            </div>
          ))
          }
      </div>
    </div>
  )
}
