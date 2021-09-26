import './App.css';
import Contact from './components/Contact';
import Login from './components/Login';
import Nav from './components/Nav';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Login/>
      <Contact/>
    </div>
  );
}

export default App;
