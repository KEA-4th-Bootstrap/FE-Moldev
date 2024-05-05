import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LogoutPage from './pages/LogoutPage';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import ListPage from './pages/ListPage';
import WritePage from './pages/WritePage';
import ArticlePage from './pages/ArticlePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route path="/island/:moldevId" element={<MainPage />}>
          <Route path="write" element={<WritePage />} />
          <Route path=":category" element={<ListPage />} />
          <Route path="article/:articleId" element={<ArticlePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
