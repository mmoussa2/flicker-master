import React from 'react';


class SplashWelcome extends React.Component {
  componentDidMount() {
    document.title = "Fliqr - Find your inspiration";
  }
  
  render() {
    return (
      <div>
        <div className="splash-welcome">
          <h1>Find your inspiration.</h1>
          <p>Welcome to our community</p>
          <button onClick={() => this.props.setModal()}>Sign Up</button>
          <button onClick={() => this.props.runDemo()}>Demo Login</button>
        </div>
        <ul className="splash-slides">
          <li>
            <span />
          </li>
          <li>
            <span />
          </li>
          <li>
            <span />
          </li>
          <li>
            <span />
          </li>
        </ul>
      </div>
    );
  }
}

export default SplashWelcome;
