import React from 'react';
import Navs from './links.json'

class FirstNav extends React.Component {

  render() {
    const navs = Navs.firstNav;
    console.log(navs)
    return (
      <div class="first-nav">
        <div class="top-left">Troll</div>
        <div class="nav first">
          {navs.map(nav => (
            <div class="dropbtn">
              <a class="dropname">{nav.name}</a>
              <div class="nav-dropdown">
                {nav.links.map(link => (
                  <div class="link-container">
                    <a class="nav-link"  href={link.link}>{link.name}</a>
                    <br />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default FirstNav;
