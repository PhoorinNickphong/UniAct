import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import '../components/statuscard.css';
import {CardActionArea} from '@mui/material';

function StatusCard() {
  return (
    <Card sx={{ maxWidth: 345 , borderRadius: '20px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://ichef.bbci.co.uk/news/640/cpsprodpb/1496F/production/_116553348_mansleepsgettyimages.png"
          alt="Image"
        />
        <CardContent className='box100'>
          <Typography gutterBottom variant="h5" component="div">
            <p className='text3'>Activity name</p>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <p className='text2'>สถานะกิจกรรม : MOCK </p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}


export default  StatusCard;