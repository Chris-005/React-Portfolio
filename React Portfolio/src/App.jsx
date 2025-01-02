import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const [active, setActive] = useState("About");

  const renderContent = () => {
    switch (active) {
      case "About":
        return <About />
      case "Services":
        return <Services />
      case "Portfolio":
        return <Portfolio />
      case "Contact":
        return <Contact />
      default:
        return <About />
    }
  };

  return (
    <section id="header">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="header-content">
              <h1>React Portfolio</h1>
              <p>React Portfolio is a simple and easy to use portfolio template for developers. It is a fully responsive template that looks good on any device.</p>
              <a href="#about" className="btn">Get Started</a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="header-image">
              <img src={reactLogo} alt="React Logo" />
            </div>
          </div>
        </div>
      </div>
      <div className="header-overlay"></div>
    </section>
  );
};

export default App
