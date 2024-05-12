import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LogoutPage from './pages/LogoutPage';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import WritePage from './pages/WritePage';
import ArticlePage from './pages/ArticlePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="write" element={<WritePage />} />
          <Route path="island/:moldevId">
            <Route path=":articleId" element={<ArticlePage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
