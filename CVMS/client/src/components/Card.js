import * as React from 'react';
import MuiCard from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SreeImage from '../Sree.JPG';

const Card = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
   
    <MuiCard sx={{ maxWidth: 300 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={SreeImage} 
        title="CVMS"
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          K.Sreevatsa
        </Typography>
        <Typography variant="body2" color="text.secondary">
          KL University
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </MuiCard></div>
    
  );
}

export default Card;
