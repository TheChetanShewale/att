import React from "react";
import { AppBar, Toolbar, Typography, Container, Button } from "@mui/material";
import { styled } from "@mui/system";

const CustomAppBar = styled(AppBar)({
  backgroundColor: "#4FB65E",
  color: "black",
});

const useStyles = {
  container: {
    paddingTop: 4,
  },
  button: {
    minWidth: 120,
    borderRadius: 20, // Set border radius to make it rounded
    boxShadow: "none",
    backgroundColor: "#222222",
    "&:hover": {
      backgroundColor: "#000000", // Change the hover background color here
    },
  },
};

function App() {
  return (
    <div className="App">
      <CustomAppBar position="static">
        <Toolbar
          sx={{
            justifyContent: "space-between", // Align items to the right
          }}
        >
          <Typography variant="h6">Algo Trade Tech</Typography>
          <div>
            <Button
              variant="contained"
              sx={[useStyles.button, { marginRight: 2 }]}
            >
              Home
            </Button>
            <Button variant="contained" sx={useStyles.button}>
              Training
            </Button>
          </div>
        </Toolbar>
      </CustomAppBar>

      <Container sx={useStyles.container}>
        <Typography variant="h4" gutterBottom>
          Welcome to My Material-UI Homepage
        </Typography>
        <Typography variant="body1">
          This is a simple homepage designed using Material-UI's top navigation
          bar.
        </Typography>
      </Container>
    </div>
  );
}

export default App;
