require('normalize.css');
require('styles/App.css');
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import Header from './Header';
import PictureFrame from './PictureFrame';


class Container extends React.Component {
  render() {
    return (
    	<div>
    	<Header text = "Playstation vs Xbox" />
    	<PictureFrame src1 = "../images/devil.jpg" src2="../images/cheif.jpg"/>
    	</div>
    
    );
  }
}

Container.defaultProps = { };

export default Container;
