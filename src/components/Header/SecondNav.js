import React from 'react';
import Navs from './links.json'

class SecondNav extends React.Component {

  render() {
    const navs = Navs.secondNav;
    const above = Navs.above;
    return (
      <div class="nav">
        {navs.map(nav => (
          <div class="dropbtn">
            <a>{nav.name}</a>
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
}

export default SecondNav;
