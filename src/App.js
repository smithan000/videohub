import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Video from "./components/Video";
import Upload from "./components/Upload";
import Signup from "./components/Signup";
import Login from "./components/Login";
function App() {
  return (
    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/videos" element={<Video/>}/>
        <Route path="/upload" element={<Upload/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;
