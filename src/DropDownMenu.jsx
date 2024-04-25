import * as React from 'react';
import { FaBars } from "react-icons/fa6";
import { isMobile } from "react-device-detect";

function MoveToSlides() {
  location.href = 'https://memotics.github.io/Slides/';
}

function MoveToAboutUs() {
  location.href = 'https://memotics.github.io/AboutUs/';
}

function MoveToTour() {
  location.href = 'https://memotics.github.io/Tour/';
}

// function MoveToTour() {
//   location.href = 'https://memoversity.io/Tour/';
// }



const Dropdown = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div class="dropdown">
      <button className='dropbtn' onClick={handleOpen}>Menu  <i class="fa fa-bars"><FaBars class="icon" size={'0.8rem'}></FaBars></i></button>
      {open ? (
        
        <ul className="menu">
          <li className="menu-item">
            <button onClick={MoveToAboutUs}>About</button>
          </li>
          <li className="menu-item">
            <button onClick={MoveToSlides}>Pitch</button>
          </li>
          <li className="menu-item">
            <button  onClick={MoveToTour}>Tour</button>
          </li>
        </ul>
      ) : null}
      
    </div>
  );
};

export default Dropdown;

  


// function updatemenu() {
//   if (document.getElementById('responsive-menu').checked == true) {
//     document.getElementById('menu').style.borderBottomRightRadius = '0';
//     document.getElementById('menu').style.borderBottomLeftRadius = '0';
//   }else{
//     document.getElementById('menu').style.borderRadius = '39px';
//   }
// }

// <nav id='menu'>
//   <input type='checkbox' id='responsive-menu' onclick='updatemenu()'><label></label>
//   <ul>
//     <li><a class='dropdown-arrow' href='http://'>Home</a>
//       <ul class='sub-menus'>
//         <li><a href='http://'>About</a></li>
//         <li><a href='http://'>Contact Us</a></li>
//       </ul>
//     </li>
//   </ul>
// </nav>

// #menu {
// 	background: #FF4D4D;
// 	height: 46px;
// 	border-radius: 39px;
// }
// #menu ul, #menu li {
// 	margin: 0 auto;
// 	padding: 0;
// 	list-style: none
// }
// #menu ul {
// 	width: 100%;
// 	text-align: center;
// }
// #menu li {
// 	display: inline-block;
// 	position: relative;
// }
// #menu a {
// 	display: block;
// 	line-height: 46px;
// 	padding: 0 14px;
// 	text-decoration: none;
// 	color: #FFFFFF;
// 	font-size: 22px;
// 	text-transform: capitalize;
// }
// #menu a.dropdown-arrow:after {
// 	content: "\002B";
// 	margin-left: 5px;
// }
// #menu li a:hover {
// 	color: #FF4D4D;
// 	background: #F2F2F2;
// }
// #menu input {
// 	display: none;
// 	margin: 0;
// 	padding: 0;
// 	height: 46px;
// 	width: 100%;
// 	opacity: 0;
// 	cursor: pointer
// }
// #menu label {
// 	display: none;
// 	line-height: 46px;
// 	text-align: center;
// 	position: absolute;
// 	left: 35px
// }
// #menu label:before {
// 	font-size: 1.6em;
// 	color: #FFFFFF;
// 	content: "\2261"; 
// 	margin-left: 20px;
// }
// #menu ul.sub-menus{
// 	height: auto;
// 	overflow: hidden;
// 	width: 170px;
// 	background: #FF4D4D;
// 	position: absolute;
// 	z-index: 99;
// 	display: none;
// }
// #menu ul.sub-menus li {
// 	display: block;
// 	text-align: left;
// 	width: 100%;
// }
// #menu ul.sub-menus a {
// 	color: #FFFFFF;
// 	font-size: 16px;
// 	text-transform: capitalize;
// }
// #menu li:hover ul.sub-menus {
// 	display: block
// }
// #menu ul.sub-menus a:hover{
// 	background: #F2F2F2;
// 	color: #FF4D4D;
// }
// @media screen and (max-width: 800px){
// 	#menu {position:relative}
// 	#menu ul {background:#FF4D4D;position:absolute;top:100%;right:0;left:0;z-index:3;height:auto;display:none;text-align:left;}
// 	#menu ul.sub-menus {width:100%;position:static;}
// 	#menu ul.sub-menus a {padding-left:30px;}
// 	#menu li {display:block;float:none;width:auto;}
// 	#menu input, #menu label {position:absolute;top:0;left:0;display:block}
// 	#menu input {z-index:4}
// 	#menu input:checked + label {color:#FFFFFF}
// 	#menu input:checked + label:before {content:"\00d7"}
// 	#menu input:checked ~ ul {display:block}
// }