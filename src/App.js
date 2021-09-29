import './App.css';
import Nav from './shared/Nav'
import Home from '../src/components/Home'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import SellersInfo from './components/SellersInfo';

function App() {
  return (
    <BrowserRouter>
      
      <Link to="/"></Link>
      <Link to="infovendedores"></Link>

      <Switch>
        <Route path="/" exact>
          <Nav/>
          <Home/>
        </Route>
        
        <Route path="/infovendedores" >
          <SellersInfo/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
