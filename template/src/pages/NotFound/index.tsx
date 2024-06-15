import React, { ReactElement } from 'react';
// import styles from './NotFound.module.sass';

export default function NotFoundPage(): ReactElement {
  return (
    <div className={'container'}>
      <h1>Oops, what are you looking for here?</h1>
      <h3>Unfortunately, I couldn't find what you were looking for. </h3>
      <h3>
        To return to the homepage press <a href={'/'}>HERE</a>
      </h3>
    </div>
  );
}
