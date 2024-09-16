import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useScrollPosition from "../hooks/useScrollPosition";
import LanguageIcon from "@mui/icons-material/Language";
import { Stack } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;
const navItems = ["Home", "Discover", "nutrition Plans", "personal training"];

function Navbar(props) {
  const { window } = props;
  const nav = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const scrollPosition = useScrollPosition();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          bgcolor: scrollPosition > 10 ? "rgba(0,0,0,.7)" : "transparent",
          backdropFilter: scrollPosition > 10 && "blur(60px)",
          color: "black",
          padding: {
            sm: "5px",
            md: scrollPosition > 10 ? "10px 80px" : "60px 80px",
          },
        }}
        elevation={0}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "white" }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography> */}

          <img
            src="./images/logoWithLettersWhite.png"
            alt="logo"
            style={{
              // flexGrow: 1,
              display: { xs: "none", sm: "block" },
              width: "250px",
              marginRight: "auto",
              padding: "10px 0",
            }}
          />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{ color: "#fff", fontSize: 15 }}
                onClick={() => {
                  const element = document.getElementById(`${item}`);
                  element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <Button sx={{ color: "white", m: 2 }}>
              <LanguageIcon fontSize="medium" sx={{ m: 1 }} />
              <Typography variant="body2">EN</Typography>
            </Button>
            <Button
              variant="contained"
              sx={{
                borderRadius: "10px",
                backgroundColor: "#f29603",
                p: 1,
                fontSize: "1.1em",
                fontWeight: "bold",
                letterSpacing: "1px",
                transition: "0.3s ease",
                ml: { xs: 2, sm: 1 },
              }}
              className="main-btn"
              onClick={() => {
                nav("/gymwhere-website/demo");
              }}
            >
              Get Voucher <KeyboardArrowRightIcon />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
