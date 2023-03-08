import "./status.css";
import ActivityAppBar from "../../components/app-bar"
import StatusCard from "../../components/statuscard";
import Footer from "../../components/footer";


function Status() {
  return(
   <html>
    <ActivityAppBar></ActivityAppBar>
    <link
          href="https://fonts.googleapis.com/css2?family=Kanit&display=swap"
          rel="stylesheet"
        />
    <body>
      <div className="line">
        <p className="text1">สถานะการเข้าร่วมกิจกรรม</p>
      </div>
      <div className="container-grid">
        <StatusCard></StatusCard>
        <StatusCard></StatusCard>
        <StatusCard></StatusCard>
        <StatusCard></StatusCard>
      </div>
      <div>
      </div>
      <Footer/>
    </body>
   </html>
  )
}

export default Status;