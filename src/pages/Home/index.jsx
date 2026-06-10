import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: '#fdfbf7', minHeight: '60vh' }}>
      <h2 style={{ fontSize: '36px', color: '#2c3e50', fontFamily: 'Georgia, serif' }}>Alimente a sua fé diariamente</h2>
      <p style={{ fontSize: '18px', color: '#7f8c8d', maxWidth: '600px', margin: '20px auto', lineHeight: '1.6' }}>
        Encontre as melhores Bíblias de estudo, Harpas, Devocionais e grandes clássicos da literatura cristã para o seu crescimento espiritual.
      </p>
      <Link to="/produtos" style={{
        display: 'inline-block',
        backgroundColor: '#8e24aa',
        color: '#fff',
        padding: '14px 35px',
        borderRadius: '5px',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '16px',
        marginTop: '25px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        Ver Catálogo de Livros
      </Link>
    </div>
  );
}

export default Home;