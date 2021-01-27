import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
       <Header/ >
      <Switch>
        <Route exact path="/" > <Posts /></Route>
        <Route path="/about"><About /></Route>
        <Route path="*"><NotFound /></Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
