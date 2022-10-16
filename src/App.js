import styles from './App.module.css';
import React, { useEffect, useState } from 'react';
import Header from './Header';
import ListContainer from './components/ListContainer';

function App() {
  return (
    <>
      <div className={styles.nav}>
        Nav
      </div>
      <Header />
      <ListContainer />
      <footer className={styles.footer}>
        Footer
      </footer>
    </>
  );
}


export default App;
