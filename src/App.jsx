import DetailCarPage from "./pages/DetailCarPage";
import LandingPages from "./pages/LandingPages";
import SearchCarPage from "./pages/SearchCarPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPages />} />
        <Route path="/SearchCar" element={<SearchCarPage />} />
        <Route path="/SearchCar/:id" element={<DetailCarPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;