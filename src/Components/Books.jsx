import "./Books.css";
import { useState } from "react";

// --- Dados de exemplo (Mock Data) ---
// Colocamos os livros aqui para usar no lugar da API
const mockBooks = [
  {
    title: "O Senhor dos Anéis",
    author: "J.R.R. Tolkien",
    image:
      "https://upload.wikimedia.org/wikipedia/pt/thumb/c/c8/O_Senhor_dos_An%C3%A9is_-_A_Sociedade_do_Anel.jpg/250px-O_Senhor_dos_An%C3%A9is_-_A_Sociedade_do_Anel.jpg",
  },
  {
    title: "Dom Quixote",
    author: "Miguel de Cervantes",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/El_ingenioso_hidalgo_don_Quijote_de_la_Mancha.jpg/220px-El_ingenioso_hidalgo_don_Quijote_de_la_Mancha.jpg",
  },
  {
    title: "1984",
    author: "George Orwell",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/1984first.jpg/220px-1984first.jpg",
  },
  {
    title: "O Pequeno Príncipe",
    author: "Antoine de Saint-Exupéry",
    image: "https://upload.wikimedia.org/wikipedia/pt/a/a3/Le_Petit_Prince.jpg",
  },
  {
    title: "A Revolução dos Bichos",
    author: "George Orwell",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Animal_Farm_-_1st_edition.jpg/220px-Animal_Farm_-_1st_edition.jpg",
  },
  {
    title: "Cem Anos de Solidão",
    author: "Gabriel García Márquez",
    image:
      "https://upload.wikimedia.org/wikipedia/pt/thumb/e/e8/Cien_a%C3%B1os_de_soledad.jpg/200px-Cien_a%C3%B1os_de_soledad.jpg",
  },
  {
    title: "O Apanhador no Campo de Centeio",
    author: "J.D. Salinger",
    image:
      "https://upload.wikimedia.org/wikipedia/pt/thumb/c/ce/Apanhador_no_Campo_de_Centeio.jpg/230px-Apanhador_no_Campo_de_Centeio.jpg",
  },
  {
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    image:
      "https://upload.wikimedia.org/wikipedia/pt/thumb/9/98/Fahrenheit451.jpg/230px-Fahrenheit451.jpg",
  },
];

const Books = () => {
  // Usamos um estado para controlar qual item do menu está ativo
  const [activeTab, setActiveTab] = useState("Fiction"); // Começar com uma categoria

  // Agora, os livros vêm da nossa lista de exemplo
  const books = mockBooks;

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
                {books.map((book, index) => (
                  <div className="book-card" key={index}>
                    <img
                      src={book.image || "https://via.placeholder.com/128x192"}
                      alt={book.title}
                    />
                    <h3>{book.title}</h3>
                    <p>{book.author}</p>
                    <button>Rent</button>
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
