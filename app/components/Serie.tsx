import React from 'react';
import Photo from './Photo';

interface SerieProps {
  title: string;
  itemSize: number;
  photos: PhotoItem[];
  light: boolean;
}

export interface PhotoItem {
  url: string;
}

export const Serie: React.FC<SerieProps> = (props) => {

  const darkColor  = '#0a0a0a';
  const lightColor = '#f5f2f2';

  const textColor = props.light ? darkColor : lightColor;
  const backgroundColor = props.light ? lightColor : darkColor;

  return (

    <div style={{ background: backgroundColor, width: '100%', textAlign: 'center', paddingBottom: '5rem' }}>

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', padding: '5rem 0 0 0' }}>

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={textColor} viewBox="0 0 16 16" style={{ marginTop: '0.1rem' }}>
          <path d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"/>
        </svg>

        <h3 style={{ color: textColor, fontWeight: 'lighter', textTransform: 'uppercase', letterSpacing: '0.15rem', margin: '0 0.5rem 0 0.75rem' }}>{props.title}</h3>

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={textColor} viewBox="0 0 16 16" style={{ marginTop: '0.1rem' }}>
          <path d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"/>
        </svg>

      </div>
    
      <div style={{ padding: '5rem', display: 'flex', gap: '5rem', flexFlow: 'row wrap', justifyContent: 'center' }}>
        {
          props.photos.map(photo => <Photo key={ crypto.randomUUID() } size={props.itemSize} url={photo.url} light={props.light}></Photo>)
        }
      </div>

    </div>

  );
};

export default Serie;
