import React from 'react';
import Navs from './links.json'

const MobileNavCollapse = ({ mobileDropdown }) => {
  const navs = Navs.mobileNav;
  return (
    <div class={`nav-dropdown mobile-dropdown${mobileDropdown ? ` mobile-dropdown-visible`: ``}`}>
      {navs.map(nav => (
        <div class={`mobile-link-container${mobileDropdown ? ` mobile-link-visible`: ``} ${nav.large ? `large` : `small`}`}>
          <a class="nav-link"  href={nav.link}>
            <img src={nav.icon} alt={nav.name}/>
            <p>{nav.name}</p>
          </a>
        </div>
      ))}
    </div>
  );
}

export default MobileNavCollapse;
