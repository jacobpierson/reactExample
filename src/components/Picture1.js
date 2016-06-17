import React, {PropTypes} from 'react';

const Picture1 = ({image}) => {
	const
		mainContainer = {	
			maxHeight: '150px',
			maxWidth: 'auto',
			margin: 'auto'

			
		};
	return (
		
			<img className = 'img-circle' style = {mainContainer} src= {image} />
		
	);
};
export default Picture1;