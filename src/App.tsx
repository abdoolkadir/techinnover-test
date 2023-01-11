import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from './components/Container';
import SignUpPage from './pages/SignUpPage';
import Login from './pages/Login';
import Home from './pages/Home';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Container>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </Container>
    </>
  );
}

export default App;
