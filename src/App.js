import logo from './logo.svg';
import './App.css';
import Header from './components/layouts/Header';
import Landing from './components/layouts/Landing';
import Footer from './components/layouts/Footer';
import { Routers } from './components/routers/Routers';
import { BrowserRouter as Router } from 'react-router-dom';



function App() {
  const appName = "UpgradeConnector";
  return (
    <>
    <Router>
    <Header appName={appName}></Header>
    <Routers></Routers>
    <Footer appName={appName}></Footer>
    </Router>
    </>
  );
}

export default App;
