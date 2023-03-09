import React, { useState, useEffect } from "react";
import "./information.css";
import ActivityAppBar from "../../components/app-bar";
import kitjakum from "../../Models/kitjakum";
import Repo from "../../Repository/index";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../../components/footer";

const getUserData = () => {
  const stringfiedUser = localStorage.getItem("user") || "";
  if (stringfiedUser) {
    return JSON.parse(stringfiedUser);
  }
  return false;
};

const Information = () => {
  const [userresult, setUserResult] = useState<kitjakum[]>([]);
  const [activityresult, setActivityResult] = useState<kitjakum[]>([]);
  const navigate = useNavigate();
  const params = useParams();
  const [isRegis, setIsRegis] = useState(false)
  const userData = getUserData();
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
  };

  async function SignupClick(id: string) {
    const activity = {
      data: {
        title: data?.title,
        Username: userData.username,
        ActivityID: params.id,
      },
    };

    const requestBody = JSON.stringify(activity);
    if (data?.Typeregister == "First Come First Serve") {
      if (userData) {
        const result = await Swal.fire({
          title: "Are you sure?",
          text: "Do you really want to attend this activity?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#1bcc32",
          cancelButtonColor: "#d33",
          confirmButtonText: "Confirm",
          cancelButtonText: "Cancel",
        });

        if (result.isConfirmed) {
          try {
            const resp = await fetch(
              `http://localhost:1337/api/activity`,
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${userData.jwt}`,
                },
              }
            );

            const data = await resp.json();
            console.log(data);
            const response = await fetch(
              "http://localhost:1337/api/first-come-first-serves",
              {
                method: "POST",
                headers: {
                  Authorization: `Bearer ${userData.jwt}`,
                  "Content-Type": "application/json",
                },
                body: requestBody,
              }
            );

            const data1 = await response.json();
            console.log(data1);
            fetchData();
            Swal.fire({
              title: "Applied ",
              text: "applied successfully",
              icon: "success",
              confirmButtonText: "OK",
            });

            setIsRegis(true);
          } catch (err) {
            console.error(err);
          }
        }
      } else {
        Swal.fire({
          title: "You have no access",
          text: "plese signin first",
          icon: "error",
          confirmButtonText: "OK",
        }).then(() => {
          navigate("/signin");
        });
      }

    } else {
      if (userData) {
        const result = await Swal.fire({
          title: "Are you sure?",
          text: "Do you really want to attend this activity?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#1bcc32",
          cancelButtonColor: "#d33",
          confirmButtonText: "Confirm",
          cancelButtonText: "Cancel",
        });

        if (result.isConfirmed) {
          try {
            const resp = await fetch(
              `http://localhost:1337/api/activity`,
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${userData.jwt}`,
                },
              }
            );

            const data = await resp.json();
            console.log(data);
            const response = await fetch(
              "http://localhost:1337/api/candidates",
              {
                method: "POST",
                headers: {
                  Authorization: `Bearer ${userData.jwt}`,
                  "Content-Type": "application/json",
                },
                body: requestBody,
              }
            );

            const data1 = await response.json();
            console.log(data1);
            fetchData();
            Swal.fire({
              title: "Applied ",
              text: "Waiting for admin to approve",
              icon: "success",
              confirmButtonText: "OK",
            });

            setIsRegis(true);
          } catch (err) {
            console.error(err);
          }
        }
      } else {
        Swal.fire({
          title: "You have no access",
          text: "plese signin first",
          icon: "error",
          confirmButtonText: "OK",
        }).then(() => {
          navigate("/signin");
        });
      }
      
    }
  }

  useEffect(() => {
    fetchData()
  }, [params.id]);

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
          <h1>กิจกรรม</h1>
        </header>
        <div className="images">
          <img className="picture"
            src={thumbnail}
            alt="activity image"
          /* style={{ objectFit: 'cover', height: 140 }} */
          />

        </div>
        <div className="box1">
          <h2>รายละเอียด</h2>
        </div>
        <p className="font p20">{data?.description}</p>
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
        <div className="box56">
          <button className="Button20 font" type="submit" onClick={() =>
            params.id && SignupClick(params.id.toString())}>
            ลงทะเบียน
          </button>
        </div>
        <Footer/>  
      </body>
    </html>
  )
}

export default Information;
