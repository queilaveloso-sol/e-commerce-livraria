import './style.css';

function Home({ adicionarAoCarrinho }) {
  
  // A função agora recebe o objeto do livro clicado
  const tratarClique = (livro) => {
    adicionarAoCarrinho(livro);
  };

  const livrosDestaque = [
    { 
      id: 1, 
      titulo: "O Codificador Limpo", 
      autor: "Robert C. Martin", 
      preco: "R$ 69,90", 
      img: "https://picsum.photos/id/1060/200/300" 
    },
    { 
      id: 2, 
      titulo: "Padrões Javascript", 
      autor: "Stoyan Stefanov", 
      preco: "R$ 45,00", 
      img: "https://picsum.photos/id/484/200/300" 
    },
    { 
      id: 3, 
      titulo: "Entendendo Algoritmos", 
      autor: "Aditya Bhargava", 
      preco: "R$ 52,90", 
      img: "https://picsum.photos/id/24/200/300" 
    }
  ];

  return (
    <div className="home-container">
      {/* Banner Principal */}
      <section className="banner">
        <div className="banner-conteudo">
          <h1>Feira de Livros de Tecnologia! 🚀</h1>
          <p>Use o cupom <span className="cupom">DEV10</span> e ganhe 10% de desconto.</p>
          <button className="btn-banner">Ver Promoções</button>
        </div>
      </section>

      {/* Seção de Destaques */}
      <section className="destaques">
        <h2>Livros em Destaque 🔥</h2>
        <div className="livros-grid">
          {livrosDestaque.map(livro => (
            <div key={livro.id} className="livro-card">
              <img src={livro.img} alt={livro.titulo} className="livro-img" />
              <h3>{livro.titulo}</h3>
              <p className="livro-autor">{livro.autor}</p>
              <p className="livro-preco">{livro.preco}</p>
              
              {/* O botão agora passa o livro específico através de uma arrow function */}
              <button className="btn-comprar" onClick={() => tratarClique(livro)}>
                Adicionar ao Carrinho 🛒
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;