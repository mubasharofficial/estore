import React from 'react';
import { Typography, Button,Card,CardActions,CardContent,CardMedia } from '@material-ui/core';
import useStyles from './styles'
const CartItem = ({item})=>{
  const classes = useStyles();

  console.log("hello word");
  console.log(item)
  return(
      <Card>
        <CardMedia image={item.image.url} alt={item.name} className={classes.media}/>
        <CardContent className={classes.cardContent}>
          <Typography variant='h4'>{item.name}</Typography>
          <Typography variant='h4'>{item.line_total.formatted_width_symbol}</Typography>
        </CardContent>
        <CardActions className={classes.cartActions}>
        <div className={classes.buttons}>
        <Button type="button" size="small">-</Button>
        <Typography>{item.quantity}</Typography>
        <Button type="button" size="small">+</Button>
        <Button type='button'  variant='contained' color='secondary' >Remove</Button>
        </div>
        
        </CardActions>
      </Card>
  )
}

export default CartItem;

