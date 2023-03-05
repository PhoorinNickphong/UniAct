import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import '../contactcard/contactcard.css';

function ContactCard() {
    return (
      <Card  sx={{ maxWidth: 400,maxHeight: 370 }} >
          <CardMedia 
            component="img"
            height="240px"
            image="https://s.isanook.com/ca/0/ui/279/1396205/s__152616986_1562561122.jpg?ip/convert/w0/q80/webp"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              6510110124
            </Typography>
            <Typography variant="body1" color="text.secondary">
              นายณภัทร จันทร์เมือง
            </Typography>
          </CardContent>
      </Card>
      
    );
  }
  
  
  export default  ContactCard;