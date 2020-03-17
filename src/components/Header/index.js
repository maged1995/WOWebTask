import React, {useState} from 'react';

import FirstNav from './FirstNav';
import SecondNav from './SecondNav';
import MobileNavDropdown from './MobileNavDropdown'
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const [mobileDropdown, setMobileDropdown] = useState(false);
  const handleclick = () => {
    setMobileDropdown(!mobileDropdown);
  };
  return(
      <div class="navigation-bar">
        <FirstNav />
        <a class="home-link" href="home" ><img src="https://weds360.com/assets/logo-a44ab28137d9c6c366386172e63d31ba35dfd616b594a0b39e1f5d45a3130973.png" alt="home" /></a>
        <SecondNav />
        <span class="bars" onClick={handleclick}><FontAwesomeIcon icon={faBars} /> </span>
        <MobileNavDropdown mobileDropdown={mobileDropdown} />
      </div>
  );
};

export default Header;
