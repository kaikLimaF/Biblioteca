import "./Login.css";
import { Link } from "react-router-dom";

// Componente para um campo de entrada com ícone
const InputField = ({ icon, type, placeholder }) => (
  <div className="input-group">
    <span className="input-icon">{icon}</span>
    <input type={type} placeholder={placeholder} className="form-input" />
  </div>
);

// Componente para os botões de login social
const SocialButton = ({ src, alt }) => (
  <button className="social-button">
    <img src={src} alt={alt} />
  </button>
);

const LoginForm = ({ onLoginSuccess }) => {
  return (
    <div className="login-wrapper">
      <div className="login-card">
        {/* Cabeçalho */}
        <div className="login-header">
          <div className="logo-section">
            <span className="logo-icon">📚</span>
            <div>
              <div className="logo-text">BOOK</div>
              <div className="logo-text sub">SHARE</div>
            </div>
          </div>
          <h2 className="login-title">Log in to your account</h2>
        </div>

        {/* Formulário */}
        <form className="login-form">
          <InputField icon="✉" type="text" placeholder="Email or Username" />
          <InputField icon="🔒" type="password" placeholder="Password" />

          <div className="forgot-password-container">
            <a href="#" className="forgot-password">
              Forgot password?
            </a>
          </div>

          <button type="button" className="btn-login" onClick={onLoginSuccess}>
            LOGIN
          </button>
        </form>

        {/* Rodapé */}
        <div className="login-footer">
          <p className="signup-text">
            Don't have an account?{" "}
            <Link to="/signup" className="signup-link">
              Sign Up
            </Link>
          </p>
          <div className="quick-login">
            <p>Quick login with Google</p>
            <div className="social-icons">
              {/* Substitua os URLs das imagens pelos caminhos corretos */}
              <SocialButton
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google"
              />
              <SocialButton
                src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg"
                alt="Facebook"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
