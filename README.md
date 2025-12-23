## 🔹 Project Summary
**This is a React + React Router project displaying a collection of flowers with dynamic details pages.**

📁 Project Structure (as per your files)
--main.jsx → Sets up routes and loads data from data.json.
--App.jsx → Home page, lists all flowers using FlowerCard.
--FlowerCard.jsx → Reusable component, shows individual flower with image and clickable name.
--About.jsx → Static About page.
--UserDetails.jsx → Dynamic detail page for a single flower using :userId.
--data.json → Contains array of flower objects with fields: id, name, image, description, likeCount, color.

##🔹 Data Flow
1.main.jsx loader fetches data.json.
2.Home page (App.jsx) gets data via useLoaderData().
3.Each flower is passed as props to FlowerCard.
4.Clicking the name in FlowerCard navigates to /details/:id.
5.UserDetails.jsx:
    --Gets userId via useParams().
    --Uses useLoaderData() to get full flower array.
    --Finds the flower object with matching id.
    --Displays image, name, description, like count.
    --Provides a “Back to Home” link.

##🔹 Features Implemented
--Data-driven Home page with dynamic rendering.
--Dynamic routing for flower details.
--Reusable FlowerCard component.
--SPA navigation with <Link> (no reload).
--Static About page.
--JSON-based data loader for both Home and Detail pages.

