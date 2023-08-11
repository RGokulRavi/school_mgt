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
import Badge from "@mui/material/Badge";
import { MastersData } from "../../Global";
import Button from "@mui/material/Button";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { FaPersonChalkboard } from "react-icons/fa6";
import { BsPersonVcardFill } from "react-icons/bs";
import { PiStudentFill } from "react-icons/pi";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { Route, Routes, useNavigate } from "react-router-dom";
import DashBoard from "./DashBoard";
import AddNewStudent from "../Students/AddNewStudent";
import StateMaster from "../Master/MasterFolder/StateMaster";
import Students from "../Students/Students";
import StudentPromotion from "../Students/StudentPromotion";
import StudentDetails from "../Students/StudentDetails";
import { alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import LoginPage from "../../Pages/Login/LoginPage";
import CityMaster from "../Master/MasterFolder/CityMaster";
import SchoolSetup from "../Master/MasterFolder/SchoolSetup";
import { useTheme } from "@emotion/react";
import StateAndCIty from "../Master/MasterFolder/StateAndCIty";

const drawerWidth = 240;
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

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

// const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   width: drawerWidth,
//   flexShrink: 0,
//   whiteSpace: "nowrap",
//   boxSizing: "border-box",
//   ...(open && {
//     ...openedMixin(theme),
//     "& .MuiDrawer-paper": openedMixin(theme),
//   }),
//   ...(!open && {
//     ...closedMixin(theme),
//     "& .MuiDrawer-paper": closedMixin(theme),
//   }),
// }));
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => {
  const drawerWidth = 240; // Replace with your desired width
  return {
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
  };
});

export default function MiniDrawer({ mode, setMode }) {
  const [selectedItem, setSelectedItem] = React.useState(null);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [mainBox, setMainBox] = React.useState("DashBoard");
  const [openTeacherSubMenu, setOpenTeacherSubMenu] = React.useState(false);
  const [openStudentSubMenu, setOpenStudentSubMenu] = React.useState(false);
  const [openMasterSubMenu, setOpenMasterSubMenu] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleItemClick = (item) => {
    setSelectedItem(item);
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
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );
  const mobileMenuId = "primary-search-account-menu-mobile";

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
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <div className="AppBarRight">
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <div className="toggleButton">
                  <Button
                    sx={{ marginLeft: "auto" }}
                    startIcon={
                      mode === "dark" ? (
                        <Brightness7Icon />
                      ) : (
                        <Brightness4Icon />
                      )
                    }
                    color="secondary"
                    onClick={() => setMode(mode === "dark" ? "light" : "dark")}
                  ></Button>
                </div>
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                >
                  <Badge badgeContent={4} color="error">
                    <MailIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={17} color="error">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </Box>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Box>
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
          <ListItemButton onClick={() => navigate("/")}>
            <ListItemIcon>
              <SpaceDashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
          <Divider />
          <ListItemButton onClick={handleMasterClick}>
            <ListItemIcon>
              <AdminPanelSettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Master" />
            {openMasterSubMenu ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Divider />
          <Collapse in={openMasterSubMenu} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {MastersData.map((data) => (
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={() => navigate(`/master/${data.value}`)}
                >
                  <ListItemIcon>
                    <PiStudentFill className="icon" />
                  </ListItemIcon>
                  <ListItemText primary={data.name} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
          <ListItemButton onClick={handleTeacherClick}>
            <ListItemIcon>
              <PiChalkboardTeacherFill className="icons" />
            </ListItemIcon>
            <ListItemText primary="Teachers" />
            {openTeacherSubMenu ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Divider />
          <Collapse in={openTeacherSubMenu} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => navigate("/teachers")}
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
                onClick={() => navigate("/students")}
              >
                <ListItemIcon>
                  <PiStudentFill className="icon" />
                </ListItemIcon>
                <ListItemText primary="Student" />
              </ListItemButton>

              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => navigate("/student/add_new_student")}
              >
                <ListItemIcon></ListItemIcon>
                <ListItemText primary="Add New Student" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => navigate("/student/student_promotion")}
              >
                <ListItemIcon></ListItemIcon>
                <ListItemText primary="Student Promotion" />
              </ListItemButton>
            </List>
          </Collapse>
          <Divider />
        </List>
      </Drawer>
      <Box
        component="main"
        backgroundColor="background.default"
        sx={{
          flexGrow: 1,
          content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            overflowY: "scroll", // Enable vertical scrolling
            scrollbarWidth: "thin", // For Firefox
            scrollbarColor: `${theme.palette.primary.main} ${theme.palette.background.default}`, // Use primary color and background color from the theme
            "&::-webkit-scrollbar": {
              width: "6px",
              height: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: theme.palette.primary.main, // Thumb color using primary color from the theme
              borderRadius: "3px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: theme.palette.primary.light, // Thumb color on hover using light shade of primary color
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: theme.palette.background.default, // Track color using background color from the theme
            },
          },
        }}
      >
        <DrawerHeader />
        <div className="PageHeading"></div>
        <div className="RoutesDiv">
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/student" element={<StudentDetails />} />
            <Route
              path="/student/add_new_student"
              element={<AddNewStudent />}
            />
            <Route
              path="/student/student_promotion"
              element={<StudentPromotion />}
            />
            <Route path="/master/state" element={<StateMaster />} />
            <Route path="/master/state_and_city" element={<StateAndCIty />} />
            <Route path="/master/city" element={<CityMaster />} />
            <Route path="/master/school" element={<SchoolSetup />} />
            <Route path="/students" element={<Students />} />
            <Route path="/student/view/:id" element={<StudentDetails />} />
            <Route path="/" element={<DashBoard />} />
          </Routes>
        </div>
      </Box>
    </Box>
  );
}
