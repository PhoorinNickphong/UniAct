import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import '../components/activity-card.css';
import { Button, CardActionArea, CardActions } from '@mui/material';

function ActivityCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://ichef.bbci.co.uk/news/640/cpsprodpb/1496F/production/_116553348_mansleepsgettyimages.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Activity name
          </Typography>
          <Typography variant="body2" color="text.secondary">
            เนื้อหากิจกรรม
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Readmore
        </Button>
      </CardActions>
    </Card>
  );
}


export default  ActivityCard;