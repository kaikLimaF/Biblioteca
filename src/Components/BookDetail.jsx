import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { mockBooks } from "../data";
import "./BookDetail.css";

const BookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // Estado para controlar a visibilidade do Toast
  const [showToast, setShowToast] = useState(false);

  const book = mockBooks.find((b) => b.id === id);

  if (!book) {
    return (
      <div className="book-detail-wrapper">
        <div className="book-detail-card">
          <Link to="/books" className="back-link">
            ← Voltar
          </Link>
          <h1>Livro não encontrado.</h1>
        </div>
      </div>
    );
  }

  // Função que lida com o clique do botão
  const handleRent = () => {
    // 1. Mostra a mensagem bonita
    setShowToast(true);

    // 2. Aguarda 2 segundos (2000ms) e então redireciona
    setTimeout(() => {
      navigate("/books");
    }, 2000);
  };

  return (
    <div className="book-detail-wrapper">
      {/* Notificação flutuante (Toast) */}
      {showToast && (
        <div className="custom-toast">✓ Livro adicionado ao carrinho!</div>
      )}

      <div className="book-detail-card">
        <Link to="/books" className="back-link">
          ← Voltar para a lista
        </Link>
        <div className="book-detail-main">
          <img
            src={book.image}
            alt={book.title}
            className="book-detail-image"
          />
          <div className="book-detail-content">
            <h1 className="book-detail-title">{book.title}</h1>
            <p className="book-detail-author">{book.author}</p>
            <h2 className="book-detail-description-title">Sinopse</h2>
            <p className="book-detail-description">{book.description}</p>

            <p
              className="book-detail-price"
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginTop: "15px",
              }}
            >
              Valor do Aluguel: R${" "}
              {book.price ? book.price.toFixed(2).replace(".", ",") : "0,00"}
            </p>
          </div>
        </div>

        {/* Substituímos a lógica direta pela função handleRent */}
        <button
          className="btn-rent-detail"
          onClick={handleRent}
          disabled={
            showToast
          } /* Opcional: desabilita o botão enquanto aguarda o redirecionamento */
        >
          {showToast ? "Adicionando..." : "Alugar este livro"}
        </button>
      </div>
    </div>
  );
};

export default BookDetail;
