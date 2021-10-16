import { useAuth0 } from "@auth0/auth0-react";
import './App.css';
import Nav from './shared/Nav'
import Home from '../src/components/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SistemaGestion from './components/SistemaGestion'
import ListProducts from "./components/ListProducts";
import Logout from './components/Logout'
import Product from "./components/Product";
import AgregarUsuario from "./components/AgregarUsuario";

import AgregarVentas from "./components/AgregarVentas";




function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <> 
      <BrowserRouter>
        
        <Nav />
        {isAuthenticated ? (<><SistemaGestion /><Logout /></>) : (<Home />)}

          <Switch>
            
              
              <Route path="/AgregarUsuario">
              <AgregarUsuario />
              </Route>

              <Route path="/list-products">
                <ListProducts />
              </Route>


              <Route path="/AgregarVentas">

                <AgregarVentas />
              </Route>

              <Route exact path="/product/:id" component={Product} />

              
          </Switch>

      </BrowserRouter>
    </>
  );
}

export default App;
