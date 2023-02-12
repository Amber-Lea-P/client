import logo from './logo.svg';
import './App.css';
import Header from './components/layouts/Header';
import Landing from './components/layouts/Landing';
import Footer from './components/layouts/Footer';
import { Routers } from './components/routers/Routers';
import { BrowserRouter as Router } from 'react-router-dom';

// redux import statements
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  const appName = "UpgradeConnector";
  return (
    <>
    <Provider store={store}>
      <Router>
      <Header appName={appName}></Header>
      <Routers></Routers>
      <Footer appName={appName}></Footer>
      </Router>
    </Provider>
    </>
  );
}

export default App;
