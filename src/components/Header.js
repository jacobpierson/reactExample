import React, {PropTypes} from 'react';

const Header = ({text}) => {
	const
		mainContainer = {
			fontSize: '24px',
			textAlign: 'center'
			
		};
	return (
		<div className="jumbotron" style={mainContainer}>
			{text}
		</div>
	);
};

export default Header;