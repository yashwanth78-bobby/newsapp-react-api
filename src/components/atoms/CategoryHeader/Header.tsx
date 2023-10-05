import React from 'react';
import './Header.styles.css';
type CategoryHeaderProps = {
  title: string;
  onClick?: any;
  style?: React.CSSProperties;
};

const CategoryHeader = ({title, onClick, style}: CategoryHeaderProps) => {
  return (
    <div className='category-header-wrapper'>
      <a onClick={onClick}>
        <h3 style={style} className='category-header-title'>
          {title}
          <span className='category-caret-right'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M8.25 4.5l7.5 7.5-7.5 7.5'
              />
            </svg>
          </span>
        </h3>
      </a>
    </div>
  );
};

export default CategoryHeader;
