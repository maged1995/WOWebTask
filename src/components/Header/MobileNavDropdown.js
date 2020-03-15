import React from 'react';
import Navs from './links.json'

class MobileNavCollapse extends React.Component {

  render() {
    const navs = Navs.mobileNav;
    return (
      <div class="nav-dropdown mobile-dropdown">
        {navs.map(nav => (
          <div class={`mobile-link-container ${nav.large ? `large` : `small`}`}>
            <a class="nav-link"  href={nav.link}>
              <img src={nav.icon} alt={nav.name}/>
              <p>{nav.name}</p>
            </a>
          </div>
        ))}
      </div>
    );
  }
}

export default MobileNavCollapse;
