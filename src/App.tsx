import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LogoutPage from './pages/LogoutPage';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import ListPage from './pages/ListPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="list/:category" element={<ListPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
