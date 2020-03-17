import React from 'react';
import Navs from './links.json'

const SecondNav = () => {
  const navs = Navs.secondNav;
  return (
    <div class="nav">
      {navs.map(nav => (
        <div class="dropbtn">
          <span class="dropname">{nav.name}</span>
          <div class="nav-dropdown">
            {nav.links.map(link => (
                <div class="link-container">
                  <a class="nav-link"  href={link.link}>{link.name}</a>
                </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SecondNav;
