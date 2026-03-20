import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import About from './pages/About';
import Skill from './pages/Skill';
import Experience from './pages/Experience';
import Project from './pages/Project';
import Contact from './pages/Contact';
import TopBtn from './components/common/TopBtn';

function App() {
  const location = useLocation();

  useEffect(() => {
    // 페이지 이동 시 헤더로 스크롤
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <div className="wrap">
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <TopBtn />
    </div>
  );
}

export default App;
