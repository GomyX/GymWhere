import { Box, Button, Typography } from "@mui/material";
import React from "react";

function Hero() {
  return (
    <div>
      <div id="Home">
        <Box sx={{ display: "flex", alignItems: "center", margin: "0 80px" }}>
          <div className="txt-section" style={{ paddingRight: "50px" }}>
            <Typography
              variant="h3"
              sx={{
                marginBottom: "10px",
                fontSize: { xs: "40px" },
                // padding: { xs: "20px", sm: 0 },
                fontWeight: "bold",
                color: "black",
                width: "500px",
              }}
            >
              Unlock the Potential of our Fitness Website
            </Typography>
            <Typography
              sx={{
                marginBottom: "30px",
                display: { xs: "none", sm: "block" },
              }}
              color="text.secondary"
            >
              Join our community and achieve your fitness goals with expert
              trainers and comprehensive programs.
            </Typography>
            <Button
              variant="contained"
              sx={{
                borderRadius: 9,
                backgroundColor: "#000",
                position: "relative",
                py: 3,
                px: 10,
                fontSize: "1.1em",
                fontWeight: "bold",
                letterSpacing: "1px",
                transition: "0.3s ease",
                ml: { xs: 2, sm: 0 },
              }}
              className="main-btn"
              onClick={() => {
                const voucher = document.getElementById("Voucher");
                voucher.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Scroll Down
              {/* <KeyboardArrowRightIcon /> */}
              {/* <ArrowForwardIcon sx={{ paddingLeft: "10px", width: "50px" }} /> */}
              <div class="down-arrow"></div>
            </Button>
          </div>
          {/* <div className="img-section">
          <img
            src="./images/Tennis-bro.png"
            alt="landing-img"
            style={{ width: "500px", marginLeft: "20px" }}
          />
        </div> */}
        </Box>
      </div>
    </div>
  );
}

export default Hero;
