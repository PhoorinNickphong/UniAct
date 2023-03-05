import "../pages/register.css"

function Register() {
  return (

    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>login</title>
        <link rel="stylesheet" href="login main.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="local">
          <div className="main">
            <div className="box">
              <h1 className="content">สมัครสมาชิก</h1>

              <p className="p1">ลงทะเบียนด้วยบัญชีผู้ใช้ @psu.ac.th</p>

              <div className="flexbox">
                <div className="boxloginmain">
                  <form action="localhost:1337/api/auth/local/register" method="post">
                    <p>
                      <label className="label1">Name </label>
                      <input type="text" name="Username" className="input1" required/>
                    </p>

                    <p>
                      <label className="label1">Email </label>
                      <input type="email" name="identifier" className="input1" required/>
                    </p>

                    <p>
                      <label className="label2"> Password </label>
                      <input type="Password" name="password"className="input2" required/>
                    </p>
                    <p>
                      <button type="submit" className="submit">ลงทะเบียน</button>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>

        </div>
      </body>
    </html>
  )
}


export default Register;
