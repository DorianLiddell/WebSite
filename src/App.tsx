import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Success } from './pages/Success';
import { GlobalStyles } from './styles/GlobalStyles';

export default function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}
