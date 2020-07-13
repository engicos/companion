import { Fragment } from 'react';
import axios from 'axios';
import Router from 'next/router';


async function getUser(identifier,pswd){
    try{
        let {data} = ( await axios.post('http://localhost:1337/auth/local', {
            identifier: identifier,
            password: pswd,
            })
        )
        window.localStorage.setItem('username',data['user']['username'])
        window.localStorage.setItem('email',data['user']['email'])
        return true;//Successful authentication
    }
    catch (error) {
    if (error.response['status']===400){
        return false
    } 
}
    // return error.response;
  


}
const loginPage = () => {

    let field={"user":"",
            "password":""}
    
    function setField(event,name){
        field[name]=event.target.value;
    }

    function submitForm(){
        getUser(field['user'],field['password']).then(success =>{
            if(success){
                Router.push('/temp/welcome');
            }
            else{
                // Username-Password combo is wrong. Display error message
                document.getElementById("password-mismatch-error").hidden = false
            }
        })

    }
    
    return (
    <Fragment>
      <form>
          <h1>Login</h1>
          <p className="error-message" id="password-mismatch-error" hidden>Username and password don't match</p>
          <p>Enter your username:</p>
          <input
            type='text'
            onChange={(event)=>{setField(event,"user"); console.log(JSON.stringify(field)+"hello")}}
          />
          <p>Enter You password</p>
          <input
            type='text'
            onChange={(event)=>{setField(event,"password"); console.log(JSON.stringify(field))}}
          />
        <input 
            type='button'
            value="Submit"
            onClick={submitForm}
            />            
     </form>
    <style jsx>{`
        .error-message {
            color: red
        }
    `}</style>
    </Fragment>
    );
}
export default loginPage
