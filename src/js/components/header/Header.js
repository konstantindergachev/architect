import React, { useState } from 'react';
import Logo from '../logo/Logo';
import MenuList from '../menu/MenuList';
import Sandwich from './sandwich/Sandwich';

const Header = ({ propsLocation }) => {
  const [ menuIsOpen, setMenuIsOpen ] = useState(false);
  const [ toMobile, setToMobile ] = useState(false);
  const [ logo ] = useState({
    mainLogo: 'дом',
    subLogo: 'за городом',
  });

  const closeMenuListFromSandwich = () => {
    setMenuIsOpen(!menuIsOpen);
    setToMobile(true);
  };
  const closeMenuListFromMenuItem = () => setMenuIsOpen(!menuIsOpen);

  return (
    <header className="header">
      <Logo logo={logo.mainLogo} subLogo={logo.subLogo} />
      <MenuList
        menuIsOpen={menuIsOpen}
        propsLocation={propsLocation}
        closeMenuThroughMenuItem={closeMenuListFromMenuItem}
        toMobile={toMobile}
      />
      <Sandwich
        closeMenuThroughSandwich={closeMenuListFromSandwich}
        menuIsOpen={menuIsOpen}
        toMobile={toMobile}
      />
    </header>
  );
};

export default Header;
