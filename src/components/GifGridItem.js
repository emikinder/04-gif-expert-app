import React from 'react';

const GifGridItem = ({ title, image }) => {
	return (
		<div className='card animate__animated animate__zoomIn'>
			<img src={image} alt={title} />
			<p>{title}</p>
		</div> 
	);
};

export default GifGridItem;
