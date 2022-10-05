import React from 'react';
import { Link } from 'react-router-dom';
import './BackToMenu.css'

const BackToMenu = ({path,text}) => {
  return (
    <Link to={path} className='backToMenu'>
      {text}
    </Link>
  );
}

export default BackToMenu;
