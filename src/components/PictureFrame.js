import React, {PropTypes} from 'react';
import Picture1 from './Picture1';

const PictureFrame = ({src1, src2}) => {
	const
		mainContainer = {
		display: 'flex',
		
		};
	return (
		<div style={mainContainer}>
			<Picture1 image = {src1}/>
			<Picture1 image = {src2}/>
		</div>
	);
};
export default PictureFrame;