import "./Login.css";
import { Link } from "react-router-dom";

// Reutilizando o componente de campo de entrada para consistência
const InputField = ({ icon, type, placeholder }) => (
  <div className="input-group">
    <span className="input-icon">{icon}</span>
    <input type={type} placeholder={placeholder} className="form-input" />
  </div>
);

const SignUpForm = ({ onRegisterSuccess }) => {
  return (
    <div className="login-wrapper">
      <div className="login-card">
        {/* Cabeçalho identico ao Login */}
        <div className="login-header">
          <div className="logo-section">
            <span className="logo-icon">📚</span>
            <div>
              <div className="logo-text">BOOK</div>
              <div className="logo-text sub">SHARE</div>
            </div>
          </div>
          <h2 className="login-title">Create your account</h2>
        </div>

        {/* Formulário de Cadastro */}
        <form className="login-form">
          <InputField icon="👤" type="text" placeholder="Full Name" />
          <InputField icon="✉" type="email" placeholder="Email Address" />
          <InputField icon="🔒" type="password" placeholder="Password" />
          <InputField
            icon="🔒"
            type="password"
            placeholder="Confirm Password"
          />

          <button
            type="button"
            className="btn-login"
            style={{ marginTop: "10px" }}
            onClick={onRegisterSuccess}
          >
            REGISTER
          </button>
        </form>

        {/* Rodapé para voltar ao Login */}
        <div className="login-footer">
          <p className="signup-text">
            Already have an account?{" "}
            <Link to="/login" className="signup-link">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
