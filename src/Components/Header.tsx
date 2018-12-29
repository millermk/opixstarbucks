import * as React from 'react';

import logo from '../Assets/opi-logo.png';

class Header extends React.Component {
  private links = ['PROFESSIONALS', 'COLOR COLLECTIONS', 'NEW IN', 'BROWSE PRODUCTS', 'NAILS BY OCCASION', 'GIFTS', 'NAIL ART', 'TRY IT ON', 'BLOG', '#OPIObsessed'];

  public render() {
    return (
        <header className="App-header">
            <img src={logo} className="App-header-logo" alt="logo" />
            <div className="App-header-navbar">
                {this.links.map(l => <a className="App-header-navbar-item" href='#' key={l}>{l}</a>)}
            </div>
        </header>
    );
  }
}

export default Header;
