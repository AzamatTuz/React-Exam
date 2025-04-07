import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Library from "./components/Library";
import { useState } from "react";
import BookDetail from "./components/BookDetails";


export default function App() {

  const [detail, setDetail] = useState()

  
  return(

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login /> } />
        <Route path="/home" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/detail/:id" element={<BookDetail />} />
      </Routes>
    </BrowserRouter>
  )
}