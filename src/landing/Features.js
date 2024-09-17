import { Box, Container, Grid2, Stack, Typography } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import React from "react";
import Grid from "@mui/material/Grid2";

function Features() {
  return (
    <div className="black-section" style={{ backgroundColor: "black" }}>
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom>
          WHY CHOOSE US
        </Typography>
        <Typography align="center" component={"p"} className="special-p">
          this is a paragraph this is a paragraph this is a paragraph
        </Typography>
      </Container>
      <Box>
        <Container
          sx={{
            display: "flex",
            // alignps: "center",
            my: 7,
            gap: 5,
            flexWrap: "wrap",
            flexGrow: 1,
            justifyContent: "space-around",
          }}
        >
          <Box className="feature-img">
            <img
              src="./images/woman-helping-man-gym.jpg"
              alt="features"
              width={"500px"}
            />
          </Box>
          <Box
            className="features"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
              flexGrow: 1,
              maxWidth: "600px",
            }}
          >
            <div className="feature">
              <FitnessCenterIcon
                style={{
                  backgroundColor: "#393937",
                  padding: "10px",
                  color: "#f29603",
                  borderRadius: "5px",
                  width: "50px",
                  height: "50px",
                }}
              />
              <Typography variant="h6">WORKOUT</Typography>
              <Typography variant="body1">
                this is a paragraph this is a paragraph
              </Typography>
            </div>
            <div className="feature">
              <FitnessCenterIcon
                style={{
                  backgroundColor: "#393937",
                  padding: "10px",
                  color: "#f29603",
                  borderRadius: "5px",
                  width: "50px",
                  height: "50px",
                }}
              />
              <Typography variant="h6">WORKOUT</Typography>
              <Typography variant="body1">
                this is a paragraph this is a paragraph
              </Typography>
            </div>
            <div className="feature">
              <FitnessCenterIcon
                style={{
                  backgroundColor: "#393937",
                  padding: "10px",
                  color: "#f29603",
                  borderRadius: "5px",
                  width: "50px",
                  height: "50px",
                }}
              />
              <Typography variant="h6">WORKOUT</Typography>
              <Typography variant="body1">
                this is a paragraph this is a paragraph
              </Typography>
            </div>
            <div className="feature">
              <FitnessCenterIcon
                style={{
                  backgroundColor: "#393937",
                  padding: "10px",
                  color: "#f29603",
                  borderRadius: "5px",
                  width: "50px",
                  height: "50px",
                }}
              />
              <Typography variant="h6">WORKOUT</Typography>
              <Typography variant="body1">
                this is a paragraph this is a paragraph
              </Typography>
            </div>
          </Box>
        </Container>
      </Box>
    </div>
  );
}

export default Features;
