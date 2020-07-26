import axios from 'axios'
// import {useRouter} from 'next/router'
import { useState } from 'react'
import { useCookies } from 'react-cookie'

export default function loginPage() {
  // const router = useRouter()
  // const [query, setQuery] = useState("default")

  const [credentialError, setCredentialError] = useState('')
  const [cookies, setCookie, removeCookie] = useCookies(['user', 'jwt'])


  const handleSubmit = (event) => {
    event.preventDefault()
    const username = String(event.target.uname.value)
    const password = String(event.target.psw.value)

    console.log(username, password)

    axios
      .post(process.env.NEXT_PUBLIC_API_URL + "/auth/local", {
        identifier: username,
        password: password
      })
      .then(response => {
        console.log("Sucessfully logged in")
        setCredentialError('')
        console.log('cookies', cookies)
        setCookie('user', response.data.user, {path:'/', sameSite:'lax'})
        setCookie('jwt', response.data.jwt, {path:'/', sameSite: 'strict'})
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          setCredentialError(error.response.data.message[0].messages[0].id)
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
  }


  const handleLogout = () => {
    removeCookie('user')
    removeCookie('jwt')
  }


  if (cookies.user === undefined)
    return (
      <>
        <form onSubmit={handleSubmit}>
          <div>
            <lable htmlFor="uname"><b>Username</b></lable>
            <input type="text" placeholder="Enter Username" name="uname" required></input>

            <lable htmlFor="psw"><b>Password</b></lable>
            <input type="password" placeholder="Enter Password" name="psw" required></input>

            <button type="submit">Login</button>
          </div>
          {credentialError}
        </form>
      </>
    )
  else
    return (
      <div className="container">
        <div className="app">
          <img src="/zeit.svg"></img>
          <div className="bio">
            <div className="profile-picture">
              <img src="https://res.cloudinary.com/demo/image/upload/w_120,h_120,c_thumb,g_face/smiling_man.png"></img>
            </div>
            <div className="name">{cookies.user.username}</div>
            <div className="designation">{cookies.user.type}</div>
          </div>
          <div className="info"></div>
          <button onClick={handleLogout}>Log out</button>
        </div>

        <style jsx>{`
          .container {
            text-align: center;
          }

          .bio {
            display: grid;
            grid-template:  [img] "img   name" 				100px [name]
                            [img] "img   designation" 50px  [designation]
                            /      150px  auto;
            
          }

          .bio > .profile-picture {
            grid-area: img;
            padding: 10%;
          }

          .bio > .name {
            grid-area: name;
            text-align: left;
            font-size: 40px;
            padding: 3% 0% 0% 1%;
          }

          .bio > .designation {
            grid-area: designation;
            text-align: left;
            font-style: italic;
            padding: 1%;
          }
        `}</style>
      </div>
    );
}