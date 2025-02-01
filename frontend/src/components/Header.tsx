import * as React from 'react';
import logo from '../assets/RainyCityLogo2.png';
import { Link } from 'react-router-dom';
interface IAppProps {}

const Header: React.FunctionComponent<IAppProps> = () => {
  return (
    <div className="header-style">
      <Link to="/">
        <img src={logo} width="90px" />
      </Link>
      {/* <Link to="/contact">
        <div>Contact</div>
      </Link> */}
    </div>
  );
};

export default Header;
