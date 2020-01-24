import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuItem = ({ link, clickThroughMenuItem, items }) => {
  return (
    <li className="menu__item">
      <NavLink
        to={link}
        exact
        className="menu__link"
        onClick={clickThroughMenuItem}
      >
        {items}
      </NavLink>
    </li>
  );
};

export default MenuItem;
