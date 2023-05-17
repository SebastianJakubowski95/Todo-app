import classes from "./Input.module.css";
import classNames from "classnames";
import Checkbox from "./Checkbox";
import { useState, useRef } from "react";

const Input = (props) => {
  const [isTyping, setIsTyping] = useState(false);
  const [value, setValue] = useState("");
  const inputRef = useRef();

  function onFocusHandler() {
    setIsTyping(true);
    inputRef.current.classList.remove(`${classes["no-border"]}`);
  }
  function onBlurHandler() {
    setIsTyping(false);
    inputRef.current.classList.add(`${classes["no-border"]}`);
  }
  function onChangeHandler(e) {
    setValue(e.target.value);
  }
  function submitAdding() {
    if (value.trim().length > 0) {
      props.newTodo(value);
    }
    setValue("");
  }

  return (
    <>
      <div
        ref={inputRef}
        className={classNames(
          classes.main,
          classes["no-border"],
          props.theme === "dark" ? classes.dark : classes.light
        )}>
        <Checkbox type="add" theme={props.theme} onClick={submitAdding} />
        <input
          value={value}
          onChange={onChangeHandler}
          className={classNames(
            classes.input,
            props.theme === "dark"
              ? classes["input-dark"]
              : classes["input-light"]
          )}
          type="text"
          placeholder="Create a new todo..."
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
        />
      </div>
    </>
  );
};
export default Input;
