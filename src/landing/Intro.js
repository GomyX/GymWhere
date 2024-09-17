import { Button, Container, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
//import { useNavigate } from "react-router-dom";

const Intro = () => {
  //const nav = useNavigate();
  return (
    <div id="Home">
      <Container sx={{ display: "flex", alignItems: "center" }}>
        <div className="txt-section" style={{ paddingRight: "50px" }}>
          <Typography
            variant="h3"
            sx={{
              marginBottom: "10px",
              fontSize: { xs: "40px" },
              padding: { xs: "20px", sm: 0 },
              fontWeight: "bold",
            }}
          >
            TRANSFORM YOUR BODY
          </Typography>
          <Typography
            sx={{ marginBottom: "30px", display: { xs: "none", sm: "block" } }}
            //  color="text.secondary"
          >
            Join our community and achieve your fitness goals with expert
            trainers and comprehensive programs.
          </Typography>
          <Button
            variant="contained"
            sx={{
              borderRadius: "10px",
              backgroundColor: "#f29603",
              p: 2,
              fontWeight: "bold",
              ml: { xs: 2, sm: 0 },
            }}
            //onClick={() => nav("/signup")}
          >
            Subscriptions{" "}
            <ArrowForwardIcon sx={{ paddingLeft: "10px", width: "50px" }} />
          </Button>
        </div>
        {/* <div className="img-section">
          <img
            src="./images/Tennis-bro.png"
            alt="landing-img"
            style={{ width: "500px", marginLeft: "20px" }}
          />
        </div> */}
      </Container>
    </div>
  );
};

export default Intro;
