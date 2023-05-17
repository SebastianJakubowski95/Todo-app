import classes from "./Header.module.css";
import sunIcon from "../assets/icon-sun.svg";
import moonIcon from "../assets/icon-moon.svg";

const Header = (props) => {
  return (
    <div className={classes.main}>
      <h1>TODO</h1>
      <button onClick={() => props.onSwitchTheme()}>
        <img
          src={props.theme === "dark" ? moonIcon : sunIcon}
          alt="theme switcher"
        />
      </button>
    </div>
  );
};
export default Header;
