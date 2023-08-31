import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Signup from './pages/Signup';
import Login from './pages/Login';
// import InterviewForm from './pages/InterviewForm';

//     <Route
//       path="/new/interview"
//       element={<InterviewForm />}
//     />
//   </Routes>
const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/signup"
              element={<Signup />}
            />

            <Route
              path="/login"
              element={<Login />}
            />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;