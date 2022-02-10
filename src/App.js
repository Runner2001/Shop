import './App.css';
import React from 'react';
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Product from './Pages/Product'
import SeeMore from './Pages/SeeMore';
import Contact from './Pages/Contact'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { products } from './Product'
import AddCart from './Pages/AddCart';
import store from './Redux/Store';
import { Provider } from 'react-redux';
import NoPage from './Pages/NoPage';


class App extends React.Component {
  state = {
    products: products,
    cart: [],
  }

  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
          <Switch>
            <Route path='/' component={Home} exact>
              <Home products={this.state.products} />
            </Route>
            <Route path='/product' >
              <Product />
            </Route>
            <Route path="/seemore/:id">
              <SeeMore
                products={this.state.products}
              />
            </Route>
            <Route path='/addcart'>
              <AddCart />
            </Route>
            <Route path='/contact' >
              <Contact />
            </Route>
            <Route path='*' component={NoPage} />
          </Switch>
        </Provider>
      </BrowserRouter>

    );
  }
}


export default App;