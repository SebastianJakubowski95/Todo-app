import classes from "./Checkbox.module.css";
import plusIconForDark from "../assets/plusIconDarkTheme.svg";
import plusIconForLight from "../assets/plusIconLightTheme.svg";
import doneIcon from "../assets/icon-check.svg";

const Checkbox = (props) => {
  // type: add/todo; theme: theme

  function onTodoDone() {
    props.taskCompleted();
  }

  switch (props.type) {
    case "add":
      const darkTheme = `${classes.main} ${classes.dark}`;
      const lightTheme = `${classes.main} ${classes.light}`;
      return (
        <button
          onClick={props.onClick}
          className={props.theme === "dark" ? darkTheme : lightTheme}>
          <img
            style={{ scale: "0.5" }}
            src={props.theme === "dark" ? plusIconForDark : plusIconForLight}
            alt="add icon"
          />
        </button>
      );
    case "todo":
      const darkThemeTodo = `${classes.main} ${classes.dark} ${classes.todo}`;
      const lightThemeTodo = `${classes.main} ${classes.light} ${classes.todo}`;
      const todoDoneClasses = `${classes.main} ${classes.done}`;
      return (
        <>
          {props.isTodoDone ? (
            <button onClick={onTodoDone} className={todoDoneClasses}>
              <img src={doneIcon} alt="todo done" />
            </button>
          ) : (
            <button
              onClick={onTodoDone}
              className={
                props.theme === "dark" ? darkThemeTodo : lightThemeTodo
              }>
              {!props.isTodoDone && (
                <div
                  style={{
                    background: props.theme === "dark" ? "#25273C" : "#ffffff",
                  }}
                />
              )}
            </button>
          )}
        </>
      );
  }
};
export default Checkbox;
