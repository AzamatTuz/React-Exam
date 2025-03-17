import Login from "./components/Login";
import "./App.css"
import { useState } from "react";
import Main from "./components/Main";


export default function App() {

  const [page, setPage] = useState('main')
  
  return(
    <>
      <header>
            <img src="https://img.freepik.com/premium-vector/vector-colorful-logo-design_1002026-45.jpg" alt="" className="logo" />
            <nav className="links">
                <a onClick={() => setPage('main')} href="#">Home</a>
                <a onClick={() => setPage('login')} href="#">Login</a>
            </nav>
        </header>

      <Main style={page == 'main' ? 'flex' : 'none'}/>            
      <Login style={page == 'login' ? 'flex' : 'none'}/>
    
    </>
  );
}