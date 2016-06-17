require('normalize.css');
require('styles/App.css');
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import Header from './Header';
import PictureFrame from './PictureFrame';
import Button from './Button';


class Container extends React.Component {
  render() {
    return (
    	<div>
    	<Header text = "Playstation vs Xbox" />
    	<PictureFrame src1 = "../images/devil.jpg" src2="../images/cheif.jpg"/>
    	<Button onClick = {this._printMessage}/>
    	</div>
    );
  }

  _printMessage() {
	console.log('Hello');
  }

}



Container.defaultProps = { };

export default Container;
