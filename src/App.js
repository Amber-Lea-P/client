import logo from './logo.svg';
import './App.css';
import Header from './components/layouts/Header';
import Landing from './components/layouts/Landing';
import Footer from './components/layouts/Footer';
import { Routers } from './components/routers/Routers';
import { BrowserRouter as Router } from 'react-router-dom';



function App() {
  return (
    <>
    <Router>
    <Header></Header>
    <Routers></Routers>
    <Footer></Footer>
    </Router>
    </>
  );
}

export default App;
