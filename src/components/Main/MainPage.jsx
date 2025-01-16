import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css'; 

import screenshot1 from './images/3d.png'
import screenshot2 from './images/real.png'

const MainPage = () => {
  return (
    <div className="containerr">
      <header className="headerr">
      <Link to="/login">
          <button className="login-buttonn">Login</button>
      </Link>
      <Link to="/signup">
          <button className="signup-buttonn">Sign up</button>
      </Link>
      </header>

      <main className="main-content">
        <h1 className="titlee">Which method would you prefer for taking the measurements?</h1>
        <div className="optionss">
          <div className="option-card">
            <img
              src={screenshot1}
              alt="3D Body Model"
              className="option-image"
            />
            <button className="option-buttonn">3D Body Model</button>
          </div>

          <div className="option-card">
            <img
              src={screenshot2} 
              alt="Photo of a Real Body"
              className="option-image"
            />
            <button className="option-buttonn">Photo of a Real Body</button>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>
          By using VFR, you agree to our <a href="/terms">Terms</a> and have read our <a href="/privacy-policy">Privacy Policy</a>.
        </p>
      </footer>
    </div>
  );
};

export default MainPage;