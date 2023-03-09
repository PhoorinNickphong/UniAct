import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import '../components/activity-card.css';
import kitjakum from '../Models/kitjakum';
import Repo from '../Repository/index';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function OnfieldCard() {
  const [activityList, setActivityList] = useState<kitjakum[]>([]);
  const navigate = useNavigate();

  const fetchActivityList = async () => {
    const result = await Repo.userResult.getAll();
    if (result) {
        setActivityList(result);
    
    }
  };

  const actv = activityList.filter(activity => {
    const matchingCategories = activity.attributes.catagories.data.some(category => {
      return category.attributes.title.toLowerCase().includes('ค่ายลงพื้นที่');
    });
    return matchingCategories;
  });

  useEffect(() => {
    fetchActivityList();
  }, []);
  return (<>
    {actv.map((kitjakum, index) => (
      <Card sx={{ maxWidth: 345,borderRadius: '20px' }} onClick={() => navigate(`/information/${kitjakum.id}`)}>
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

export default OnfieldCard;