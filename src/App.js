import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Addproduct from "./app/Screens/Products/Addproduct/Addproduct";
import HomeScreen from "./app/constants/HomeScreen";
import Singleproduct from "./app/Screens/Products/Singleproduct/Singleproduct";


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<HomeScreen />} />
          <Route path="/Addproduct" element={<Addproduct />} />
          <Route path="/Product" element={<Singleproduct />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
