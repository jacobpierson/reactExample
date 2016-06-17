import React, {PropTypes} from 'react';

const Picture1 = ({src}) => {
	const
		mainContainer = {	};
	return (
		<div 
		className=".img-responsive" 
		style={mainContainer}>
			<img src= {src}/>
		</div>
	);
};
export default Picture1;