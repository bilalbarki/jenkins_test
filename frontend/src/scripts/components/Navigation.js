import React from 'react';
import { Link, IndexLink } from 'react-router';

class Navigation extends React.Component {
  render() {
    return (
      <nav className="navigation">
        <IndexLink to="/">Front page</IndexLink>
        <Link to="other-page">Other page</Link>
        <Link to="another-page">Another page</Link>
      </nav>
    );
  }
}

export default Navigation;
