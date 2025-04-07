import Header from "./Header";
import "../App.css"
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function BookDetail() {
    const { id } = useParams()
    const [detail, setDetail] = useState()
    useEffect(() => {
        async function getMore() {
            try {
                const res = await axios.get(`https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/books/${id}`)
                setDetail(res.data)
                console.log(res.data);
            } catch (error) {
                console.error(error);
                
            }
            
        }

        getMore()
    }, [])
    
    return(
        <>
        
            <Header/>

            <main className="mainDetail">
                {detail ? <section>
                    <img src={detail.image} alt="" />
                    <article>
                        <h1>{detail.title}</h1> 
                        <h3>Автор: {detail.author}</h3>
                        <p>{detail.description}</p>
                        <Link to={"/library"} className="more">Назад</Link>
                    </article>
                </section> : "404"}
            </main>
        
        </>
    );
}