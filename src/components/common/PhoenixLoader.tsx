// import logo from 'assets/img/icons/logo.png';
import logoWorkwolfWhite from 'assets/img/icons/logo-workwolf-white.png';
import logoWorkwolfGrey from 'assets/img/icons/logo-workwolf-grey.png';
import classNames from 'classnames';
import { useAppContext } from 'providers/AppProvider';

const PhoenixLoader = ({ fullPage }: { fullPage?: boolean }) => {
  const {
    config: { isDark }
  } = useAppContext();

  const logoSrc = isDark ? logoWorkwolfWhite : logoWorkwolfGrey;

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
        <img src={logoSrc} alt="workwolf" className="logo-ripple ripple-1" />
        <img src={logoSrc} alt="workwolf" className="logo-ripple ripple-2" />
        <img src={logoSrc} alt="workwolf" className="logo-ripple ripple-3" />
        <img src={logoSrc} alt="workwolf" className="logo-ripple ripple-4" />
        <img src={logoSrc} alt="workwolf" className="logo-ripple ripple-5" />
      </div>
    </div>
  );
};

export default PhoenixLoader;
