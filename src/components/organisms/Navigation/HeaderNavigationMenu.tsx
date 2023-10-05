import React from 'react';

import {SearchComponent} from '../../molecules/Search/Search';
import './HeaderNavigationMenu.styles.css';

interface HeaderProps {
  title: string;
}

const HeaderNavigationMenu: React.FC<HeaderProps> = ({title}) => {
  return (
    <>
      <div className='header-navigation-menu-container'>
        <header className='header-wrapper'>
          <h1 className='title'>{title}</h1>
        </header>
        {/* Search button */}
        <div className='search-button-wrapper'>
          <SearchComponent />
        </div>
        <nav className='navigation'>
          <a href='/' className='link'>
            Home
          </a>
        </nav>
      </div>
    </>
  );
};

export default HeaderNavigationMenu;
