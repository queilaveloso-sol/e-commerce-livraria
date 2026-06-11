import './style.css';

function Sobre({ itensCarrinho = [] }) {
  // 1. Calcular o valor dos produtos
  const subtotal = itensCarrinho.reduce((acc, item) => {
    // Remove o "R$" e converte a string de preço para número decimal
    const precoNumero = parseFloat(item.preco.replace('R$', '').replace(',', '.').trim());
    return acc + precoNumero;
  }, 0);

  // 2. Regra do Frete: Se o carrinho estiver vazio é R$ 0, senão é R$ 15,00
  const frete = itensCarrinho.length > 0 ? 15.00 : 0.00;
  const totalGeral = subtotal + frete;

  return (
    <div className="sobre-container">
      <h2>Resumo do seu Pedido 📖</h2>
      
      <div className="checkout-grid">
        {/* Lado Esquerdo: Lista Detalhada de Produtos */}
        <div className="card-checkout resumo">
          <h3>🛒 Itens Escolhidos</h3>
          
          {itensCarrinho.length === 0 ? (
            <p className="carrinho-vazio">Seu carrinho está vazio. Adicione livros nas outras páginas!</p>
          ) : (
            <div className="lista-itens-detalhada">
              {itensCarrinho.map((item, index) => (
                <div key={index} className="item-linha">
                  <span className="item-titulo">🔹 {item.titulo}</span>
                  <span className="item-preco">{item.preco}</span>
                </div>
              ))}
              
              <hr />
              
              <div className="valores-finais">
                <p>Subtotal: <span>R$ {subtotal.toFixed(2).replace('.', ',')}</span></p>
                <p>Frete Fixo: <span>R$ {frete.toFixed(2).replace('.', ',')}</span></p>
                <p className="total-destaque">Total Geral: <span>R$ {totalGeral.toFixed(2).replace('.', ',')}</span></p>
              </div>
            </div>
          )}
        </div>

        {/* Lado Direito: Formas de Pagamento */}
        <div className="card-checkout pagamentos">
          <h3>Formas de Pagamento</h3>
          
          <div className="metodo-pagamento">
            <span className="emoji-pagamento">⚡</span>
            <div>
              <strong>Pix</strong>
              <p>Aprovação imediata.</p>
            </div>
          </div>

          <div className="metodo-pagamento">
            <span className="emoji-pagamento">💳</span>
            <div>
              <strong>Cartão de Crédito</strong>
              <p>Em até 6x sem juros.</p>
            </div>
          </div>

          <button 
            className="btn-finalizar" 
            onClick={() => alert("Pedido recebido! Verifique seu e-mail para o pagamento.")}
            disabled={itensCarrinho.length === 0}
          >
            {itensCarrinho.length === 0 ? "Carrinho Vazio" : "Confirmar e Pagar 🚀"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sobre; 