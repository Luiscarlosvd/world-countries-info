import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './routes/Home';
import DetailsCountry from './components/DetailsCountry';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/details/:Countyname" element={<DetailsCountry />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
