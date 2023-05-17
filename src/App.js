import classes from "./App.module.css";
import largeDark from "./assets/bg-desktop-dark.jpg";
import smallDark from "./assets/bg-mobile-dark.jpg";
import largeLight from "./assets/bg-desktop-light.jpg";
import smallLight from "./assets/bg-mobile-light.jpg";
import Header from "./components/Header";
import Input from "./components/Input";
import TodoCell from "./components/TodoCell";
import ControlPanel from "./components/ControlPanel";
import { useEffect, useState } from "react";

const initialArr = [
  {
    id: Math.random(),
    isCompleted: false,
    text: "Complete online JavaScript course",
  },
  { id: Math.random(), isCompleted: false, text: "Jog around the park 3x" },
  {
    id: Math.random(),
    isCompleted: false,
    text: "10 minutes meditation",
  },
  { id: Math.random(), isCompleted: false, text: "Read for 1 hour" },
  { id: Math.random(), isCompleted: false, text: "Pick up groceries" },
  {
    id: Math.random(),
    isCompleted: false,
    text: "Complete Tode App on Frontend Mentor",
  },
];

function App() {
  const [theme, setTheme] = useState("dark");
  const [currentList, setCurrentList] = useState("All");
  const [listArr, setListArr] = useState(initialArr);
  const [itemsLeft, setItemsLeft] = useState(listArr.length);

  let w = window.innerWidth;
  let bgArr;
  if (w <= 768) {
    bgArr = [smallDark, smallLight];
  } else {
    bgArr = [largeDark, largeLight];
  }

  function onSwitchTheme() {
    if (theme === "dark") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    }
  }
  function onSwithList(list) {
    setCurrentList(list);
  }
  function deleteItem(id) {
    setListArr((prev) => prev.filter((item) => item.id !== id));
  }

  useEffect(() => {
    const left = listArr.filter((item) => item.isCompleted !== true).length;
    setItemsLeft(left);
  }, [listArr]);

  function onSetTaskDone(id) {
    let foundItem = listArr.filter((item) => id === item.id)[0];
    let currentState = foundItem.isCompleted;
    let newArr = listArr.map((item) => {
      let returnValue = { ...item };
      if (item.id == id) {
        returnValue.isCompleted = !currentState;
      }
      return returnValue;
    });
    setListArr((prev) => newArr);
  }
  function deleteAllCompletedItems() {
    setListArr((oldArr) => oldArr.filter((item) => item.isCompleted !== true));
  }
  function onAddTodo(bodyText) {
    const newObj = {
      id: Math.random(),
      isCompleted: false,
      text: bodyText,
    };
    setListArr((prev) => [newObj, ...prev]);
  }

  const listOfAllItems = listArr.map((item, index) => (
    <>
      <TodoCell
        isFirst={index === 0}
        key={index}
        isDone={item.isCompleted}
        id={item.id}
        setTaskDone={onSetTaskDone}
        text={item.text}
        theme={theme}
        onDeleteItem={deleteItem}
      />
    </>
  ));
  const listOfActiveItems = listArr.map((item, index) => {
    if (item.isCompleted !== true) {
      return (
        <>
          <TodoCell
            isFirst={index === 0}
            key={index}
            isDone={item.isCompleted}
            id={item.id}
            setTaskDone={onSetTaskDone}
            text={item.text}
            theme={theme}
            onDeleteItem={deleteItem}
          />
        </>
      );
    }
  });
  const listOfCompletedItems = listArr.map((item, index) => {
    if (item.isCompleted === true) {
      return (
        <>
          <TodoCell
            isFirst={index === 0}
            key={index}
            isDone={item.isCompleted}
            id={item.id}
            setTaskDone={onSetTaskDone}
            text={item.text}
            theme={theme}
            onDeleteItem={deleteItem}
          />
        </>
      );
    }
  });

  const mainDark = `${classes["main-dark"]} ${classes.main} `;
  const mainLight = ` ${classes["main-light"]} ${classes.main} `;

  return (
    <div className={theme === "dark" ? mainDark : mainLight}>
      <img
        className={classes.img}
        src={theme === "dark" ? bgArr[0] : bgArr[1]}
        alt="image"
      />
      <div className={classes.content}>
        <Header theme={theme} onSwitchTheme={onSwitchTheme} />
        <Input theme={theme} newTodo={onAddTodo} />
        {currentList === "All" && <ul>{listOfAllItems}</ul>}
        {currentList === "Active" && <ul>{listOfActiveItems}</ul>}
        {currentList === "Completed" && <ul>{listOfCompletedItems}</ul>}
        <ControlPanel
          itemsLeft={itemsLeft}
          theme={theme}
          currentList={currentList}
          onSwitchList={onSwithList}
          clearAllCompleted={deleteAllCompletedItems}
        />
      </div>
    </div>
  );
}

export default App;
