import React from 'react';
import './Button.styles.css';
type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  style?: React.CSSProperties;
};

const ButtonComponent = ({children, onClick, style}: ButtonProps) => {
  return (
    <div className='button-wrapper'>
      <button className='button' onClick={onClick} style={style}>
        {children}
      </button>
    </div>
  );
};

export default ButtonComponent;
