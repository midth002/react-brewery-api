
import './App.css';
import NavbarTop from './components/navbar/NavbarTop';
import WeatherBoard from './components/weatherBoard/WeatherBoard';
import Location from './pages/location/Location';
import Search from './pages/search/Search';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
    <NavbarTop />
    <Router>
      <Routes>
      <Route path='/search' element={<Search />} />
        <Route path='/geolocation' element={<Location />} />
      </Routes>
    </Router>
    <Footer />
    </div>
  );
}

export default App;
