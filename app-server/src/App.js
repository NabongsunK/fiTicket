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

import TicketBody from "./pages/explore/TicketBody";
import TicketDetail from "./pages/explore/TicketDetail";
import Review from "./pages/writeReview";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/deals" element={<Deal festivals={festivals} />} />
            <Route path="/explore" element={<Explore />}>
              <Route index element={<TicketBody />} />
              <Route path=":id" element={<TicketDetail />}>
                <Route path="review" element={<Review />} />
              </Route>
            </Route>
            <Route path="/teams" element={<Teams />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/review" element={<Review />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
