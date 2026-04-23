import { useState } from "react";
import "./Books.css";

const Dashboard = () => {
  // Usamos um estado para controlar qual item do menu está ativo
  const [activeTab, setActiveTab] = useState("Academic");

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-container">
        {/* Barra Lateral (Sidebar) */}
        <aside className="sidebar">
          <div className="logo-container">
            <span className="logo-icon">📚</span>
            <div className="logo-text">
              <span className="logo-title">BOOK</span>
              <span className="logo-subtitle">SHARE</span>
            </div>
          </div>

          <nav className="nav-menu">
            <ul>
              {["Fiction", "Non-Fiction", "Academic", "New Arrivals"].map(
                (item) => (
                  <li
                    key={item}
                    className={activeTab === item ? "active" : ""}
                    onClick={() => setActiveTab(item)}
                  >
                    {item}
                  </li>
                ),
              )}
            </ul>
          </nav>
        </aside>

        {/* Conteúdo Principal (Direita) */}
        <main className="main-content">
          {/* Cabeçalho Escuro */}
          <header className="top-header">
            <div className="search-bar">
              <span className="search-icon">🔍</span>
              <input type="text" placeholder="Search..." />
            </div>

            <div className="header-actions">
              <button className="icon-btn">👤</button>
              <button className="icon-btn notification">
                🔔<span className="badge"></span>
              </button>
              <div className="user-avatar"></div>
            </div>
          </header>

          {/* Área Principal com o Banner */}
          <section className="content-area">
            <div className="featured-banner">
              <div className="banner-content">
                <span className="banner-icon">📚</span>
                <h1>Featured Books</h1>
              </div>
              {/* O fundo do banner e as ilustrações de mãos/livros 
                  geralmente seriam colocados via CSS background-image aqui */}
            </div>

            {/* O espaço dos livros foi deixado intencionalmente vazio, 
                conforme solicitado. */}
            <div className="empty-books-area">{/* Vazio */}</div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
