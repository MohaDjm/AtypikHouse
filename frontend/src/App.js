import React from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About';
import Accomodation from './pages/Accomodation';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import SignUp from './pages/SignUp'; // Importer le composant SignUp
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex-grow: 1;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <MainContent>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace={true} />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/accomodation/:id" element={<Accomodation />} />
            <Route path="/signup" element={<SignUp />} /> {/* Ajouter la route pour SignUp */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
