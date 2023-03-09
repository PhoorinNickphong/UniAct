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
        <div className="box99">
            <p>
            <label style={{fontSize: "200%"}}>My account</label>
            </p>  
        </div>
        <div className="box2">
            <div className="grid">
                <label>ชื่อ</label>
                <label>นามสกุล</label>
                <div className="box"></div>  
                <div className="box"></div>
                <label>อีเมล</label>
                <label>เบอร์โทร</label>
                <div className="box"></div>
                <div className="box"></div>
            </div>
        </div>
        <Footer/>
        </body>
    </html>
  )
}

export default Profile;