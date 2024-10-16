import React from 'react';

const Menu = () => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li style={styles.li}><a href="#home" style={styles.a}>Home</a></li>
        <li style={styles.li}><a href="#about" style={styles.a}>About</a></li>
        <li style={styles.li}><a href="#contact" style={styles.a}>Contact</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: 'purple',
    padding: '10px',
  },
  ul: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'space-around',
  },
  li: {
    display: 'inline',
  },
  a: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
  },
};

export default Menu;
