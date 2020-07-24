import axios from 'axios'
// import {useRouter} from 'next/router'
import {useState} from 'react'

export default function loginPage() {
    // const router = useRouter()
    // const [query, setQuery] = useState("default")

    const [incorrectCreds, setIncorrectCreds] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        const username = event.target.uname.value
        const password = event.target.psw.value
        console.log(username, password)

        axios
        .post(process.env.NEXT_PUBLIC_API_URL + "/auth/local", {
            identifier: username,
            password: password
        })
        .then(response => {
            console.log("Well Done")
            console.log('User profile', response.data.user)
            console.log('User token', response.data.jwt)
            setIncorrectCreds(false)
        })
        .catch(error => {
            // Handle error.
            console.log('An error occurred:', error.response);
            setIncorrectCreds(true)
        });
    }
    
    return(
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <lable htmlFor="uname"><b>Username</b></lable>
                    <input type="text" placeholder="Enter Username" name="uname" required></input>

                    <lable htmlFor="psw"><b>Password</b></lable>
                    <input type="password" placeholder="Enter Password" name="psw" required></input>

                    <button type="submit">Login</button>
                </div>
                {incorrectCreds &&
                    <div>Wrong username/password</div>
                }
            </form>
        </>
    )
}