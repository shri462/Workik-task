import classes from "./app.module.css";
import SearchIcon from "@mui/icons-material/Search";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Feature from "./Feature";
import Menu from "./components/Menu";
import MenuIcon from "./components/MenuIcon";
import { useState } from "react";

// const mobile = style

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.app}>
      <MenuIcon open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
      <div className={classes.section1}>
        <div className={classes.section1content}>
          <h1>
            Lorem
            <br /> ipsum dolor <br /> sit amet.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis dicta pariatur voluptates incidunt quisquam quod.
          </p>
          <div className={classes.menu}>
            <div className={classes.circle}>
              <SearchIcon fontSize="small" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className={classes.menu}>
            <div className={classes.circle}>
              <LockOpenIcon fontSize="small" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>
      <div className={classes.section2}>
        <Feature />
        <Feature />

        <Feature />
      </div>
    </div>
  );
}

export default App;
