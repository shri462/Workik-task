import React from "react";
import PreviewIcon from "@mui/icons-material/Preview";
import classes from "./feature.module.css";
function Feature() {
  return (
    <div className={classes.featurecontainer}>
      <div className={classes.feature}>
        <div className={classes.circle}>
          <PreviewIcon />
        </div>
        <div>
          <h2>Feature</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
            deserunt voluptates reiciendis voluptatum veniam reprehenderit
            fugiat beatae numquam molestias laudantium!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Feature;
