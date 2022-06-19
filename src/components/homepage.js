import * as React from 'react';
import '../App.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

export const Homepage = ({user}) => {
   
  return (
    <Box>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {Array.from(Array(3)).map((_, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                    <Card className='card'>
                        <CardMedia>
                            <Avatar className='avatar'></Avatar>
                        </CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {user.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {user.username}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {user.website}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to={`/users/${user.id}`}>
                                <Button size="small" variant='contained' > More Details</Button>
                            </Link>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </Box>
            
  );
}
