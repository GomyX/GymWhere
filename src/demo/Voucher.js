import { Box, Button, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function Voucher() {
  return (
    <div>
      <div id="Voucher">
        <Box
          sx={{ display: "flex", alignItems: "center", margin: "20px 80px" }}
        >
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
              Ready to get started?
            </Typography>
            <Typography
              sx={{
                marginBottom: "30px",
                display: { xs: "none", sm: "block" },
              }}
              color="text.secondary"
            >
              Discover the cutting-edge features and exclusive offers that will
              revolutionize your fitness journey. Take advantage of our
              limited-time voucher discount
            </Typography>
            <Button
              variant="contained"
              sx={{
                borderRadius: 9,
                backgroundColor: "#000",
                position: "relative",
                py: 3,
                px: 7,
                fontSize: "1.1em",
                fontWeight: "bold",
                letterSpacing: "1px",
                transition: "0.3s ease",
                ml: { xs: 2, sm: 0 },
              }}
              className="main-btn"
              onClick={() => {
                const pricing = document.getElementById("pricing");
                pricing.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get Voucher Now
              <KeyboardArrowRightIcon />
              {/* <ArrowForwardIcon sx={{ paddingLeft: "10px", width: "50px" }} /> */}
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

export default Voucher;
