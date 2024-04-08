import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LogoutPage from './pages/LogoutPage';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import ListPage from './pages/ListPage';
import WritePage from './pages/WritePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="list/:category" element={<ListPage />} />
          <Route path="write" element={<WritePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
