import React from 'react';
import NavBar from './components/NavBar';
import ArticuloPublicitario from './components/ArticuloPublicitario';
import ArticuloTecnologia from './components/ArticuloTecnologia';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <NavBar />
     <ArticuloPublicitario />
     <ArticuloTecnologia />

     <Footer />
    </div>
  );
}

export default App;
