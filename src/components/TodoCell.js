import classes from "./TodoCell.module.css";
import classNames from "classnames";
import deleteIcon from "../assets/icon-cross.svg";
import Checkbox from "./Checkbox";
import { useState } from "react";

let w = window.innerWidth;
const TodoCell = (props) => {
  //props: text;
  const [isHover, setIsHover] = useState(false);

  function onTaskDone() {
    props.setTaskDone(props.id);
  }
  function onLiMouseEnter() {
    setIsHover(true);
  }
  function onLiMouseOut() {
    setIsHover(false);
  }
  function deleteItem() {
    props.onDeleteItem(props.id);
  }

  return (
    <li
      onMouseEnter={onLiMouseEnter}
      onMouseLeave={onLiMouseOut}
      className={classNames(
        classes.main,
        props.isFirst && classes.first,
        props.theme === "dark" ? classes["dark-li"] : classes["light-li"]
      )}>
      <Checkbox
        type="todo"
        theme={props.theme}
        taskCompleted={onTaskDone}
        isTodoDone={props.isDone}
      />
      <button className={classes["li-btn"]}>
        <p
          onClick={onTaskDone}
          className={classNames(
            props.theme === "dark"
              ? classes["dark-para"]
              : classes["light-para"],
            props.isDone && "crossed-out",
            props.theme === "dark" && props.isDone && classes["task-done-dark"],
            props.theme === "light" &&
              props.isDone &&
              classes["task-done-light"]
          )}>
          {props.text}
        </p>
      </button>
      <button
        onClick={deleteItem}
        className={classes.delete}
        style={!isHover && w > 768 ? { opacity: "0" } : {}}>
        <img src={deleteIcon} alt="delete" />
      </button>
    </li>
  );
};

export default TodoCell;
