import "./App.css";
import Login from "./components/Login";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import SellersInfo from "./components/SellersInfo";
import ListProducts from "./components/ListProducts";
import Nav from "./shared/Nav";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Link to="/"></Link>
        <Link to="infovendedores"></Link>

        <Switch>
          <Route path="/" exact>
            <Login />
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
