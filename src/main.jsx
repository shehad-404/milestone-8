import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import About from './pages/About.jsx';
import UserDetails from './pages/UserDetails.jsx';
import MyFavouriteFlower from './pages/MyFavouriteFlower.jsx';
import MainLayout from './MainLayout.jsx';
import Home from './pages/Home.jsx';


// this is a simple router setup with three routes: "/" or homepage, "/about", and "/store" >>> that render different components or elements based on the URL path.
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('/data.json') // data loader function to fetch data from a JSON file
      }, 
    
      {
        path: "all-flowers",
        element: <App />,
        loader: () => fetch('/data.json') // data loader function to fetch data from a JSON file
      }, 

      {
        path: "about",
        element:  <About></About>,
      },
    
      {
        path: "store",
        element: (
        <div>
          <h1>Welcome to the Store</h1> 
        </div>
        ),
      },
    
      {
        // Dynamic route with a URL parameter ":userId"
        path: "details/:userId",
        element: <UserDetails></UserDetails>,
        loader: () => fetch('/data.json') // data loader function to fetch data from a JSON file
      },
    
      {
        path: "favorite",
        element: <MyFavouriteFlower/>,
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
