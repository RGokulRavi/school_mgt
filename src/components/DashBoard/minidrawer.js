import * as React from "react";
import "./styles.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
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
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PsychologyIcon from "@mui/icons-material/Psychology";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import Body from "../Body/Body";
import ListSubheader from "@mui/material/ListSubheader";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";

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

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [mainBox, setMainBox] = React.useState("DashBoard");
  const [openTeacherSubMenu, setOpenTeacherSubMenu] = React.useState(false);
  const [openStudentSubMenu, setOpenStudentSubMenu] = React.useState(false);
  const MasterData = ["State Master", "City Master", "School Setup"];
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setOpenStudentSubMenu(false);
    setOpenTeacherSubMenu(false);
  };

  const handleMasterClick = (text) => {
    setMainBox(text);
  };

  const handleStudentClick = () => {
    setOpenStudentSubMenu(!openStudentSubMenu);
  };
  const handleTeacherClick = () => {
    setOpenTeacherSubMenu(!openTeacherSubMenu);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        sx={{
          backdropFilter: "blur(8px)",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
        }}
        position="fixed"
        open={open}
      >
        <Toolbar sx={{ color: "black" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Kst International School
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Typography>Test</Typography>

          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={() => handleMasterClick("DashBoard")}>
            <ListItemIcon>{/* <SendIcon /> */}</ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
          <ListItemButton onClick={handleTeacherClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Teachers" />
            {openTeacherSubMenu ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openTeacherSubMenu} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => handleMasterClick("Teachers")}
              >
                <ListItemIcon></ListItemIcon>
                <ListItemText primary="Teachers" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => handleMasterClick("TeacherDetails")}
              >
                <ListItemIcon></ListItemIcon>
                <ListItemText primary="TeacherDetails" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => handleMasterClick("AddNewTeacher")}
              >
                <ListItemIcon></ListItemIcon>
                <ListItemText primary="AddNewTeacher" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={handleStudentClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Students" />
            {openStudentSubMenu ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openStudentSubMenu} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => handleMasterClick("Students")}
              >
                <ListItemIcon></ListItemIcon>
                <ListItemText primary="Student" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => handleMasterClick("StudentDetails")}
              >
                <ListItemIcon></ListItemIcon>
                <ListItemText primary="StudentDetails" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => handleMasterClick("AddNewStudent")}
              >
                <ListItemIcon></ListItemIcon>
                <ListItemText primary="Add New Student" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
        <Divider />
        <List>
          {["Master", "Others"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={() => handleMasterClick(text)}
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
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
        <DrawerHeader />
        <Body data={mainBox} />
      </Box>
    </Box>
  );
}

// const MasterDataFunction = () => {
//   const MasterData = [
//     "State Master",
//     "City Master",
//     "School Setup",
//     "Class Master",
//     "Blood Group Master",
//     "Student Master",
//     "Student Addmission Entry",
//   ];
//   return (
//     <div className="MasterDataDiv">
//       {MasterData.map((data) => (
//         <CardFunction data={data} />
//       ))}
//     </div>
//   );
// };

// function CardFunction({ data }) {
//   return (
//     <div className="Card">
//       <Card
//         sx={{ maxWidth: 300, minWidth: 200 }}
//         onClick={() => stateMasters()}
//       >
//         <CardActionArea>
//           <CardContent>
//             <Typography gutterBottom variant="h6" component="div">
//               {data}
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//       </Card>
//     </div>
//   );
// }

// const test = (data) => {
//     const words = data.match(/\w+/g);
//     const camelCase = words
//       .map((word, index) =>
//         index === 0
//           ? word.toLowerCase()
//           : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
//       )
//       .join("");
//   console.log("first");
// };

// const stateMasters = () => {
//   return (
//     <div className="StateMaster">
//       <Typography>Test</Typography>
//     </div>
//   );
// };
