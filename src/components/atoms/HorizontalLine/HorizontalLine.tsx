import React from 'react';
import './HorizontalLine.styles.css';

interface Props {
  color: string;
  height: number;
}

const HorizontalLine: React.FC<Props> = ({color, height}) => {
  const style = {
    backgroundColor: color,
    height: `${height}px`,
    width: '85%', // or any desired width value
    margin: '10px auto', // center align the line
  };

  return <div className='horizontal-line' style={style} />;
};

export default HorizontalLine;
