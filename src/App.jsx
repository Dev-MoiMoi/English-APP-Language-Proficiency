import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ReadingModule from './pages/ReadingModule';
import WritingModule from './pages/WritingModule';
import SpeakingModule from './pages/SpeakingModule';
import ListeningModule from './pages/ListeningModule';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/reading" element={<ReadingModule />} />
        <Route path="/writing" element={<WritingModule />} />
        <Route path="/speaking" element={<SpeakingModule />} />
        <Route path="/listening" element={<ListeningModule />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
