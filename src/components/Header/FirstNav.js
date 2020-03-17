import React from 'react';
import Navs from './links.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const FirstNav = () => {
  const navs = Navs.firstNav;
  return (
    <div class="first-nav">
      <div class="top-left">
        <FontAwesomeIcon icon={faUserPlus} />
        <span class='lang'>العربية</span>
      </div>
      <div class="nav nav-wrapped">
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
    </div>
  );
};

export default FirstNav;
