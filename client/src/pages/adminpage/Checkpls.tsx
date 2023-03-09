import { useState, useEffect } from 'react';
import axios from 'axios';
import conf from "../../conf"

interface User {
  id: number;
  username: string;
  email: string;
  role: {
    id: number;
    name: string;
  };
}

const getUserData = () => {
  const stringfiedUser = localStorage.getItem('user') || '';
  if (stringfiedUser) {
    return JSON.parse(stringfiedUser);
  }
  return false;
};

const checkUserRole = async (token: string): Promise<boolean> => {
  const userData = getUserData();
  try {
    const { data } = await axios.get<User>(`${conf.apiPrefix}/api/users/me?populate=role`, {
        
      headers: { Authorization: `Bearer ${token}` },
    });
    if (data.role.name === 'admin') {
      window.location.href = '/admin';
      return true;
    }
  } catch (error) {
    console.log(error);
    window.location.href = '/';
  }
  return false;
};

const Page = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const token = getUserData().jwt
  console.log(token)

  useEffect(() => {
    const token = getUserData().jwt;
    // console.log(token)
    const checkUser = async () => {
      if (token !== '') {
        const isUserAdmin = await checkUserRole(token);
        setIsAuthorized(isUserAdmin);
      } else {
        window.location.href = '/login';
      }
    };
    checkUser();
  }, []);

  return (
    <div>
      {isAuthorized ? ("") : ("") }
    </div>
  );
};

export default Page;
