import "../adminpage/main.css";
import ActivityAppBar from "../../../src/components/app-bar"
import { Button, TextareaAutosize, TextField } from "@mui/material";


function FormActAdmin() {
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
        <div className="box">
            <h2>กิจกรรม</h2>
        </div>
        <div  className="box1">
            <h2>สร้าง และแก้ไขกิจกรรม</h2>
        </div>
        <div className="boxAc">

            <label>▼ ชื่อกิจกรรม</label>
            <div className="emp2" ></div>
            <form>
            <TextField
            variant="outlined"
            fullWidth
            />
            
            <div className="emp3" ></div>
            <label>▼ รายละเอียดกิจกรรม</label>
            <div className="emp2" ></div>
            <TextareaAutosize
            style={{width:300,height:100}}
            />

            <div className="emp3" ></div><div className="emp3" ></div>
            <label>▼ วันเวลาเริ่มกิจกรรม และวันเวลาสิ้นสุดกิจกรรม</label>
            <div className="emp2" ></div>
            <TextField
            type="datetime-local"
            variant="outlined"
            style={{width:300}}
            />
            <TextField
            type="datetime-local"
            variant="outlined"
            fullWidth
            style={{ display: "inline-flex" ,width:300 ,marginLeft:50}}
            />
            
            <div className="emp3" ></div>
            <label>▼ วันเวลาเริ่มการลงทะเบียน และวันเวลาสิ้นสุดการลงทะเบียน</label>
            <div className="emp2" >
            </div>
            <TextField
            type="datetime-local"
            variant="outlined"
            style={{width:300}}
            />
            <TextField
            type=  "datetime-local"
            variant="outlined"
            style={{ display: "inline-flex" ,width:300 ,marginLeft:50}}
            />

            <div className="emp3" ></div>
            <label>▼ จำนวนคนที่รับเข้ากิจกรรม</label>
            <div className="emp2" ></div>
            <TextField 
            type="number"
            variant="outlined"
            fullWidth
            />

            <div className="emp3" ></div>
            <label>▼ ประเภทกิจกรรม</label>
            <div className="emp2" ></div>
            <TextField
            variant="outlined"
            fullWidth
            />

            <div className="emp3" ></div>
            <label>▼ รูปภาพกิจกรรม</label>
            <div className="emp2" ></div>
            <input
            type="file"
            accept="image/*"
            style={{ display: "flex" }}
            />

            <div className="emp3" ></div>
            <Button className="buttonCreAct" type="submit" fullWidth >
              create
            </Button>
            </form>
        </div>
        <div  className="box3">
        </div>
      </body>
    </html> 
  );
}

export default FormActAdmin;