import {
  Box,
  ButtonGroButton,
  up,
  Container,
  Typography,
  Button,
  ButtonGroup,
} from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup, {
  toggleButtonGroupClasses,
} from "@mui/material/ToggleButtonGroup";
import styled, { css } from "styled-components";
import CheckIcon from "@mui/icons-material/Check";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  // [`& .${toggleButtonGroupClasses.grouped}`]: {
  //   // margin: theme.spacing(0.5),
  //   border: 0,
  //   // borderRadius: theme.shape.borderRadius,
  //   [`&.${toggleButtonGroupClasses.disabled}`]: {
  //     border: 0,
  //   },
  // },
  // [`& .${toggleButtonGroupClasses.middleButton},& .${toggleButtonGroupClasses.lastButton}`]:
  //   {
  //     marginLeft: -1,
  //     borderLeft: "1px solid transparent",
  //   },
}));

function Pricing() {
  const [pricing, setPricing] = React.useState("Monthly");
  return (
    <div className="black-section" style={{ backgroundColor: "black" }}>
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom>
          OUR MEMBERSHIP PLANS
        </Typography>
        <Typography align="center" component={"p"} className="special-p">
          Access multiple top gyms through one application
        </Typography>
      </Container>
      <Container>
        {/* <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "& > *": {
              m: 1,
            },
          }}
        >
          <ButtonGroup
            size="large"
            aria-label="Large Button group"
            sx={{ m: 3, p: 2, color: "white" }}
            color="white"
          >
            <Button>Monthly</Button>
            <Button>3 months</Button>
            <Button>yearly</Button>
          </ButtonGroup>
        </Box> */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            "& > *": {
              // m: 5,
              mt: 7,
            },
          }}
        >
          <Paper
            sx={{
              backgroundColor: "white",
              color: "black",
              px: 1,
              py: 1,
              borderRadius: "40px",
            }}
          >
            <Button
              sx={{
                color: "#f29603",
                backgroundColor: "black",
                borderRadius: "30px",
                p: { xs: 1, sm: 2 },
              }}
            >
              Monthly
            </Button>
            <Button sx={{ color: "black", p: 2 }}>3 months</Button>
            <Button sx={{ color: "black", p: 2 }}>yearly</Button>
          </Paper>
        </Box>
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            <div className="price-box mt_30 text-left">
              <h2>
                $50 <span>/month</span>
              </h2>
              <h3>Base</h3>
              <p>
                For most businesses that want to
                <br />
                otpimize web queries
              </p>
              <ul>
                <li>
                  <i className="far fa-check"></i>All limited links
                </li>
                <li>
                  <i className="far fa-check"></i>Own analytics platform
                </li>
                <li>
                  <i className="far fa-check"></i>Chat support
                </li>
                <li>
                  <i className="far fa-check"></i>Optimize hashtags
                </li>
                <li>
                  <i className="far fa-check"></i>Unlimited users
                </li>
              </ul>
              <a className="price-btn" href="#">
                Choose plan
              </a>
            </div>
            <div class="price-box position-relative  mt_30 text-left">
              <h2>
                $100 <span>/month</span>
              </h2>
              <h3>Pro</h3>
              <p>
                For most businesses that want to
                <br />
                otpimize web queries
              </p>
              <ul>
                <li>
                  <i class="far fa-check">{/* <CheckIcon /> */}</i>
                  All limited links
                </li>
                <li>
                  <i class="far fa-check"></i>Own analytics platform
                </li>
                <li>
                  <i class="far fa-check"></i>Chat support
                </li>
                <li>
                  <i class="far fa-check"></i>Optimize hashtags
                </li>
                <li>
                  <i class="far fa-check"></i>Unlimited users
                </li>
              </ul>
              <a class="price-btn" href="#">
                Choose plan
              </a>
            </div>

            <div class="price-box mt_30 text-left">
              <h2>
                $200 <span>/month</span>
              </h2>
              <h3>Enterprise</h3>
              <p>
                For most businesses that want to
                <br />
                otpimize web queries
              </p>
              <ul>
                <li>
                  <i class="far fa-check"></i>All limited links
                </li>
                <li>
                  <i class="far fa-check"></i>Own analytics platform
                </li>
                <li>
                  <i class="far fa-check"></i>Chat support
                </li>
                <li>
                  <i class="far fa-check"></i>Optimize hashtags
                </li>
                <li>
                  <i class="far fa-check"></i>Unlimited users
                </li>
              </ul>
              <a class="price-btn" href="#">
                Choose plan
              </a>
            </div>
          </Box>
        </Container>
      </Container>
    </div>
  );
}

export default Pricing;
