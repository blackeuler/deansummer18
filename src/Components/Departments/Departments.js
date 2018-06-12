import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 800,
    height: 550,
  },
  subheader: {
    width: '100%',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});

const tileData = [
    {
        name:'IDEAS',
        photo:'https://sitesmedia.s3.amazonaws.com/ideas/files/2016/07/ideascenter-header-1200x400.jpg',
        descrip:'',
    },
    {
        name:'Res Life',
        photo:'https://sitesmedia.s3.amazonaws.com/residencelife/files/2010/04/baldwin.jpg',
        descrip:'',
    },
    {
        name:'Public Safety',
        photo:'https://sitesmedia.s3.amazonaws.com/publicsafety/files/2017/02/header-1.jpg',
        descrip:'',
    },
    {
        name:'Spiritual and Religious Life',
        photo:'https://sitesmedia.s3.amazonaws.com/religiouslife/files/2013/01/Main1-300x200.jpg',
        descrip:'',
    },
    {
        name:'Student Life and Involvement',
        photo:'https://tswqo1aqh6e4d9omrzpjqmtw-wpengine.netdna-ssl.com/studentinvolvement/files/2018/03/homepage-collage.jpg',
        descrip:'',
    },
    {
        name:'Counseling and Health Center',
        photo:'https://sitesmedia.s3.amazonaws.com/studentlife/files/2014/12/studentlife2.jpg',
        descrip:'',
    },
]
function ImageGridList(props) {
  const { classes } = props;

  return (
    <div spacing={0} className={classes.root}>
      <GridList cellHeight={160} spacing={0} className={classes.gridList} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.photo} cols={tile.cols || 1}>
            <img src={tile.photo} alt={tile.name} />
            <GridListTileBar
              title={tile.name}
              titlePosition="bottom"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

ImageGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageGridList);
