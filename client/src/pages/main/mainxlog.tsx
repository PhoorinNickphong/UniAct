import "./main.css";
import ActivityCard from "../../components/activity-card";
import ContactCard from "../../components/contactcard/contact-card";
import ContactCard2 from "../../components/contactcard/contact-card2";
import ContactCard3 from "../../components/contactcard/contact-card3";
import ContactCard4 from "../../components/contactcard/contact-card4";
import ContactCard5 from "../../components/contactcard/contact-card5";
import ContactCard6 from "../../components/contactcard/contact-card6";
import LoginAppBar from "../../components/login-bar";

function MainLog() {
  return(
    <html>
      <head>
        <link rel="stylesheet" href="main.css"></link>
        <link 
        href="https://fonts.googleapis.com/css2?family=Kanit&display=swap"  
        rel="stylesheet">
        </link>
      </head>
      <body>
      <LoginAppBar></LoginAppBar>
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
          <ActivityCard></ActivityCard>
          <ActivityCard></ActivityCard>
        </div>
        
        <div className="line">
          <h1 id="online camp">ค่ายออนไลน์</h1>
        </div>
        <div className="grid">
          <ActivityCard></ActivityCard>
          <ActivityCard></ActivityCard>
          <ActivityCard></ActivityCard>
        </div>

        <div className="line">
          <h1 id="field camp">ค่ายลงพื้นที่</h1>
        </div>
        <div className="grid">
          <ActivityCard></ActivityCard>
          <ActivityCard></ActivityCard>
          <ActivityCard></ActivityCard>
        </div>

        <div className="line">
          <h1 id="academic camp">ค่ายวิชาการ</h1>
        </div>
        <div className="grid">
          <ActivityCard></ActivityCard>
          <ActivityCard></ActivityCard>
          <ActivityCard></ActivityCard>
        </div>
        <div className="boxCont">
            <h2 id='contact'>ติดต่อ</h2>
        </div>
        <div  className="boxCont2">
            <h2>ช่องทางการติดต่อ</h2>
        </div>
        <div className="grid">
          <ContactCard></ContactCard>
          <ContactCard2></ContactCard2>
          <ContactCard3></ContactCard3>
          <ContactCard4></ContactCard4>
          <ContactCard5></ContactCard5>
          <ContactCard6></ContactCard6>
        </div>
        <div  className="box3">
        </div>
      </body>
    </html>
  )
}

export default MainLog;