import React from 'react';
import ReactDOM from 'react-dom';
import TestComponent from './components/TestComponent';
import './style.css';

// eslint-disable-next-line react/prefer-stateless-function
class Welcome extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { className } = this.props;
    return (
      <div className={className}>
        <h1>Hello World</h1>
        <TestComponent />
      </div>
    );
  }
}

Welcome.defaultProps = {
  className: 'main',
};

ReactDOM.render(<Welcome />, document.getElementById('root'));

module.hot.accept();
