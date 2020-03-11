import React from 'react';

import './index.css';
import HomeIcon from './HomeIcon';
import FirstNav from './FirstNav';
import SecondNav from './SecondNav';

const Header = () => {
  return(
    <div>
      <FirstNav />
      <HomeIcon />
      <SecondNav />
    </div>
  );
};

export default Header;
