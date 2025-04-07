import { Link } from "react-router-dom";

export default function Header() {
    return(
        <header>
            <img src="https://t3.ftcdn.net/jpg/05/11/31/44/360_F_511314471_DNmKOdRIS3mp5pgg4OfIW2NtLNSBrieN.jpg" alt="" className="logo" />
        
            <nav>
                <Link className="link" to={"/home"}>Home</Link>
                <Link className="link" to={"/library"}>Library</Link>
            </nav>
        </header>
    )
}