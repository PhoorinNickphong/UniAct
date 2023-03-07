import React, { useState, useEffect } from "react";
import "./information.css";
import ActivityAppBar from "../../components/app-bar";
import kitjakum from "../../Models/kitjakum";
import Repo from "../../Repository/index";
import { useNavigate, useParams } from "react-router-dom";


const Information = () => {
  const [userresult, setUserResult] = useState<kitjakum[]>([]);
  const navigate = useNavigate(); 
  const params = useParams();

  const data = userresult.length > 0 ? userresult[0].attributes : null;
  const thumbnail = `http://localhost:1337${data?.Image.data[0].attributes.url}`;

  const fetchData = async () => {
    try {
      const res = await Repo.userResult.getById(params.id as string);
      if (res) {
        setUserResult([res])
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [params.id])

  return (
    <html>
      <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>Information</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ActivityAppBar></ActivityAppBar>
        <header className="isOpen">
          <h1>เปิดรับอยุ่นะจุ๊บๆ</h1>
        </header>
        <div className="images">
          <img
            src={thumbnail}
            alt="activity image"
            style={{ objectFit: 'cover', height: 140 }}
          />

        </div>
        <div className="box1">
          <h2>รายละเอียด</h2>
        </div>
        {data?.description}
        <br />
        <div className="box1">
          <h2>กำหนดการ</h2>
        </div>
        <div className="box60">
          ระยะเวลากิจกรรม
        </div>
        <ul>
          <li className="font">เริ่ม: {data?.StartActivity.toString()}</li>
          <li className="font">สิ้นสุด: {data?.EndActivity.toString()}</li>
        </ul>
        <div className="box60">
          ระยะเวลาการสมัคร
        </div>
        <ul>
          <li className="font">เริ่ม: {data?.StartRegistration}</li>
          <li className="font">สิ้นสุด: {data?.EndRegistration}</li>
        </ul>
        <br />
      </body>
    </html>
  )
}

export default Information;
