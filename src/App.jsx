import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import DetailsCountry from './components/DetailsCountry';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:countryName" element={<DetailsCountry />} />
      </Routes>
    </Router>
  )
}

export default App;
