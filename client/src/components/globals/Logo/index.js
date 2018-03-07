import React from 'react';

import codeslingLogo from './codesling-logo.svg';

const Logo = ({
  className
}) => {
  return (
    <img
      alt="Codesling.io Logo"
      className={`logo ${className ? className : ''}`}
      src={'https://upload.wikimedia.org/wikipedia/commons/b/bb/Gorgosaurus_BW_transparent.png'}
    />
  );
};

export default Logo;
