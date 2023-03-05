import { useState} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import { storeUser } from '../helper';


import "../pages/sign.css"

const initialUser = { identifier: '', password: ''};

    
function Signin() {
    const [user, setUser] = useState(initialUser)
    const navigate = useNavigate();

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log(user);
      const url = "http://localhost:1337/api/auth/local"
      try {
        if (user.identifier && user.password) {
          const {data} = await axios.post(url, user)
          console.log(data)
          if (data.jwt) {
            storeUser(data)
            toast.success('Login successful', {
              hideProgressBar: true
            })
            setUser(initialUser)
            navigate('/')
          }
    }}catch(err) {
      toast.error("Invalid email or password", {
        hideProgressBar: true
      })
    }}

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setUser({
      ...user,
        [name]: value,
      });
    };

  return (
      
      <html lang="en">
      <head>

          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Sign In</title>

          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Assistant:400,700" />
          <link rel="stylesheet" href="./pages/signin.css" />
      </head>
      <body className='body1'>
          <section className="login" id="login">
              <div className="head">
                  <h1 className="company">Login</h1>
              </div>
              <p className="msg">signin with @psu.ac.th account</p>
              <div className='form'>
                  <form action="http://localhost:1337/api/auth/local" method="post" onSubmit={handleLogin}>
                      <input type="email" placeholder='Email'name='identifier' className='text' id='username' onChange={handleChange} required/><br/>
                      <input type="password" placeholder='Password'name='password' className='password' onChange={handleChange} required/><br/>
                      <br />
                      <a href="" className='btn-login' id='do-login'>Login</a>
                      <a href="/signup" className='forgot'>sign up</a>
                  </form>
              </div>
          </section>


      </body>
      </html>

  )}

export default Signin;