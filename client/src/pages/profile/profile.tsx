import "./profile.css";
import ActivityAppBar from "../../components/app-bar"
import Footer from "../../components/footer";
function Profile() {
    return(
    <html>
        <ActivityAppBar></ActivityAppBar>
        <link
            href="https://fonts.googleapis.com/css2?family=Kanit&display=swap"
            rel="stylesheet"
        />
        <body>
        <div className="box9999">
            <p>
            <label style={{fontSize: "200%"}}>My account</label>
            </p>  
        </div>
        <div className="box999">
            <div className="grid5">
                <label>ชื่อ</label>
                <label>นามสกุล</label>
                <div className="box888"></div>  
                <div className="box888"></div>
                <label>อีเมล</label>
                <label>เบอร์โทร</label>
                <div className="box888"></div>
                <div className="box888"></div>
            </div>
        </div>
        <Footer/>
        </body>
    </html>
  )
}

export default Profile;