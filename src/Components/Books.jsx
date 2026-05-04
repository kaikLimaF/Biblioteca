import "./Books.css";
import { useState } from "react";
import harryPotterImg from '../assets/livro.png';
import senhoDoAneisImg from '../assets/livro9.png';
import harryPotterImg2 from '../assets/livro2.png';
import harryPotterImg3 from '../assets/livro3.png';
import harryPotterImg4 from '../assets/livro4.png';
import harryPotterImg5 from '../assets/livro5.png';
import harryPotterImg6 from '../assets/livro6.png';
import harryPotterImg7 from '../assets/livro7.png';
import georgeOrwellImg2 from '../assets/1984.png';
import pequenoPrincipeImg from '../assets/pequeno.png';
import georgeOrwellImg from '../assets/livro8.png';
const mockBooks = [
  {
    title: "Harry Potter e a Pedra Filosofal",
    author: "J.K. Rowling",
    image: harryPotterImg, 

  },
   {
    title: "Harry Potter e a Pedra Filosofal",
    author: "J.K. Rowling",
    image: harryPotterImg2, 

  },
   {
    title: "Harry Potter e a Pedra Filosofal",
    author: "J.K. Rowling",
    image: harryPotterImg3, 

  },
   {
    title: "Harry Potter e a Pedra Filosofal",
    author: "J.K. Rowling",
    image: harryPotterImg4, 

  },
   {
    title: "Harry Potter e a Pedra Filosofal",
    author: "J.K. Rowling",
    image: harryPotterImg5, 

  },
   {
    title: "Harry Potter e a Pedra Filosofal",
    author: "J.K. Rowling",
    image: harryPotterImg6, 

  },
   {
    title: "Harry Potter e a Pedra Filosofal",
    author: "J.K. Rowling",
    image: harryPotterImg7, 

  },
  {
    title: "O Senhor dos Anéis",
    author: "J.R.R. Tolkien",
    image:
    senhoDoAneisImg,
  },
 
   {
    title: "A Revolução dos Bichos",
    author: "George Orwell",
    image:
    georgeOrwellImg,
  },
  {
    title: "O Pequeno Príncipe",
    author: "Antoine de Saint-Exupéry",
    image: 
    pequenoPrincipeImg,
  },
  {
    title: "1984",
    author: "George Orwell",
    image:
    georgeOrwellImg2,
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
