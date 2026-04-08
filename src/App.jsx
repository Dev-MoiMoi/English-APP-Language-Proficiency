import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import ReadingModule from './pages/ReadingModule';
import WritingModule from './pages/WritingModule';
import SpeakingModule from './pages/SpeakingModule';
import ListeningModule from './pages/ListeningModule';
import './App.css';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/reading" element={<ReadingModule />} />
            <Route path="/writing" element={<WritingModule />} />
            <Route path="/speaking" element={<SpeakingModule />} />
            <Route path="/listening" element={<ListeningModule />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
