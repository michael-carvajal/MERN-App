import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Signup from './pages/Signup';
import Login from './pages/Login';
import InterviewForm from './pages/InterviewForm';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/signup"
              element={<Signup />}
            />
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/new/interview"
              element={<InterviewForm />}
            />
          </Routes>
        </div> */}
        <h1>Hello world</h1>
      </BrowserRouter>
    </div>
  );
}

export default App;
