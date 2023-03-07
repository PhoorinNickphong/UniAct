import React, { useState, useEffect } from "react";
import "./information.css";
import ActivityAppBar from "../../components/app-bar";
import kitjakum from "../../Models/kitjakum";
import Repo from "../../Repository/index";
function Information() {
  const [activityList, setActivityList] = useState<kitjakum[]>([]);
  const fetchActivityList = async () => {
    const result = await Repo.userResult.getAll();
    if (result) {
      setActivityList(result);
    }
  };

  useEffect(() => {
    fetchActivityList();
  }, []);
  return (
    <>
      {activityList.map((activity: kitjakum) => (
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
                src="https://miro.com/blog/wp-content/uploads/2021/02/Interactive-Workshop-Activities-for-Virtual-Collaboration.svg"
                className="center"
              />
            </div>
            <div className="box1">
              <h2>รายละเอียด</h2>
            </div>
            <p className="font">{activity.attributes.description + "..."}</p>
            <br />
            <div className="box1">
              <h2>กำหนดการ</h2>
            </div>
            <div className="box60">
                ระยะเวลากิจกรรม
            </div>
            <ul>
              <li className="font">เริ่ม: {activity.attributes.StartActivity}</li>
              <li className="font">สิ้นสุด: {activity.attributes.EndActivity}</li>
            </ul>
            <div className="box60">
                ระยะเวลาการสมัคร
            </div>
            <ul>
              <li className="font">เริ่ม: {activity.attributes.StartRegistration}</li>
              <li className="font">สิ้นสุด: {activity.attributes.EndRegistration}</li>
            </ul>
            <br />
          </body>
        </html>
      ))}
    </>
  );
}

export default Information;
