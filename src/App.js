import React from "react";
import Banner from "./app/Screens/HomeScreen/Banner/Banner";
import Featured from "./app/Screens/HomeScreen/Featured/Featured";
import Categories from "./app/Screens/HomeScreen/Categories/Categories";
import Cta from "./app/Screens/HomeScreen/Cta/Cta";
import News from "./app/Screens/HomeScreen/News/News";
import RecomendedNews from "./app/Screens/HomeScreen/News/Recomended/RecomendedNews";
import PopularProducts from "./app/Screens/HomeScreen/PopularProducts/PopularProducts";
import UpcomingEvents from "./app/Screens/HomeScreen/Events/UpcomingEvents";
import Navbar from "./app/components/Navbar/Navbar";


function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Featured />
      <Categories />
      <Cta />
      <News />
      <RecomendedNews />
      <PopularProducts />
      <UpcomingEvents />
    </div>
  );
}

export default App;
