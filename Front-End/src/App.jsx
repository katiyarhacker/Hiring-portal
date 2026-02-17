
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage.jsx";
import Forget_pass from './components/Forget_pass.jsx';
import Employer from "./components/Employer.jsx";

const App = () => {
    return (

       <BrowserRouter>
      <Routes>
        
        <Route path="/Employer" element={<Employer />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forget-pass" element={<Forget_pass />} />
      </Routes>
    </BrowserRouter>

    );
};

export default App;