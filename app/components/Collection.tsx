import React from 'react';
import { Serie, PhotoItem } from './Serie';

interface CollectionProps {
  title: string;
  itemSize: number;
  series: PhotoSerie[];
}

export interface PhotoSerie {
  title: string;
  photos: PhotoItem[];
}

export const Collection: React.FC<CollectionProps> = (props) => {

  const darkColor  = '#0a0a0a';
  const lightColor = '#f5f2f2';

  return (

    <div style={{ padding: '2rem', width: '100%', background: 'black' }}>

      <div style={{ background: lightColor, color: darkColor, textAlign: 'center', padding: '6rem 0 5rem 0' }}>
        <h1 style={{  textTransform: 'uppercase', letterSpacing: '0.35rem' }}>{ props.title }</h1>
      </div>

      {
        props.series.map(serie => <Serie key={ crypto.randomUUID() } light={props.series.indexOf(serie) % 2 ? true : false} photos={serie.photos} title={serie.title} itemSize={props.itemSize}></Serie>)
      }

    </div>

  );
};

export default Collection;
