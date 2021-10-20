import { useState } from "react";
import "./Header.scss";
import { ReactComponent as Blob1 } from "../../statics/blob-1.svg";
import { ReactComponent as Blob2 } from "../../statics/blob-2.svg";
import { ReactComponent as Blob3 } from "../../statics/blob-3.svg";
import { ReactComponent as Blob4 } from "../../statics/blob-4.svg";
import { ReactComponent as Blob5 } from "../../statics/blob-5.svg";

const Header = () => {
  const [clicked, setClicked] = useState(false);
  const navHandler = () => {
    setClicked((prev) => !prev);
  };
  return (
    <div className="header__container">
      <div className="nav__logo">This is Logo</div>
      <div className="nav__items__container" onClick={navHandler}>
        <div className={clicked ? "nav__items spreaded" : "nav__items"}>
          <Blob1 className="blob" width="120" height="120" />
          <p className="item__text">menu1</p>
        </div>
        <div className={clicked ? "nav__items spreaded" : "nav__items"}>
          <Blob2 className="blob" width="120" height="120" />
          <p className="item__text">menu2</p>
        </div>
        <div className={clicked ? "nav__items spreaded" : "nav__items"}>
          <Blob3 className="blob" width="120" height="120" />
          <p className="item__text">menu3</p>
        </div>
        <div className={clicked ? "nav__items spreaded" : "nav__items"}>
          <Blob4 className="blob" width="120" height="120" />
          <p className="item__text">Login</p>
        </div>
        <div className={clicked ? "nav__items spreaded" : "nav__items"}>
          <Blob5 className="blob" width="120" height="120" />
          <p className="item__text">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
