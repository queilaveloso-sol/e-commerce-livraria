import './style.css';

function Produtos({ adicionarAoCarrinho }) {
  
  // A função agora recebe o produto específico clicado
  const tratarClique = (produto) => {
    adicionarAoCarrinho(produto);
  };

  const listaProdutos = [
    { 
      id: 10, 
      titulo: "Bíblia de Estudo Almeida", 
      categoria: "Bíblias", 
      preco: "R$ 120,00", 
      img: "https://picsum.photos/id/115/200/300" 
    },
    { 
      id: 20, 
      titulo: "Bíblia NVT - Capa Couro", 
      categoria: "Bíblias", 
      preco: "R$ 89,90", 
      img: "https://picsum.photos/id/367/200/300" 
    },
    { 
      id: 30, 
      titulo: "Teologia Sistemática", 
      categoria: "Livros", 
      preco: "R$ 150,00", 
      img: "https://picsum.photos/id/528/200/300" 
    },
    { 
      id: 40, 
      titulo: "O Peregrino", 
      categoria: "Livros", 
      preco: "R$ 35,00", 
      img: "https://picsum.photos/id/338/200/300" 
    }
  ];

  return (
    <div className="produtos-container">
      <h2>Nosso Catálogo: Bíblias e Livros 📖</h2>
      <p className="subtitulo">Escolha as melhores literaturas para sua leitura.</p>
      
      <div className="produtos-grid">
        {listaProdutos.map(produto => (
          <div key={produto.id} className="produto-card">
            <span className="categoria-tag">{produto.categoria}</span>
            <img src={produto.img} alt={produto.titulo} className="produto-img" />
            <h3>{produto.titulo}</h3>
            <p className="produto-preco">{produto.preco}</p>
            
            {/* O botão passa o produto atual usando a arrow function */}
            <button className="btn-adicionar" onClick={() => tratarClique(produto)}>
              Adicionar ao Carrinho 🛒
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Produtos;