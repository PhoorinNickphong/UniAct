import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

import "./sign.css"

const initialUser = { email: '', password: '', username: '' };

function Signup(){
    const [user, setUser] = useState(initialUser)
    const navigate = useNavigate();
    const url = "http://localhost:1337/api/auth/local/register";
    const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(user);

        try {
          if (user.email && user.password && user.username) 
            console.log(url, user)
            const res = await axios.post(url, user)
            console.log(res.data)
            navigate('/signin', { replace: true })
        }
      catch(err) {
        toast.error("Invalid email or password", {
          hideProgressBar: true
        })
      }}

      
      //   if (!user.email || !/@(email\.psu\.ac\.th|psu\.ac\.th)$/.test(user.email)) {
      //     Swal.fire({
      //       icon: 'error',
      //       title: 'ข้อมูลผิดพลาด',
      //       text: 'กรุณากรอกอีเมลล์ PSU',
      //   });
      //   return;
      // }

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
          <title>Sign up</title>

          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Assistant:400,700" />
          <link rel="stylesheet" href="./pages/signin.css" />
      </head>
      <body className='body1'>
          <section className="login" id="login">
              <div className="head">
                  <h1 className="company">Register</h1>
              </div>
              <p className="msg">signup with @psu.ac.th account</p>
              <div className='form'>
                  <form action={url} method="post" onSubmit={handleSignup}>
                      <input type="text" placeholder='Usename' name='username' className='text' id='username' onChange={handleChange} required/><br/><br/>
                      <input type="email" placeholder='Email' name='email' className='text' id='email' onChange={handleChange} required/><br/>
                      <input type="password" placeholder='Password' name='password' className='password' onChange={handleChange} required/><br/>
                      <br />
                      <input type="submit" className='btn-login' id='do-login' value="Sign up" />
                      <a href="/signin" className='loginmai'>Login?</a>
                  </form>
              </div>
          </section>


      </body>
      </html>

  )}

export default Signup;