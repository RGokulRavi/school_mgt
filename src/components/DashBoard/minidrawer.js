import * as React from "react";
import "./styles.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Avatar from "@mui/material/Avatar";
import EmailIcon from "@mui/icons-material/Email";
import Badge from "@mui/material/Badge";
import { MastersData } from "../../Global";
import Button from "@mui/material/Button";
import Body from "../Body/Body";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { FaPersonChalkboard } from "react-icons/fa6";
import { BsPersonVcardFill } from "react-icons/bs";
import { PiStudentFill } from "react-icons/pi";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  backgroundColor: "primary",
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer({ data, setMode, mode }) {
  const [open, setOpen] = React.useState(false);
  const [mainBox, setMainBox] = React.useState("DashBoard");
  const [openTeacherSubMenu, setOpenTeacherSubMenu] = React.useState(false);
  const [openStudentSubMenu, setOpenStudentSubMenu] = React.useState(false);
  const [openMasterSubMenu, setOpenMasterSubMenu] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(!open);
    setOpenStudentSubMenu(false);
    setOpenTeacherSubMenu(false);
    setOpenMasterSubMenu(false);
  };

  const handleClick = (text) => {
    setMainBox(text);
  };
  const handleMasterClick = () => {
    setOpenMasterSubMenu(!openMasterSubMenu);
    setOpen(true);
  };

  const handleStudentClick = () => {
    setOpenStudentSubMenu(!openStudentSubMenu);
    setOpen(true);
  };
  const handleTeacherClick = () => {
    setOpenTeacherSubMenu(!openTeacherSubMenu);
    setOpen(true);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        sx={{
          backdropFilter: "blur(8px)",
          // backgroundColor: "rgba(255, 255, 255, 0.8)",
        }}
        position="fixed"
        // open={open}
      >
        <Toolbar>
          <IconButton
            color="secondary"
            aria-label="open drawer"
            onClick={handleDrawerClose}
            edge="start"
            sx={{
              marginRight: 5,
              // ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <div className="navBarDiv">
            <img
              className="schoolLogo"
              src="https://img.freepik.com/premium-vector/education-school-logo-design_586739-1335.jpg?w=2000"
            />
            <Typography variant="h6" noWrap component="div">
              Kst International School
            </Typography>
            <div className="AppBarRight">
              <div className="toggleButton">
                <Button
                  sx={{ marginLeft: "auto" }}
                  startIcon={
                    mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
                  }
                  color="secondary"
                  onClick={() => setMode(mode === "dark" ? "light" : "dark")}
                ></Button>
              </div>
              <IconButton>
                <Badge badgeContent={4} overlap="circular" color="secondary">
                  <EmailIcon color="secondary" />
                </Badge>
              </IconButton>
              <Avatar
                alt="KST"
                color="secondary"
                sx={{
                  width: 30,
                  height: 30,
                  margin: "auto",
                }}
                src="/static/images/avatar/2.jpg"
              />
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader></DrawerHeader>
        <Divider color="secondary" />
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={() => handleClick("DashBoard")}>
            <ListItemIcon>
              <SpaceDashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
          <ListItemButton onClick={handleTeacherClick}>
            <ListItemIcon>
              <PiChalkboardTeacherFill className="icons" />
            </ListItemIcon>
            <ListItemText primary="Teachers" />
            {openTeacherSubMenu ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openTeacherSubMenu} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => handleClick("Teachers")}
              >
                <ListItemIcon>
                  <FaPersonChalkboard className="icons" />
                </ListItemIcon>
                <ListItemText primary="Teachers" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => handleClick("TeacherDetails")}
              >
                <ListItemIcon>
                  <BsPersonVcardFill className="icons" />
                </ListItemIcon>
                <ListItemText primary="TeacherDetails" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => handleClick("AddNewTeacher")}
              >
                <ListItemIcon>
                  <PersonAddIcon />
                </ListItemIcon>
                <ListItemText primary="AddNewTeacher" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={handleStudentClick}>
            <ListItemIcon>
              <PiStudentFill className="icons" />
            </ListItemIcon>
            <ListItemText primary="Students" />
            {openStudentSubMenu ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openStudentSubMenu} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => handleClick("Students")}
              >
                <ListItemIcon>
                  <PiStudentFill className="icon" />
                </ListItemIcon>
                <ListItemText primary="Student" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => handleClick("StudentDetails")}
              >
                <ListItemIcon></ListItemIcon>
                <ListItemText primary="StudentDetails" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => handleClick("AddNewStudent")}
              >
                <ListItemIcon></ListItemIcon>
                <ListItemText primary="Add New Student" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => handleClick("StudentPromotion")}
              >
                <ListItemIcon></ListItemIcon>
                <ListItemText primary="Student Promotion" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
        <Divider />
        <List>
          {/* 

 */}

          <ListItemButton onClick={handleMasterClick}>
            <ListItemIcon>
              <AdminPanelSettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Master" />
            {openMasterSubMenu ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openMasterSubMenu} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {MastersData.map((data) => (
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={() => handleClick(data)}
                >
                  <ListItemIcon>
                    <PiStudentFill className="icon" />
                  </ListItemIcon>
                  <ListItemText primary={data} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
          {/* {uniqueTypes.map((type) => (
            <React.Fragment key={type}>
              <ListItemButton onClick={handleMasterClick}>
                <ListItemIcon>
                  <AdminPanelSettingsIcon />
                </ListItemIcon>
                <ListItemText primary={type} />
                {openMasterSubMenu ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              {MastersData.map((data) => (
                <Collapse
                  key={data.name}
                  in={openMasterSubMenu}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    <ListItemButton
                      sx={{ pl: 4 }}
                      onClick={() => handleClick(data.name)}
                    >
                      <ListItemIcon></ListItemIcon>
                      {(() => {
                        switch (true) {
                          case type === "Master" && data.type === "Master":
                            return <ListItemText primary={data.name} />;
                          case type === "Transaction" &&
                            data.type === "Transaction":
                            return <ListItemText primary={data.name} />;
                          case type === "Stock Transaction" &&
                            data.type === "Stock Transaction":
                            return <ListItemText primary={data.name} />;
                          case type === "Reports" && data.type === "Reports":
                            return <ListItemText primary={data.name} />;
                        }
                      })()}
                    </ListItemButton>
                  </List>
                </Collapse>
              ))}
            </React.Fragment>
          ))} */}
          {/* {["Master", "Others"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={() => handleClick(text)}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? (
                    <AdminPanelSettingsIcon />
                  ) : (
                    <SettingsIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))} */}
        </List>
      </Drawer>
      <Box component="main" backgroundColor="primary" sx={{ flexGrow: 1 }}>
        <DrawerHeader />
        <Body data={mainBox} />
      </Box>
    </Box>
  );
}
