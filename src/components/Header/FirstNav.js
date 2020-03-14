import React from 'react';
import Navs from './links.json'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

class FirstNav extends React.Component {

  render() {
    const navs = Navs.firstNav;
    console.log(navs)
    return (
      <div class="first-nav">
        <div class="top-left">
          <FontAwesomeIcon icon={faUserPlus} />
          <a>
            <span class='lang'>العربية</span>
          </a>
        </div>
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
