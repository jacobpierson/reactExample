require('normalize.css');
require('styles/App.css');
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import Header from './Header';

// let yeomanImage = require('../images/yeoman.png');

class Container extends React.Component {
  render() {
    return (
    	<Header text = "kjljkjlll;kjj;ljdfdfj" />
      //<div className="index">
        //<img src={yeomanImage} alt="Yeoman Generator" />
        //<div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      //</div>
    );
  }
}

Container.defaultProps = { };

export default Container;
