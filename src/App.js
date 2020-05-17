import React from 'react';
import NavBar from './components/NavBar';
import ArticuloPublicitario from './components/ArticuloPublicitario';
import ArticuloTecnologia from './components/ArticuloTecnologia';
import Footer from './components/Footer';
import Video from './components/Video';
import Audio from './components/Audio';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ArticuloPublicitario />
      <ArticuloTecnologia />
      <Audio />
      <Video />
      <Footer />
    </div>
  );
}

export default App;
