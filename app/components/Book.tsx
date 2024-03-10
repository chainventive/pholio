import React from 'react';
import { Collection, PhotoSerie } from './Collection';

interface BookProps {
  itemSize: number;
  collections: PhotoCollection[];
}

export interface PhotoCollection {
  title: string;
  series: PhotoSerie[];
}

export const Book: React.FC<BookProps> = (props) => {

  const darkColor  = '#0a0a0a';
  const lightColor = '#f5f2f2';

  return (

    <div style={{ width: '100%', height: '100%', background: darkColor }}>

      <div style={{ padding: '7rem 0 2rem 0', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.5rem', fontSize: '2rem', fontWeight: 'lighter', width: '100%' }}>
        Collections
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', gap: '6.5rem', justifyContent: 'center', padding: '5rem 0 0 0', width: '100%' }}>
        {
          props.collections.map(collection => <div key={ crypto.randomUUID() } style={{ position: 'relative', background: lightColor, borderRadius: '0.5rem', cursor: 'pointer' }}>

            <img style={{ height: `${ props.itemSize * 0.75 }rem`, width: `${props.itemSize * 0.75}rem`, objectFit: 'cover', borderTopLeftRadius: '0.5rem', borderTopRightRadius: '0.5rem' }} src={collection.series[0].photos[0].url}></img>

            <div style={{ textAlign: 'center' }}>

              <div style={{ padding: '0.75rem 0 1rem 0', color: darkColor, textTransform: 'uppercase' }}>{collection.title}</div>
            
            </div>

          </div>)
        }
      </div>

      <Collection title='Forty four colours' itemSize={25} series={props.collections[0].series}></Collection>

    </div>

  );
};

export default Book;
