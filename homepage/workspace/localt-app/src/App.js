import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home";
import Layout from './components/layout';
import Books from './pages/books';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/books" element={<Books />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
