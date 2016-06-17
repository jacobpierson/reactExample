require('normalize.css');
require('styles/App.css');
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import Header from './Header';
import Picture1 from './Picture1';
import Picture2 from './Picture2';


class Container extends React.Component {
  render() {
    return (
    	<div>
    	<Header text = "kjljkjlll;kjj;ljdfdfj" />
    	<Picture1 src = "../images/ninja.jpg" />
    	<Picture2 src = "../images/ninja.jpg" />
    	</div>
      //<div className="index">
        //<img src={yeomanImage} alt="Yeoman Generator" />
        //<div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      //</div>
    );
  }
}

Container.defaultProps = { };

export default Container;
