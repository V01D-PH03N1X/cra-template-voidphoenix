import React, { ReactElement } from 'react';
// import styles from './NotFound.module.sass';

export default function NotFoundPage(): ReactElement {
  return (
    <div className={'container'}>
      <h1>Huch, was suchst du Hier?</h1>
      <h3>Ich konnte leider nicht finden was du suchst. </h3>
      <h3>
        Um zurück zur Startseite zu gelangen drücke <a href={'/'}>HIER</a>
      </h3>
    </div>
  );
}
