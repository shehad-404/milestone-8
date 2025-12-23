# 🌸 Flower Gallery React Project

## 🔹 Project Summary
This is a **React + React Router** project that displays a collection of flowers with **dynamic detail pages**.

---

## 📁 Project Structure

- **main.jsx**  
  Sets up routes and loads data from `data.json`.

- **App.jsx**  
  Home page that lists all flowers using the `FlowerCard` component.

- **FlowerCard.jsx**  
  Reusable component that displays an individual flower with image and clickable name.

- **About.jsx**  
  Static About page.

- **UserDetails.jsx**  
  Dynamic detail page for a single flower using the `:userId` route parameter.

- **data.json**  
  Contains an array of flower objects with the following fields:
  - `id`
  - `name`
  - `image`
  - `description`
  - `likeCount`
  - `color`

---

## 🔹 Data Flow

1. `main.jsx` loader fetches `data.json`.
2. Home page (`App.jsx`) accesses the data using `useLoaderData()`.
3. Each flower object is passed as props to `FlowerCard`.
4. Clicking a flower name navigates to `/details/:id`.
5. `UserDetails.jsx`:
   - Retrieves `userId` using `useParams()`
   - Uses `useLoaderData()` to get the full flower array
   - Finds the flower object with the matching `id`
   - Displays:
     - Image
     - Name
     - Description
     - Like count
   - Provides a **Back to Home** link

---

## 🔹 Features Implemented

- Data-driven Home page with dynamic rendering
- Dynamic routing for flower details
- Reusable `FlowerCard` component
- SPA navigation using `<Link>` (no page reload)
- Static About page
- JSON-based data loader for both Home and Detail pages
