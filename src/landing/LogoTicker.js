import { Container, Stack } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

function LogoTicker() {
  return (
    <div>
      <Container sx={{ p: 2 }}>
        <Stack
          direction="row"
          sx={{
            overflow: "hidden",
            maskImage:
              "linear-gradient(to right,transparent, black, transparent)",
          }}
        >
          <motion.div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 60,
              flex: "none",
              paddingRight: "60px",
              width: "100%",
              justifyContent: "space-between",
            }}
            // direction="row"
            // alignItems="center"
            // //   justifyContent="space-between"
            // flexWrap="wrap"
            // gap={10}
            // sx={{ pr: 2, backgroundColor: "red" }}
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <img
              src="./images/gym1.jpg"
              alt="gym logo"
              width="110px"
              height="90px"
            />
            <img
              src="./images/66_barbel.jpg"
              alt="gym logo"
              width="110px"
              height="90px"
            />
            <img
              src="./images/gym3.jpg"
              alt="gym logo"
              width="110px"
              height="90px"
            />
            <img
              src="./images/gym1.jpg"
              alt="gym logo"
              width="110px"
              height="90px"
            />
            <img
              src="./images/66_barbel.jpg"
              alt="gym logo"
              width="110px"
              height="90px"
            />
            <img
              src="./images/gym3.jpg"
              alt="gym logo"
              width="110px"
              height="90px"
            />
            <img
              src="./images/gym1.jpg"
              alt="gym logo"
              width="110px"
              height="90px"
            />
            <img
              src="./images/66_barbel.jpg"
              alt="gym logo"
              width="110px"
              height="90px"
            />
            <img
              src="./images/gym3.jpg"
              alt="gym logo"
              width="110px"
              height="90px"
            />
            <img
              src="./images/gym1.jpg"
              alt="gym logo"
              width="110px"
              height="90px"
            />
            <img
              src="./images/66_barbel.jpg"
              alt="gym logo"
              width="110px"
              height="90px"
            />
            <img
              src="./images/gym3.jpg"
              alt="gym logo"
              width="110px"
              height="90px"
            />
          </motion.div>
        </Stack>
      </Container>
    </div>
  );
}

export default LogoTicker;
