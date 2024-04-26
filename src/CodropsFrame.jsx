import { FaBars } from "react-icons/fa6";
import Dropdown from "./DropDownMenu";

export default function () {
  return (
    <div className="frame container">
      <div className="frame__title">
      <img src="images/logo.webp" alt="Logo" className="frame__title-logo" />
  {/* <h1 className="frame__title-main">
    MDS <a href="https://www.memotics.io/">by Memotics</a>
  </h1> */}
  
      </div>
      <a className="topnav">
      <Dropdown />
      </a>
      {/* <a
        aria-label="Back to the article"
        className="frame__title-back"
        href="https://www.memotics.io/about"
      >
        <span className="oh__inner">MDS by Memotics</span>
        <svg width="18px" height="18px" viewBox="0 0 24 24">
          <path
            vectorEffect="non-scaling-stroke"
            d="M18.25 15.5a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75h-9a.75.75 0 000 1.5h7.19L6.22 16.72a.75.75 0 101.06 1.06L17.5 7.56v7.19c0 .414.336.75.75.75z"
          ></path>
        </svg>
      </a> */}
   
    </div>
  );
}
