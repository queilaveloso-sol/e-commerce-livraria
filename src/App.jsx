import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/index.jsx';
import Home from './pages/Home/index.jsx';
import Produtos from './pages/Produtos/index.jsx';
import Sobre from './pages/Sobre/index.jsx';

function App() {
  // Agora o carrinho começa como uma lista (array) vazia []
  const [carrinho, setCarrinho] = useState([]);

  // Função que recebe o objeto do livro inteiro e adiciona na lista
  const adicionarAoCarrinho = (livro) => {
    setCarrinho([...carrinho, livro]);
  };

  // Descobre a quantidade total de itens somando o tamanho da lista
  const quantidadeTotal = carrinho.length;

  return (
    <Router>
      {/* O Header continua recebendo apenas o número para a bolinha */}
      <Header quantidadeCarrinho={quantidadeTotal} />
      
      <main className="conteudo-principal">
        <Routes>
          {/* Passamos a nova função que envia os dados do livro */}
          <Route path="/" element={<Home adicionarAoCarrinho={adicionarAoCarrinho} />} />
          <Route path="/produtos" element={<Produtos adicionarAoCarrinho={adicionarAoCarrinho} />} />
          
          {/* Enviamos a lista COMPLETA de produtos para a página de fechamento */}
          <Route path="/sobre" element={<Sobre itensCarrinho={carrinho} />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;