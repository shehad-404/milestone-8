import { useLoaderData } from "react-router-dom";
import './App.css'
import FlowerCard from "./components/FlowerCard";

function App() {
  // Hook = useLoaderData() >>> to access the data loaded by the loader function defined in the route configuration
  const data = useLoaderData();
  console.log("Loader Data:", data);

  return (
    <div>This is Home Page

      <div className="grid grid-cols-4 gap-4 py-4">
        {/* <div className="bg-red-500 text-white p-6 text-3xl">Taliwind working?</div> */}
        {data.map((flower) => (
          <FlowerCard flower={flower}></FlowerCard>
        ))}
      </div>
    </div>
    );
}

export default App
