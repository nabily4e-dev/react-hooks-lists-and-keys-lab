import React from "react";
// import { v4 as uuidv4 } from 'uuid';
import shortid from "shortid";

function NavBar() {
  const links = [
    { id: shortid.generate(), name: "home" },
    { id: shortid.generate(), name: "about" },
    { id: shortid.generate(), name: "projects" },
    { id: shortid.generate(), name: "contact me" },
  ];

  return (
    <nav>
      {/* display an <a> tag for each link here */}
      {links.map((link, index) => (
        <a href={`#${link.name.replace(/\s+/g, "-")}`} key={link.id}>
          {link.name.charAt(0).toUpperCase() + link.name.slice(1)}
        </a>
      ))}
    </nav>
  );
}

export default NavBar;
