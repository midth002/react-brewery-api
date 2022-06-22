
import './App.css';
import NavbarTop from './components/navbar/NavbarTop';
import WeatherBoard from './components/weatherBoard/WeatherBoard';
import Location from './pages/location/Location';
import Search from './pages/search/Search';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
function App() {
  return (
    <div className="App">
    <NavbarTop />
    <Router>
      <Routes>
      <Route path='/react-brewery-api/' element={<Home />} />
      <Route path='/react-brewery-api/search' element={<Search />} />
        <Route path='/react-brewery-api/geolocation' element={<Location />} />
      </Routes>
    </Router>
    {/* <Footer /> */}
    </div>
  );
}

export default App;
