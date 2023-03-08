import "./main.css";
import ActivityCard from "../../components/activity-card";
import ActivityAppBar from "../../components/app-bar"
import "./pages/admin-button.css";
import { url } from "inspector";

function MainPageadmin() {
  return(
    <html>
      <head>
        <link rel="stylesheet" href="main.css"></link>
        <link rel="stylesheet" href="admin-button.css"></link>
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
        <div className="box">
            <h2>กิจกรรม</h2>
        </div>
        <div  className="box1">
            <h2>ค่าย/ค่ายออนไลน์</h2>
        </div>
        <div  className="box2">
            <h2>หมวดหมู่</h2>
        </div>
        <a className="button0" href="#all activity">ค่ายทั้งหมด</a> 
        <a className="button"  href="#online camp">ค่ายออนไลน์</a>
        <a className="button"  href="#field camp">ค่ายลงพื้นที่</a>
        <a className="button"  href="#academic camp">ค่ายวิชาการ</a>
        <div  className="box2">
            <h2 id="all activity">กิจกรรมที่เปิดอยู่</h2>
        </div>
        <div className="grid">
          <ActivityCard></ActivityCard>
        </div>
        
        <div className="line">
          <h1 id="online camp">ค่ายออนไลน์</h1>
        </div>
        <div className="grid">
          <ActivityCard></ActivityCard>
        </div>

        <div className="line">
          <h1 id="field camp">ค่ายลงพื้นที่</h1>
        </div>
        <div className="grid">

        </div>

        <div className="line">
          <h1 id="academic camp">ค่ายวิชาการ</h1>
        </div>
        <div className="grid">

        </div>
        <div className="boxCont">
            <h2>ติดต่อ</h2>
        </div>
        <div  className="boxCont2">
            <h2>ช่องทางการติดต่อ</h2>
        </div>
        <div className="grid2">
          <a className="contact" href="https://www.facebook.com/profile.php?id=100090861491854"></a>
          <a className="contact2" href="https://line.me/ti/g2/bRDlz7ZlaK2IC7tNRG9jFT27wpJg5OURTvSGgg?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"></a>
          <a className="contact3" href="https://www.instagram.com/psucoe34/"></a>
        </div>
        <a className="adminbutton" href="#admin"></a>
        <div  className="box3">
          <h4>• Website for activity</h4>
          <h4>• We love activity</h4>
          <h4>• เว็บไซต์ที่เป็นศูนย์รวมของกิจกรรม</h4>
          <h4>• พื้นที่ของคนรักในการทำกิจกรรม</h4>
          <h4>• มีกิจกรรมและค่ายอื่นๆอีกมายรวมไว้ที่นี่แล้ว</h4>
          <h4>• UniAct Co. TH</h4>
        </div>
      </body>
    </html>
  )
}

export default MainPageadmin;