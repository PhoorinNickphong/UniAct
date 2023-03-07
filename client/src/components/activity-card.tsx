import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import '../components/activity-card.css';
import kitjakum from '../Models/kitjakum';
import Repo from '../Repository/index';
import { Button, CardActionArea, CardActions } from '@mui/material';

function ActivityCard() {
  const [activityList, setActivityList] = useState<kitjakum[]>([]);

  const fetchActivityList = async () => {
    const result = await Repo.userResult.getAll();
    //console.log(result)
    if (result) {
      setActivityList(result);
    }
  };

  useEffect(() => {
    fetchActivityList();
  }, []);
  return (<>
    {activityList.map((activity: kitjakum) => (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={"http://localhost:1337" + activity?.attributes?.image?.data?.attributes?.formats?.thumbnail?.url}
            alt="activity image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {activity.attributes.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {activity.attributes.description.slice(0, 100) + '...'}
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

export default ActivityCard;