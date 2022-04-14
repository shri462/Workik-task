import classes from "./menu.module.css";

const Menu = ({ open }) => {
  return (
    <div
      className={classes.menu}
      open={open}
      style={{
        display: open ? "flex" : "none",
      }}
    >
      <a href="/">Home</a>
      <a href="/">About</a>
      <a href="/">Contact Us</a>
    </div>
  );
};

export default Menu;
