import { Link } from 'react-router-dom';
import './style.css';

function Header() {
  return (
    <header className="livraria-header">
      <div className="livraria-logo">
        <h1>Palavra <span>Viva</span></h1>
        <p>Livraria & Bíblias</p>
      </div>
      <nav className="livraria-nav">
        <Link to="/">Início</Link>
        <Link to="/produtos">Bíblias e Livros</Link>
        <Link to="/sobre">Sobre & Contato</Link>
      </nav>
    </header>
  );
}

export default Header;