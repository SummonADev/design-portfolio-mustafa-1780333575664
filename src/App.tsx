import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/pages/Hero';
import About from '@/pages/About';
import Projects from '@/pages/Projects';
import Skills from '@/pages/Skills';
import Contact from '@/pages/Contact';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0f0f1a]">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
              </main>
            }
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
