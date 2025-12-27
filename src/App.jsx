import { useLoaderData } from "react-router-dom";
import './App.css'
import FlowerCard from "./components/FlowerCard";
import { useState } from "react"; 

function App() {
  // Hook = useLoaderData() >>> to access the data loaded by the loader function defined in the route configuration
  const data = useLoaderData();
  
  // useState to manage flowers data
  const [flowers, setFlowers] = useState(data);

  // Handle search input change
  const handleSearch = (e) => {
    // set the search text
    const searchText = e.target.value; 
    // filter the data based on the search text >>> is it included in the flower name
    const result = data.filter(item => 
      item.name.toLowerCase().includes(searchText.toLowerCase())
      );
    // set the filtered result to flowers state
    setFlowers(result);
    console.log("Search Result:", result);
  } 

  return (
    <div className="mx-auto container">
      <div className="py-4 bg-gray-400">

        {/* Search bar for flowers */}
        <input onChange={handleSearch} type="text" placeholder="Search flower..." className="shadow border border-gray-100 rounded-lg px-4 py-2 w-full max-w-md mb-4"/>
      </div>
      <div className="grid grid-cols-4 gap-4 py-4">
        {/* <div className="bg-red-500 text-white p-6 text-3xl">Taliwind working?</div> */}
         {/* Render FlowerCard components for each flower in the filtered >>> flowers state */}
        {flowers.map((flower) => (
          <FlowerCard  flower={flower}></FlowerCard>
        ))}
      </div>
    </div>
    );
}

export default App
