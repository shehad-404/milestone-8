import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>

        <footer>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis nostrum labore, et eum quis necessitatibus similique libero quisquam fugit. Optio neque quos repellendus! Quam qui, harum ad molestias blanditiis magni quaerat quas ipsam quo.</p>
        </footer>
    </div>
  )
}
