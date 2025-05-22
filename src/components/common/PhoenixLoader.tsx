// import logo from 'assets/img/icons/logo.png';
import logoWorkwolfWhite from 'assets/img/icons/logo-workwolf-white.png';
import classNames from 'classnames';

const PhoenixLoader = ({ fullPage }: { fullPage?: boolean }) => {
  return (
    <div
      className={classNames(
        'd-flex justify-content-center align-items-center h-100 w-100 ',
        {
          'vh-100': fullPage
        }
      )}
    >
      <div>
        {/* <img src={logo} alt="phoenix" className="logo-ripple ripple-1" /> */}
        {/* <img src={logo} alt="phoenix" className="logo-ripple ripple-2" /> */}
        {/* <img src={logo} alt="phoenix" className="logo-ripple ripple-3" /> */}
        {/* <img src={logo} alt="phoenix" className="logo-ripple ripple-4" /> */}
        {/* <img src={logo} alt="phoenix" className="logo-ripple ripple-5" /> */}
        <img src={logoWorkwolfWhite} alt="workwolf" className="logo-ripple ripple-1" />
        <img src={logoWorkwolfWhite} alt="workwolf" className="logo-ripple ripple-2" />
        <img src={logoWorkwolfWhite} alt="workwolf" className="logo-ripple ripple-3" />
        <img src={logoWorkwolfWhite} alt="workwolf" className="logo-ripple ripple-4" />
        <img src={logoWorkwolfWhite} alt="workwolf" className="logo-ripple ripple-5" />
      </div>
    </div>
  );
};

export default PhoenixLoader;
