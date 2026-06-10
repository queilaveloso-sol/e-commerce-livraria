function Produtos() {
  const produtos = [
    { id: 1, nome: "Bíblia de Estudo Almeida Corrigida Fiel", preco: "R$ 98,90", cat: "Bíblia" },
    { id: 2, nome: "Cristianismo Puro e Simples - C.S. Lewis", preco: "R$ 44,90", cat: "Literatura" },
    { id: 3, nome: "Bíblia Leitura Perfeita Espiral", preco: "R$ 79,90", cat: "Bíblia" },
    { id: 4, nome: "Café com Deus Pai 2026 - Devocional", preco: "R$ 59,90", cat: "Devocional" }
  ];

  return (
    <div style={{ padding: '40px 20px', backgroundColor: '#faf8f5', minHeight: '80vh' }}>
      <h2 style={{ textAlign: 'center', color: '#2c3e50', fontSize: '28px', marginBottom: '30px', fontFamily: 'Georgia, serif' }}>
        Bíblias e Livros Disponíveis
      </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '25px', justifyContent: 'center' }}>
        {produtos.map(item => (
          <div key={item.id} style={{
            border: '1px solid #e8e4dc',
            padding: '20px',
            borderRadius: '8px',
            width: '240px',
            backgroundColor: '#fff',
            boxShadow: '0 4px 10px rgba(0,0,0,0.03)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <span style={{ fontSize: '11px', color: '#95a5a6', textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: '1px' }}>{item.cat}</span>
            <h3 style={{ fontSize: '16px', margin: '12px 0', color: '#34495e', height: '45px', overflow: 'hidden' }}>{item.nome}</h3>
            <p style={{ color: '#8e24aa', fontWeight: 'bold', fontSize: '20px', margin: '10px 0' }}>{item.preco}</p>
            <button style={{
              backgroundColor: '#2c3e50',
              color: '#fff',
              border: 'none',
              padding: '10px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold',
              width: '100%',
              marginTop: 'auto'
            }} onClick={() => alert('Direcionando para o WhatsApp da Livraria!')}>
              Pedir pelo WhatsApp
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Produtos;