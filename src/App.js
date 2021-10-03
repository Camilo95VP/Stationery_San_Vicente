import { useAuth0 } from "@auth0/auth0-react";
import './App.css';
import Nav from './shared/Nav'
import Home from '../src/components/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SistemaGestion from './components/SistemaGestion'
import SellersInfo from './components/SellersInfo';
import ListProducts from "./components/ListProducts";
import Logout from './components/Logout'
import Ventas from './components/Ventas'



function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <>
    
      <BrowserRouter>
      
        <Nav />        
       
        <Switch>
          <Route path="/" exact>
            <Home />
            
          </Route>
          <Route path="/SistemaGestion">
          {isAuthenticated ? (
          <>
            
            <SistemaGestion />
         
            
            <Logout />
          </>
        ) : (
           <Home />
        )}
        </Route>
          <Route path="/Ventas">
            <Ventas />
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
