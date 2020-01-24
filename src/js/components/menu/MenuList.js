import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import MenuItem from './MenuItem';

const MenuList = ({
  menuIsOpen,
  propsLocation,
  closeMenuThroughMenuItem,
  toMobile,
}) => {
  const { data: { headerSection: { menu: { name } } } } = useContext(
    AppContext
  );

  const createStyleForMenuBcg = (propsLocation) => {
    switch (propsLocation) {
      case '/':
        return { backgroundColor: 'rgba(255, 255, 255, 0.7)' };
      case '/style':
      case '/humor':
      case '/architect':
      case '/contact':
        return { backgroundColor: 'rgba(0, 0, 0, 0.7)' };
      default:
        break;
    }
  };

  const renderMenu = (name) => {
    return name.map((item) => {
      switch (item) {
        case 'главная':
          return (
            <MenuItem
              link="/"
              key={item}
              items={item}
              clickThroughMenuItem={closeMenuThroughMenuItem}
            />
          );
        case 'стили':
          return (
            <MenuItem
              link="/style"
              key={item}
              items={item}
              clickThroughMenuItem={closeMenuThroughMenuItem}
            />
          );
        case 'юмор':
          return (
            <MenuItem
              link="/humor"
              key={item}
              items={item}
              clickThroughMenuItem={closeMenuThroughMenuItem}
            />
          );
        case 'топ архитекторы':
          return (
            <MenuItem
              link="/architect"
              key={item}
              items={item}
              clickThroughMenuItem={closeMenuThroughMenuItem}
            />
          );
        case 'контакты':
          return (
            <MenuItem
              link="/contact"
              key={item}
              items={item}
              clickThroughMenuItem={closeMenuThroughMenuItem}
            />
          );
        default:
          break;
      }
    });
  };

  return (
    <ul
      className={`menu__list ${menuIsOpen && toMobile && 'list__active'}`}
      style={createStyleForMenuBcg(propsLocation)}
    >
      {renderMenu(name)}
    </ul>
  );
};

export default MenuList;
