import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import '../contactcard/contactcard.css';

function ContactCard4() {
    return (
      <Card sx={{ maxWidth: 400,maxHeight: 370 }}>
          <CardMedia
            component="img"
            height="240px"
            image="https://s.isanook.com/ca/0/ui/279/1396205/download20190701165129_1562561119.jpg?ip/convert/w0/q80/webp"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              6510110371
            </Typography>
            <Typography variant="body2" color="text.secondary">
              นายภูรินทร์ นิกพงศ์
            </Typography>
          </CardContent>
      </Card>
      
    );
  }
  
  
  export default  ContactCard4;
