import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import '../components/activity-card.css';
import kitjakum from '../Models/kitjakum';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const getUserData = () => {
  const stringfiedUser = localStorage.getItem("user") || "";
  if (stringfiedUser) {
    return JSON.parse(stringfiedUser);
  }
  return false;
};

function StatusCard() {
  const userData = getUserData();
  const isName = userData.username
  const [Myactivity, setMyactivity] = useState<kitjakum[]>([]);
  const navigate = useNavigate()  

  const fetchData = async () => {
    try {
      const data = await fetch(
        `http://localhost:1337/api/activities?populate=*`
      );
      if (data) {
        const data1 = await data.json();
        setMyactivity(data1.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (<>
    {Myactivity.map((kitjakum, index) => (
      <Card sx={{ maxWidth: 345, borderRadius: '20px'}} onClick={() => navigate(`/information/${kitjakum.id}`)}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={"http://localhost:1337" + kitjakum?.attributes?.Image?.data[0]?.attributes?.formats?.thumbnail?.url}
            alt="activity image"
            sx={{ objectFit: 'cover' }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {kitjakum.attributes.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {kitjakum.attributes.description.slice(0, 100) + '...'}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Readmore
          </Button>
        </CardActions>
      </Card>
    ))}
  </>)
}

export default StatusCard;