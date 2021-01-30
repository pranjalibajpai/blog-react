import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';
import Post from './components/Posts/Post';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Create from './components/Create/Create';

import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
       <Header/ >
      <Switch>
        <Route exact path="/" > <Posts /></Route>
        <Route exact path="/posts"><Posts /></Route>
        <Route path="/posts/:id"><Post /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/create"><Create /></Route>
        <Route path="*"><NotFound /></Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
