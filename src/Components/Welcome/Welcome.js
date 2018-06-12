import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { CardHeader } from '@material-ui/core';

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    marginBottom: 16,
    fontSize: 10,
  },
  pos: {
    /* marginBottom: 12, */
  },
  media: {
    height: 0,
    paddingTop: '23.25%', // 16:9
  },
  avatar: {
    width:120,
    height:120,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
  },
  
};

function SimpleCard(props) {
  const { classes } = props;

  return (
    <div>
      <Card className={classes.card}>
        
        <CardContent>
          <Typography className={classes.title} variant='headline' >
            Dean's Welcome
          </Typography>
          <Avatar 
            src="https://sitesmedia.s3.amazonaws.com/about/files/2015/08/kondrot-600x600-150x150.png" className={classes.avatar}/>
            <Typography variant="body1">
          Allegheny is a richly diverse community that values each individual and cares deeply about the success of its students. Our role in the Division of Student Affairs is to provide co-curricular opportunities to help you discover your voice and passion as a scholar and leader on our campus, in Meadville, nationally and/or globally. 
          </Typography>
            
        </CardContent>
        {/*  
        <CardActions>
          <Button size="small">Read More </Button>
        </CardActions> */}
        
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);

