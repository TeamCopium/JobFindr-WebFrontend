import './App.css';
import {BrowserRouter,Routes, Route} from "react-router-dom"
import Loadingscreen from './components/Loadingscreen';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import FileUpload from "./components/FileUpload/FileUpload"

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>

    <Route path="/" element={<Loadingscreen/>}>
    </Route>

    <Route path="/register" element={<Signup/>}>
    </Route>

    <Route path="/login" element={<Login/>}>

    </Route>

    <Route path="/fileupload" element={<FileUpload/>}/>
    <Route path="/findjobs">
    </Route>

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
