import React from 'react';
import NavBar from './components/NavBar';
import ArticuloPublicitario from './components/ArticuloPublicitario';
import ArticuloTecnologia from './components/ArticuloTecnologia';
import Footer from './components/Footer';
import Video from './components/Video';

function App() {
  return (
    <div className="App">
     <NavBar />
     <ArticuloPublicitario />
     <ArticuloTecnologia />

      <Video />
     <Footer />
    </div>
  );
}

export default App;
