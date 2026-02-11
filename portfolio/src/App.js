import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import ExperienceDetail from './pages/ExperienceDetail';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projekt/:slug" element={<ProjectDetail />} />
          <Route path="/erfahrung/:slug" element={<ExperienceDetail />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
