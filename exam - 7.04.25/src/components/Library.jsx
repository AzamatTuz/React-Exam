import axios from "axios";
import Header from "./Header";
import { useEffect, useState } from "react";
import "../App.css"
import { Link } from "react-router-dom";

export default function Library() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        async function getData() {
            const res = await axios.get("https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/books")
            setBooks(res.data)
            console.log(res.data);
            
            
        }

        getData()
    }, [])

    return(
    
    <>
    
        <Header/>

        <main className="mainLibrary">
            {books.map((book) => (
                <div key={book.id} className="card">
                    <h2>{book.title}</h2>
                    <img src={book.image} alt="" />
                    <Link to={`/detail/${book.id}`} className="more" >View Details</Link>
                  </div>
            ))}
        </main>
    
    </>
    )
}