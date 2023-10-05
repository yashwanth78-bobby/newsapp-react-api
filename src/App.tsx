import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './App.css';
import DetailPage from './components/pages/DetailPage/DetailPage';
import HomeComponent from './components/pages/HomePage/Home';
import NotFound from './components/pages/NotFound/notfound';
function App() {
  return (
    <>
      {/* <HomeComponent /> */}
      <Router>
        <Routes>
          <Route path='/' element={<HomeComponent />} />
          <Route path='/detail/:category' element={<DetailPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
