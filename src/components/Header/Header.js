import React, { useState } from "react";
import "./styles.css";
import "./PopoverStyles.css";
import {
  Apps,
  CameraAltOutlined,
  FeedbackOutlined,
  HelpOutline,
  PersonOutlined,
  Settings,
} from "@material-ui/icons";
import { Avatar, Badge, Button, makeStyles, Popover } from "@material-ui/core";
import { useAppContext } from "../../context/appContext";
import { auth } from "../../lib/firebase";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const { currentUser } = useAppContext();

  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="header">
      <div className="header__logoContainer">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/001/259/015/small/people-meeting-online-with-electronic-devices.jpg"
          alt="Google"
          className="header__logo"
        />

        <p>Group Sessions</p>
      </div>

      <div className="header__icons">
        

        <div className="header__iconDivider"></div>
        <HelpOutline/>
        <Avatar className="header__avatar" onClick={handleClick} />

        <Popover
          open={open}
          id={id}
          onClose={handleClose}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
          }}
        >
          <div className="home__popoverContainer">
            <div className="home__popover__top">
              <Badge
                overlap="circle"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={
                  <div className="home__badge">
                    <CameraAltOutlined className="home__camera" />
                  </div>
                }
              >
                <Avatar className={classes.large} />
              </Badge>

              <div className="home__text">
                <div className="home__displayName">
                  {currentUser?.displayName}
                </div>

                <div className="home__mail">{currentUser?.email}</div>
              </div>

              <div className="home__btn">Manage your Google Account</div>
            </div>

            <div className="home__popover__btm">
              

              <Button
                variant="outlined"
                className="home__signOut"
                onClick={() => auth.signOut()}
              >
                Sign Out
              </Button>

             
            </div>
          </div>
        </Popover>
      </div>
    </div>
  );
};

export default Header;
