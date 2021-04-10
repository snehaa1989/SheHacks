import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from '../ImageCard/ImageCard';
import Sessions from '../static/places';
import useWindowPosition from '../hook/useWindowPosition';
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
}));
export default function () {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div className={classes.root} id="meeting">
      <div>
      <ImageCard session={Sessions[0]} checked={checked} />
      <ImageCard session={Sessions[1]} checked={checked} />
      </div>
      <span>
      <ImageCard session={Sessions[2]} checked={checked} />
      <ImageCard session={Sessions[3]} checked={checked} />
      </span>
    </div>
  );
}