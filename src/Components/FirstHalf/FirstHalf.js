import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ImageGridList from '..//Departments/Departments.js';
import SimpleCard from '..//Welcome/Welcome.js';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function AutoGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={6}>
          <SimpleCard/>
        </Grid>
        <Grid item xs={6}>
          <ImageGridList/>
        </Grid>
      </Grid>
    </div>
  );
}

AutoGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoGrid);
