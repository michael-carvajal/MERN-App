import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Signup from './pages/Signup';
import Login from './pages/Login';
import InterviewForm from './pages/InterviewForm';

//   </Routes>
const App: React.FC = () => {
  return (
    <div className='w-3/4 border-red-300 mx-auto my-0 border-2 bg-slate-700 h-fit min-h-[500px]
    flex-col flex'>
      <BrowserRouter>
        <Navbar />
        <main className=" bg-slate-600 p-6 h-full ">
          <Routes>
            <Route
              path="/signup"
              element={<Signup />}
            />

            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/new/interview"
              element={<InterviewForm />}
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
