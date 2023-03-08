import "./regisAct.css";
import ActivityAppBar from "../../components/app-bar";


function RegisAct () {
  return (
    <html>
      <head>
        <title>RegisAct</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ActivityAppBar></ActivityAppBar>
        <header className="isOpen">
          <h1>ชื่อกิจกรรม: </h1>
        </header>
        <div className="images">
          <img className="picture"
            src="{}"
            alt="activity image"
            /* style={{ objectFit: 'cover', height: 140 }} */
          />

        </div>
        <div className="box1">
          <h2>รายชื่อผู้ลงทะเบียน</h2>
        </div>
        <p className="font p20"></p>
        <div className="box60">
          1.ชื่อ :
        </div>
        <div  className="box60">
          2.ชื่อ :
        </div>
        <div  className="box60">
          3.ชื่อ :
        </div>
        <div  className="box60">
          4.ชื่อ :
        </div>
      </body>
    </html>
  )
}

export default RegisAct;
