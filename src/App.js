import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header/ >
      <Posts />
      <Footer />
    </div>
  );
}

export default App;
