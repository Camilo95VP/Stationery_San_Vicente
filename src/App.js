import "./App.css";
import Nav from "./shared/Nav";
import Home from "../src/components/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SellersInfo from "./components/SellersInfo";
import ListProducts from "./components/ListProducts";
import SistemaGestion from "./components/SistemaGestion";
import Product from "./components/Product";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/SistemaGestion" exact>
            <SistemaGestion />
          </Route>

          <Route path="/infovendedores">
            <SellersInfo />
          </Route>

          <Route path="/list-products">
            <ListProducts />
          </Route>

          <Route exact path="/product/:id" component={Product} />

          <Route path="*" component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
