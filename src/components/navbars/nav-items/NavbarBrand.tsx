import classNames from 'classnames';
import { useAppContext } from 'providers/AppProvider';
import { Navbar } from 'react-bootstrap';
import logo from 'assets/img/icons/logo.png';
import logoWorkwolf from 'assets/img/icons/logo-workwolf-white.png';
import logoWorkwolfGrey from 'assets/img/icons/logo-workwolf-grey.png';

import { useBreakpoints } from 'providers/BreakpointsProvider';
import NavbarToggleButton from './NavbarToggleButton';
import { Link } from 'react-router-dom';

const NavbarBrand = () => {
  const {
    config: { navbarTopShape, navbarPosition, isDark }
  } = useAppContext();
  const { breakpoints } = useBreakpoints();

  return (
    <>
      <div className="navbar-logo">
        {breakpoints.down('lg') && <NavbarToggleButton />}
        <Navbar.Brand
          as={Link}
          to="/"
          className={classNames({
            'me-1 me-sm-3':
              navbarTopShape === 'slim' || navbarPosition === 'horizontal'
          })}
        >
          {navbarTopShape === 'slim' ? (
            <>
              phoenix{' '}
              <span className="text-body-highlight d-none d-sm-inline">
                slim
              </span>
            </>
          ) : (
            <div className="d-flex align-items-center">
              {/* <img src={logo} alt="phoenix" width={27} /> */}
              <img 
                src={isDark ? logoWorkwolf : logoWorkwolfGrey} 
                alt="workwolf" 
                width={33} 
              />
              <p 
                className="logo-text ms-2 d-none d-sm-block"
                style={{
                  fontFamily: "'Rajdhani', sans-serif",
                  fontSize: '1.5rem',
                  letterSpacing: '2px', 
                  color: isDark ? '#ffffff' : '#3c3c3c',
                  fontWeight: '700',
                  textTransform: 'none',
                  marginBottom: 0,
                  textShadow: isDark ? '0 0 3px rgba(255,255,255,0.3)' : 'none',
                }}
              >
                WorkWolf
              </p>
            </div>
          )}
        </Navbar.Brand>
      </div>
    </>
  );
};

export default NavbarBrand;
