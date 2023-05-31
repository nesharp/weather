import React from 'react';
import styles from './Map.module.css';

export const Map = () => {
  return (
    <div className={styles.map}>
      <iframe
        src="https://www.rainviewer.com/map.html?loc=45.7062,33.6618,7&oFa=1&oC=0&oU=0&oCS=0&oF=0&oAP=0&c=7&o=90&lm=1&layer=sat&sm=1&sn=1&hu=0"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  );
};
