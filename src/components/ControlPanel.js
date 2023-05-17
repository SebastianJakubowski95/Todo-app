import classes from "./ControlPanel.module.css";
import classNames from "classnames";

const ControlPanel = (props) => {
  // props: theme;

  let w = window.innerWidth;

  function onListSwithHandler(list) {
    props.onSwitchList(list);
  }
  function onClearAllCompleted() {
    props.clearAllCompleted();
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {w <= 768 && (
        <div
          className={`${classes["mobile-first_section"]} ${
            classes["mobile-1"]
          }  ${
            props.theme === "dark"
              ? classes["dark-theme-bg"]
              : classes["light-theme-bg"]
          } `}>
          <div className={classes["items-left"]}>
            <p
              className={classNames(
                classes.para,
                props.theme === "dark"
                  ? classes["list-btn-dark-para"]
                  : classes["list-btn-light-para"]
              )}>
              {props.itemsLeft} items left
            </p>
          </div>
          <div className={classes["clear-completed"]}>
            <button
              onClick={onClearAllCompleted}
              className={classNames(
                classes.para,
                classes["clear-completed"],
                props.theme === "dark"
                  ? classes["list-btn-dark"]
                  : classes["list-btn-light"]
              )}>
              Clear Completed
            </button>
          </div>
        </div>
      )}
      <div
        className={`${classes.main}   ${classes["mobile-2"]} ${
          props.theme === "dark"
            ? classes["dark-theme-bg"]
            : classes["light-theme-bg"]
        }`}>
        {w >= 768 && (
          <div className={classes["items-left"]}>
            <p
              className={classNames(
                classes.para,
                props.theme === "dark"
                  ? classes["list-btn-dark-para"]
                  : classes["list-btn-light-para"]
              )}>
              {props.itemsLeft} items left
            </p>
          </div>
        )}
        <div className={classes["control-panel-buttons"]}>
          <button
            className={classNames(
              classes["list-btn"],
              props.currentList === "All" && classes.active,
              props.theme === "dark"
                ? classes["list-btn-dark"]
                : classes["list-btn-light"]
            )}
            onClick={() => onListSwithHandler("All")}>
            All
          </button>
          <button
            className={classNames(
              classes["list-btn"],
              props.currentList === "Active" && classes.active,
              props.theme === "dark"
                ? classes["list-btn-dark"]
                : classes["list-btn-light"]
            )}
            onClick={() => onListSwithHandler("Active")}>
            Active
          </button>
          <button
            className={classNames(
              classes["list-btn"],
              props.currentList === "Completed" && classes.active,
              props.theme === "dark"
                ? classes["list-btn-dark"]
                : classes["list-btn-light"]
            )}
            onClick={() => onListSwithHandler("Completed")}>
            Completed
          </button>
        </div>
        {w >= 768 && (
          <div className={classes["clear-completed"]}>
            <button
              onClick={onClearAllCompleted}
              className={classNames(
                classes.para,
                classes["clear-completed"],
                props.theme === "dark"
                  ? classes["list-btn-dark"]
                  : classes["list-btn-light"]
              )}>
              Clear Completed
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ControlPanel;
