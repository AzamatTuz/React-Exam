import { useState } from "react"
import "../App.css"
import { useNavigate } from "react-router-dom"

export default function Login() {
    let navigate = useNavigate()

    const [error, setError] = useState()
    const [email, setEmail] = useState()
    const [pass, setPass] = useState()
    
    function formVali(e) {
        e.preventDefault()

        if (email == "" && pass == "") {
            setError('Все поля должны быть заполнены    ')
        } else if (!email.includes('@')) {
            setError('В почте нету символа @')
        } else if (pass.length < 4) {
            setError('Пороль должен быть длинее')
        } else {
            navigate('/home')
        }

    }

    return(
        <form onSubmit={formVali}>
            <h1>Welcome</h1>
            <input onChange={(e) => setEmail(e.target.value)} placeholder="Email..." type="text" />
            <input onChange={(e) => setPass(e.target.value)} placeholder="Password" type="password" />
            <p className="error">{error ? error : ""}</p>
            <button type="submit">Submit</button>
        </form>
    )
}