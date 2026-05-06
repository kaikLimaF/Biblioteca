import { useParams, Link } from "react-router-dom";
import { mockBooks } from "../data";
import "./BookDetail.css";

const BookDetail = () => {
  const { id } = useParams();
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

  return (
    <div className="book-detail-wrapper">
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
          </div>
        </div>
        <button className="btn-rent-detail">Alugar este livro</button>
      </div>
    </div>
  );
};

export default BookDetail;
