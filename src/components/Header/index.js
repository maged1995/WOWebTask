import React from 'react';

import FirstNav from './FirstNav';
import SecondNav from './SecondNav';
import './index.css';

const Header = () => {
  return(
      <div class="navigation-bar">
        <FirstNav />
        <a class="home-link"><img src="https://weds360.com/assets/logo-a44ab28137d9c6c366386172e63d31ba35dfd616b594a0b39e1f5d45a3130973.png" /></a>
        <SecondNav />
        <button class="nav-collapse"> </button>
      </div>
  );
};

export default Header;
