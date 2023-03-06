import "./information.css"
import ActivityAppBar from "../../components/app-bar"

function information() {
    return(
        <html>
            <head>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Information</title>
                <link href="https://fonts.googleapis.com/css2?family=Kanit&display=swap"  rel="stylesheet"/>

            </head>
            <body>
                <ActivityAppBar></ActivityAppBar>
                <header className="isOpen">
                  <h1>เปิดรับอยุ่นะจุ๊บๆ</h1>
                </header>
                <div className="images">
                    <img src="https://miro.com/blog/wp-content/uploads/2021/02/Interactive-Workshop-Activities-for-Virtual-Collaboration.svg" className="center"/>
                </div>
                <div  className="box1">
                    <h2>รายละเอียด</h2>
                </div>
                <br />
                <div  className="box1">
                    <h2>กำหนดการ</h2>
                </div>
                <br />
                
            </body>
        </html>

    )
}

export default information;
