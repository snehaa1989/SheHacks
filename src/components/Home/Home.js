import { Button, CssBaseline, Divider, InputAdornment, TextField } from "@material-ui/core";
import { Keyboard, VideoCallOutlined, VideoCallRounded, VideoCallSharp } from "@material-ui/icons";
import React from "react";
import { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles"
import "./styles.css";
import HeaderHome from "../HeaderHome/HeaderHome"
import PlaceToVisit from "../Sessions/Sessions"
const Home = ({ setRoomName, handleSubmit }) => {
  const handleRoomNameChange = (e) => {
    setRoomName(e.target.value);
  };
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '120vh',
    //backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));
const classes = useStyles();
  return (
   <Fragment>
    <div className={classes.root}>
    <CssBaseline />
      <HeaderHome />
      <PlaceToVisit />
     </div>
     
    <div className="hero">
      <div className="hero__left">
        <div className="hero__featureText">
          <h1 className="hero__title">
            Create or Join a Meeting.
          </h1>
          <p className="hero__subtitle">
            To create a new meeting, click on the new meeting button below, or enter meeting code below to join one.
          </p>
        </div>

        <div className="hero__buttons">
          <Button
            color="primary"
            variant="contained"
            className="hero__createBTN"
            onClick={handleSubmit}
          >
            <VideoCallSharp />
            <p>New Meeting</p>
          </Button>

          <TextField
            className="hero__input"
            variant="outlined"
            placeholder="Enter code"
            onChange={handleRoomNameChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Keyboard className="icon" />
                </InputAdornment>
              ),
            }}
          />

          <Button className="hero__joinBTN" onClick={handleSubmit}>
            Join
          </Button>
        </div>

        <Divider />

      
      </div>

      <div className="hero__right">
        <img
          className="hero__image"
          src="https://previews.123rf.com/images/microone/microone1907/microone190700323/128173861-video-conference-people-group-on-computer-screen-taking-with-colleague-video-conferencing-and-online.jpg"
          alt="Feature IMG"
        />
      </div>
    </div>
    </Fragment>
  );
};

export default Home;
