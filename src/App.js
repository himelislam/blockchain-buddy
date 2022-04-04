import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer'
import { createContext } from 'react';
import useReviews from './hooks/useReviews';
import ReviewPage from './components/ReviewPage/ReviewPage';
import Dashboard from './components/Dashboard/Dashboard';
import Blogs from './components/Blogs/Blogs';

export const ReviewContext = createContext('reviews');

function App() {

  const [reviews, setReviews] = useReviews();

  return (
    <ReviewContext.Provider value={[reviews, setReviews]}>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/review" element={<ReviewPage></ReviewPage>}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </ReviewContext.Provider>
  );
}

export default App;
