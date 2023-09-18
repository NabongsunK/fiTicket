import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./components/layout";
import Deal from "./pages/deals";
import Login from "./pages/login";

import festivals from "./data/_festivals.json";
import { Provider } from "react-redux";
import store from "./store/store";
import Signup from "./pages/signup";
import Explore from "./pages/explore";
import Teams from "./pages/teams";
import Geoljae from "./pages/geuljae";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/deals" element={<Deal festivals={festivals} />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/test" element={<Geoljae />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
