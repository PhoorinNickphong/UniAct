import "./main.css";
import ActivityCard from "../../components/activity-card";
import OnfieldCard from "../../components/onfield-card";
import OnacademicCard from "../../components/onacademic-card"
import OnlineCard from "../../components/online-card"
import ActivityAppBar from "../../components/app-bar";
import image1 from "../image/websitefor.jpg"
import image2 from "../image/websitefor2.jpg"
import image3 from "../image/websitefor3.jpg"
import Footer from "../../components/footer";
function MainLog() {

  
  return (
    <html>
      <head>
        <link rel="stylesheet" href="main.css"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit&display=swap"
          rel="stylesheet">
        </link>
      </head>
      <body>
        <ActivityAppBar></ActivityAppBar>
        <div className="emp">
          <p>
            <label>ลงทะเบียนเข้าร่วมกิจกรรม</label>
          </p>
        </div>
        <div className="slide">
          <figure>
            <img src={image1}  />
            <img src={image2}  />
            <img src={image3}  />
            <img src={image1}  />
          </figure>
        </div>
        <div className="box">
          <h2>กิจกรรม</h2>
        </div>
        <div className="box1">
          <h2>ค่าย/ค่ายออนไลน์</h2>
        </div>
        <div className="box2">
          <h2>หมวดหมู่</h2>
        </div>
        <a className="button0" href="#all activity">ค่ายทั้งหมด</a>
        <a className="button" href="#online camp">ค่ายออนไลน์</a>
        <a className="button" href="#field camp">ค่ายลงพื้นที่</a>
        <a className="button" href="#academic camp">ค่ายวิชาการ</a>
        <div className="box2">
          <h2 id="all activity">กิจกรรมที่เปิดอยู่</h2>
        </div>
        <div className="grid">
          <ActivityCard></ActivityCard>

        </div>

        <div className="line">
          <h1 id="online camp">ค่ายออนไลน์</h1>
        </div>
        <div className="grid">
          <OnlineCard></OnlineCard>

        </div>

        <div className="line">
          <h1 id="field camp">ค่ายลงพื้นที่</h1>
        </div>
        <div className="grid">
          <OnfieldCard></OnfieldCard>
        </div>

        <div className="line">
          <h1 id="academic camp">ค่ายวิชาการ</h1>
        </div>
        <div className="grid">
          <OnacademicCard></OnacademicCard>

        </div>
          <Footer/>
      </body>
    </html>
  )
}

export default MainLog;