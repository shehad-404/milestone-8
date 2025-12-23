import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className='p-4 bg-yellow-300 flex justify-center items-center container mx-auto'>
        <ul className='flex gap-4'>
            <li>
                <Link className='bg-blue-500 text-white px-4 py-2 rounded-xl' to="/">Home</Link>    
            </li>
            <li>
                <Link className='bg-blue-500 text-white px-4 py-2 rounded-xl' to="/about">About</Link>    
            </li>
            <li>
                <Link className='bg-blue-500 text-white px-4 py-2 rounded-xl' to="/all-flowers">All Flowers</Link>
            </li>
            <li>
                <Link className='bg-blue-500 text-white px-4 py-2 rounded-xl' to="/favorite">My Favorite Flowers</Link>
            </li>
        </ul>
    </nav>
  )
}
