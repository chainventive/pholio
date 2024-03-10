import React from 'react';

interface PhotoProps {
  light: boolean;
  size: number;
  url: string;
}

export const Photo: React.FC<PhotoProps> = (props) => {

  const shadow = props.light ? 'rgb(112 112 112 / 44%) 0px 10px 15px -3px' : 'rgb(0 0 0) 0px 10px 15px -3px';
 
  return (
    <div>

      <img style={{ height: `${props.size}rem`, width: `${props.size}rem`, objectFit: 'cover', boxShadow: shadow }} src={props.url}></img>

    </div>
  );
};

export default Photo;
