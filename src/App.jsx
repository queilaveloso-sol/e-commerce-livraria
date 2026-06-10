import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/index.jsx';
import Home from './pages/Home/index.jsx';
import Produtos from './pages/Produtos/index.jsx';
import Sobre from './pages/Sobre/index.jsx';

function App() {
  return (
    <Router>
      <Header />
      <main className="conteudo-principal">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;