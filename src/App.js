import './App.css';
import {BrowserRouter,Routes, Route} from "react-router-dom"
import Loadingscreen from './components/Loadingscreen';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import FileUpload from "./components/FileUpload/FileUpload"
import Homescreen from './components/Homescreen/Homescreen';
import OrganizationSignup from './components/Signup/OrganizationSignup';
import OrganizationLogin from './components/Login/OrganizationLogin';
import Admin from "./components/AdminDashboard/Admin"

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>

    <Route path="/" element={<Loadingscreen/>}/>
    <Route path="/register" element={<Signup/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/fileupload" element={<FileUpload/>}/>
    <Route path="/findjobs" element={<Homescreen/>}/>
    <Route path="/organization/signup" element={<OrganizationSignup/>}/>
    <Route path="/organization/login" element={<OrganizationLogin/>}/>
    <Route path="/admin/dashboard" element={<Admin/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
