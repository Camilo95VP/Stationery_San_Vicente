import './App.css';
import Nav from './shared/Nav'
import Home from '../src/components/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SellersInfo from './components/SellersInfo';
import ListProducts from "./components/ListProducts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/infovendedores">
            <SellersInfo />
          </Route>

          <Route path="/list-products">
            <ListProducts />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
