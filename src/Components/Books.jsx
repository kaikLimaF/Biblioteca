import "./Books.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { mockBooks } from "../data";

const Books = () => {
  // Usamos um estado para controlar qual item do menu está ativo
  const [activeTab, setActiveTab] = useState("Fiction"); // Começar com uma categoria

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
              {["Ficção", "Não-Ficção", "Academic"].map((item) => (
                <li
                  key={item}
                  className={activeTab === item ? "active" : ""}
                  onClick={() => setActiveTab(item)}
                >
                  {item}
                </li>
              ))}
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
              <button className="icon-btn notification"></button>
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
            <div className="books-section">
              <div className="books-grid">
                {/* Como não há mais carregamento, podemos mapear os livros diretamente */}
                {mockBooks.map((book) => (
                  <div className="book-card" key={book.id}>
                    <img
                      src={book.image || "https://via.placeholder.com/128x192"}
                      alt={book.title}
                    />
                    <h3>{book.title}</h3>
                    <p>{book.author}</p>
                    <Link to={`/book/${book.id}`}>
                      <button>Rent</button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Books;
