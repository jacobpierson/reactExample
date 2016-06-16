import React, {PropTypes} from 'react';

const Header = ({text}) => {
	const
		mainContainer = {
			color: 'skyblue',
			fontSize: '144px',
		};
	return (
		<div className="jumbotron" style={mainContainer}>
			{text}
		</div>
		);
};
export default Header;