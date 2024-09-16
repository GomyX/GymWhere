import React from "react";
import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";

function Slider() {
  return (
    <div
      style={{
        position: "relative",
        height: "200vh",
        overflow: "hidden",
        maskImage:
          "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 10%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 1) 90%,rgba(255, 255, 255, 0) 100%)",
      }}
    >
      <motion.div
        style={{
          display: "flex",
          gap: "30px",
          justifyContent: "center",
          flexGrow: 1,
        }}
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              borderRadius: "18.5px",
              width: "230px",
              height: "300px",
            }}
          >
            <img
              src="./images/edgar-chaparro-sHfo3WOgGTU-unsplash.jpg"
              width="230px"
              height="300px"
              alt="icon"
              style={{
                borderRadius: "18.5px",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "black",
              borderRadius: "18.5px",
              p: 5,
              gap: 2,
              width: "230px",
              height: "300px",

              alignItems: "center",
            }}
          >
            <Typography variant="h5" color="white" sx={{ textAlign: "center" }}>
              Nutrition Plans
            </Typography>
            <img src="./images/image 11.png" width="80px" alt="icon" />
            <Typography variant="p" color="white">
              Coming Soon...
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#F29603",
              borderRadius: "18.5px",
              p: 5,
              gap: 2,
              width: "230px",
              height: "300px",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              color="white"
              // style={{ fontWeight: "" }}
            >
              AI personal trainer
            </Typography>
            <img src="./images/image 15.png" width="80px" alt="icon" />
            <Typography variant="p" color="white">
              Coming Soon...
            </Typography>
          </Box>
          <Box
            sx={{
              borderRadius: "18.5px",
              width: "230px",
              height: "300px",
            }}
          >
            <img
              src="./images/patrick-kool-zTwmxau8DlQ-unsplash.jpg"
              width="230px"
              height="300px"
              alt="icon"
              style={{
                borderRadius: "18.5px",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#F29603",
              borderRadius: "18.5px",
              p: 5,
              gap: 3,
              width: "230px",
              height: "300px",

              alignItems: "center",
            }}
          >
            <Typography variant="h4" color="white">
              Stay fit
            </Typography>
            <img src="./images/image 17.png" width="80px" alt="icon" />
            <Typography variant="p" color="white">
              Coming Soon...
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "black",
              borderRadius: "18.5px",
              p: 5,
              gap: 2,
              width: "230px",
              height: "300px",

              alignItems: "center",
            }}
          >
            <Typography variant="h4" color="white">
              Anytime, Anywhere
            </Typography>
            <img src="./images/image 16.png" width="80px" alt="icon" />
            <Typography variant="p" color="white">
              Coming Soon...
            </Typography>
          </Box>
          <Box
            sx={{
              borderRadius: "18.5px",
              width: "230px",
              height: "300px",
            }}
          >
            <img
              src="./images/edgar-chaparro-sHfo3WOgGTU-unsplash.jpg"
              width="230px"
              height="300px"
              alt="icon"
              style={{
                borderRadius: "18.5px",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "black",
              borderRadius: "18.5px",
              p: 5,
              gap: 2,
              width: "230px",
              height: "300px",

              alignItems: "center",
            }}
          >
            <Typography variant="h5" color="white" sx={{ textAlign: "center" }}>
              Nutrition Plans
            </Typography>
            <img src="./images/image 11.png" width="80px" alt="icon" />
            <Typography variant="p" color="white">
              Coming Soon...
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#F29603",
              borderRadius: "18.5px",
              p: 5,
              gap: 2,
              width: "230px",
              height: "300px",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              color="white"
              // style={{ fontWeight: "" }}
            >
              AI personal trainer
            </Typography>
            <img src="./images/image 15.png" width="80px" alt="icon" />
            <Typography variant="p" color="white">
              Coming Soon...
            </Typography>
          </Box>
          <Box
            sx={{
              borderRadius: "18.5px",
              width: "230px",
              height: "300px",
            }}
          >
            <img
              src="./images/patrick-kool-zTwmxau8DlQ-unsplash.jpg"
              width="230px"
              height="300px"
              alt="icon"
              style={{
                borderRadius: "18.5px",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#F29603",
              borderRadius: "18.5px",
              p: 5,
              gap: 3,
              width: "230px",
              height: "300px",

              alignItems: "center",
            }}
          >
            <Typography variant="h4" color="white">
              Stay fit
            </Typography>
            <img src="./images/image 17.png" width="80px" alt="icon" />
            <Typography variant="p" color="white">
              Coming Soon...
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "black",
              borderRadius: "18.5px",
              p: 5,
              gap: 2,
              width: "230px",
              height: "300px",

              alignItems: "center",
            }}
          >
            <Typography variant="h4" color="white">
              Anytime, Anywhere
            </Typography>
            <img src="./images/image 1.png" width="80px" alt="icon" />
            <Typography variant="p" color="white">
              Coming Soon...
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // backgroundColor: "black",
            // borderRadius: "18.5px",
            // p: 5,
            gap: 3,
            // width: "230px",
            alignItems: "center",
            // translateY: "50px",
            marginTop: "150px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#F29603",
              borderRadius: "18.5px",
              p: 5,
              gap: 3,
              width: "230px",
              height: "300px",

              alignItems: "center",
            }}
          >
            <Typography variant="h4" color="white">
              Stay fit
            </Typography>
            <img src="./images/image 17.png" width="80px" alt="icon" />
            <Typography variant="p" color="white">
              Coming Soon...
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "black",
              borderRadius: "18.5px",
              p: 5,
              gap: 2,
              width: "230px",
              height: "300px",

              alignItems: "center",
            }}
          >
            <Typography variant="h4" color="white">
              Anytime, Anywhere
            </Typography>
            <img src="./images/image 1.png" width="80px" alt="icon" />
            <Typography variant="p" color="white">
              Coming Soon...
            </Typography>
          </Box>
          <Box
            sx={{
              borderRadius: "18.5px",
              width: "230px",
              height: "300px",
            }}
          >
            <img
              src="./images/hayley-kim-studios-eot-ka5dM7Q-unsplash.jpg"
              width="230px"
              height="300px"
              alt="icon"
              style={{
                borderRadius: "18.5px",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "black",
              borderRadius: "18.5px",
              p: 5,
              gap: 2,
              width: "230px",
              height: "300px",

              alignItems: "center",
            }}
          >
            <Typography variant="h5" color="white" sx={{ textAlign: "center" }}>
              Nutrition Plans
            </Typography>
            <img src="./images/image 11.png" width="80px" alt="icon" />
            <Typography variant="p" color="white">
              Coming Soon...
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#F29603",
              borderRadius: "18.5px",
              p: 5,
              gap: 2,
              width: "230px",
              height: "300px",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              color="white"
              // style={{ fontWeight: "" }}
            >
              AI personal trainer
            </Typography>
            <img src="./images/image 15.png" width="80px" alt="icon" />
            <Typography variant="p" color="white">
              Coming Soon...
            </Typography>
          </Box>
          <Box
            sx={{
              borderRadius: "18.5px",
              width: "230px",
              height: "300px",
            }}
          >
            <img
              src="./images/nathan-dumlao-NXMZxygMw8o-unsplash.jpg"
              width="230px"
              height="300px"
              alt="icon"
              style={{
                borderRadius: "18.5px",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#F29603",
              borderRadius: "18.5px",
              p: 5,
              gap: 3,
              width: "230px",
              height: "300px",

              alignItems: "center",
            }}
          >
            <Typography variant="h4" color="white">
              Stay fit
            </Typography>
            <img src="./images/image 17.png" width="80px" alt="icon" />
            <Typography variant="p" color="white">
              Coming Soon...
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "black",
              borderRadius: "18.5px",
              p: 5,
              gap: 2,
              width: "230px",
              height: "300px",

              alignItems: "center",
            }}
          >
            <Typography variant="h4" color="white">
              Anytime, Anywhere
            </Typography>
            <img src="./images/image 1.png" width="80px" alt="icon" />
            <Typography variant="p" color="white">
              Coming Soon...
            </Typography>
          </Box>
          <Box
            sx={{
              borderRadius: "18.5px",
              width: "230px",
              height: "300px",
            }}
          >
            <img
              src="./images/hayley-kim-studios-eot-ka5dM7Q-unsplash.jpg"
              width="230px"
              height="300px"
              alt="icon"
              style={{
                borderRadius: "18.5px",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "black",
              borderRadius: "18.5px",
              p: 5,
              gap: 2,
              width: "230px",
              height: "300px",

              alignItems: "center",
            }}
          >
            <Typography variant="h5" color="white" sx={{ textAlign: "center" }}>
              Nutrition Plans
            </Typography>
            <img src="./images/image 11.png" width="80px" alt="icon" />
            <Typography variant="p" color="white">
              Coming Soon...
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#F29603",
              borderRadius: "18.5px",
              p: 5,
              gap: 2,
              width: "230px",
              height: "300px",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              color="white"
              // style={{ fontWeight: "" }}
            >
              AI personal trainer
            </Typography>
            <img src="./images/image 15.png" width="80px" alt="icon" />
            <Typography variant="p" color="white">
              Coming Soon...
            </Typography>
          </Box>
          <Box
            sx={{
              borderRadius: "18.5px",
              width: "230px",
              height: "300px",
            }}
          >
            <img
              src="./images/nathan-dumlao-NXMZxygMw8o-unsplash.jpg"
              width="230px"
              height="300px"
              alt="icon"
              style={{
                borderRadius: "18.5px",
              }}
            />
          </Box>
        </Box>
      </motion.div>
    </div>
  );
}

export default Slider;
