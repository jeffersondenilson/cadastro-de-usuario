import { BrowserRouter } from 'react-router-dom';
import Logo from './components/template/Logo';
import Nav from './components/template/Nav';
import Home from './components/home/Home';
import Footer from './components/template/Footer';
import './App.css';

function App() {
  return (
  	<BrowserRouter>
	    <div className="app">
	      <Logo />
	      <Nav />
	      <Routes />
	      <Footer />
	    </div>
    </BrowserRouter>
  );
}

export default App;
