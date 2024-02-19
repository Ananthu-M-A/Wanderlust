import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import './index.css';
import Register from "./pages/Register";
import Login from "./pages/Login";
import AddHotel from "./components/AddHotel";
import { useAppContext } from "./contexts/AppContext";

function App() {
  const { isLoggedIn } = useAppContext();

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={
            <Layout>
              <p>Home Page</p>
            </Layout>} />

          <Route path="/hotels" element={
            <Layout>
              <p>Hotels Page</p>
            </Layout>} />

          <Route path="/register" element={
            <Layout>
              <Register />
            </Layout>} />

          <Route path="/login" element={
            <Layout>
              <Login />
            </Layout>} />

          {isLoggedIn && <>
            <Route path="/add-hotel" element={
              <Layout>
                <AddHotel />
              </Layout>} />
          </>}

          <Route path="*" element={<Navigate to="/" />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
