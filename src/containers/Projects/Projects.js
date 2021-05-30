import React, { useState } from "react";
import classes from "./Projects.module.css";
import ProjectInfo from "../../components/UI/Projects/ProjectInfo";
import Project1 from "../../components/UI/Projects/Project1";
import Project2 from "../../components/UI/Projects/Project2";
import Project3 from "../../components/UI/Projects/Project3";

const Projects = () => {
  const [proj, setProj] = useState(1);

  let toDisplay = null;

  if (proj === 1) {
    toDisplay = <Project1 />;
  } else if (proj === 2) {
    toDisplay = <Project2 />;
  }
  else if (proj === 3) {
    toDisplay = <Project3 />;
  }

  const incrementHandler = () => {
    let nextState = proj + 1;
    if (nextState > 3) {
      nextState = 1;
    }

    setProj(nextState);
  };
  const decrementHandler = () => {
    let nextState = proj - 1;
    if (nextState < 1) {
      nextState = 3;
    }

    setProj(nextState);
  };
  return (
    <div className={classes.Projects}>
      <ProjectInfo />
      <div className={classes.Info}>{toDisplay}</div>
      <div className={classes.Select}>
        <div>
          <button onClick={decrementHandler} className={classes.btn}>
            Previous
          </button>
        </div>
        <div>
          <button onClick={incrementHandler} className={classes.btn}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
