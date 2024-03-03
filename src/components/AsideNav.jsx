import React, { useState } from "react";
import { Link } from "react-router-dom";
import homeIcon from "../assets/home-icon.svg";
import accountIcon from "../assets/account-icon.svg";
import listIcon from "../assets/list-icon.png";
import logo from '../assets/logo1.png'
import ChangeBackground from "./ChangeBackground";

const data = [
  {
    id: 1,
    name: "Home",
    link: "/",
    img: homeIcon
  },
  {
    id: 2,
    name: "Account",
    link: "/account",
    img: accountIcon
  },
  {
    id: 3,
    name: "Lists",
    link: "/list",
    img: listIcon
  }
];

function AsideNav() {
  const [navList, setNavList] = useState(data);
  return (
    <>
      <aside>
        <img src={logo} alt="Website logo" className="logo" />
        <nav>
          <ul>
            {navList.map((object) => (
              <NavLink key={object.id} object={object}></NavLink>
            ))}
          </ul>
          <ChangeBackground></ChangeBackground>
        </nav>
      </aside>
    </>
  );
}

export default AsideNav;

function NavLink({ object }) {
  return (
    <>
      <li>
        <Link to={object.link} className="link">
          <img src={object.img} alt={object.name} />
          {object.name}
        </Link>
      </li>
    </>
  );
}
