// /* eslint-disable jsx-a11y/img-redundant-alt */
// import React from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../images/logo.png';

// const SideNavigation = () => {
//   return (
//     <nav style={styles.nav} className="d-flex flex-row justify-content-between align-items-center">
//         <Link to='/'><img style={styles.img} src={logo} alt="EleutherosVibe logo"/></Link>
//         <div>
//             <h3>Browse Music</h3>
//             <ul style={styles.ul} className="d-flex flex-row justify-content-end align-items-center">
//             <li style={styles.li}> 
//                 <Link to="/" style={styles.link}>Home</Link>
//             </li>
//             <li style={styles.li}>
//                 <Link to="/albums" style={styles.link}>Albums</Link>
//             </li>
//             <li style={styles.li}>
//                 <Link to="/genre" style={styles.link}>Genre</Link>
//             </li>
//             </ul>
//         </div>
//         <div>
//             <h3>Logout</h3>
//         </div>
//     </nav>
//   );
// };

// export default SideNavigation;

// const styles = {
//     nav: {
//         width: '20%',
//         height: '100%',
//         padding: '2%',
//     },
//     img: {
//         height: '120px'
//     },
//     link: {
//         textDecoration: 'none',
//         color: 'inherit',
//         fontWeight: 'bold',
//     },
//     ul: {
//         listStyleType: 'none',
//         width: '50%',
//     },
//     li: {
//         color: '#',
//         margin: '0 6%',
//         padding: '0 6%',
//     }
// }

/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const SideNavigation = () => {
  return (
    <nav style={styles.nav} className="d-flex flex-column justify-content-between align-items-start">
      <Link to='/dashboard'><img style={styles.img} src={logo} alt="EleutherosVibe logo"/></Link>
      <div style={styles.menu}>
        <h3>Browse Music</h3>
        <ul style={styles.ul} className="d-flex flex-column">
          <li style={styles.li}> 
            <Link to="/dashboard" style={styles.link}>Home</Link>
          </li>
          <li style={styles.li}>
            <Link to="/albums" style={styles.link}>Albums</Link>
          </li>
          <li style={styles.li}>
            <Link to="/genre" style={styles.link}>Genre</Link>
          </li>
        </ul>
      </div>
      <div style={styles.logout}>
        <h3>Logout</h3>
      </div>
    </nav>
  );
};

export default SideNavigation;

const styles = {
  nav: {
    width: '20%',
    height: '100vh',
    padding: '2%',
    backgroundColor: '#2F2F3A',
    color: '#E5E5E5',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  img: {
    height: '120px',
    marginBottom: '20px',
  },
  menu: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
    color: '#E5E5E5',
    fontWeight: 'bold',
    padding: '10px 0',
    display: 'block',
  },
  ul: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  li: {
    marginBottom: '10px',
  },
  logout: {
    marginTop: 'auto',
  }
};
