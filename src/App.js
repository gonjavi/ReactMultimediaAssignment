import React from 'react';
import NavBar from './components/NavBar';
import ArticuloPublicitario from './components/ArticuloPublicitario';
import ArticuloTecnologia from './components/ArticuloTecnologia';

function App() {
  return (
    <div className="App">
     <NavBar />
     <ArticuloPublicitario />
     <ArticuloTecnologia />
    </div>
  );
}

export default App;
