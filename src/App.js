import './App.css';
import Contact from './components/Contact';
import Login from './components/Login';
import Nav from './components/Nav';
import SellersInfo from './components/SellersInfo';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Login/>
      <Contact/>
      <SellersInfo/>
    </div>
  );
}

export default App;
