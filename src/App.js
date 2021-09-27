import './App.css';
import Login from './components/Login';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import SellersInfo from './components/SellersInfo';

function App() {
  return (
    <BrowserRouter>
      
      <Link to="/"></Link>
      <Link to="infovendedores"></Link>

      <Switch>
        <Route path="/" exact>
          <Login/>
        </Route>
        
        <Route path="/infovendedores" >
          <SellersInfo/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
