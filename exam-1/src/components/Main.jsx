import { useEffect, useState } from "react";

export default function Main({style}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isLoged, setLoged] = useState("")

    useEffect(() => {
        let newName = localStorage.getItem('name');
        let newEmail = localStorage.getItem('email');
        let isLog = localStorage.getItem("isLog");


        if (newName) {
            setName(newName)
        }

        if (newEmail) {
            setEmail(newEmail)
        }

        if (isLog) {
            setLoged(isLog)
        }

    }, [])

    useEffect(() => {
        localStorage.setItem('isLog', isLoged)    
    }, [isLoged]);

    function removeUser() {
        localStorage.removeItem('users')
    }

    return(
        <main style={{display: `${style}`}}>
            <div className={isLoged === 'true' ? 'pokazat' : 'nepokazat'}>
                <h1>{name}</h1>
                <h2>{email}</h2>
                
                <button onClick={removeUser}>Remove</button>
                <button onClick={() => setLoged('false')}>Log out</button>
            </div>

            <div className={isLoged !== 'true' ? 'pokazat' : 'nepokazat'}>
                <h1>Авторизуйся</h1>
            </div>
            
        </main>
    );
}