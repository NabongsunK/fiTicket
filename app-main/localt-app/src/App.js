import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home";
import Layout from './components/layout';
import Books from './pages/books';
import Deal from './pages/deals';
import About from './pages/about';
import Login from './pages/login';

import festivals from './data/festivals.json';
import { Provider } from 'react-redux';
import store from './store/store'
import Signup from './pages/signup';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/deals" element={<Deal festivals={festivals} />} />
            <Route path="/books" element={<Books />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
