import React from 'react';
import PropTypes from 'prop-types';

const GifGridItem = ({ title, image }) => {
	return (
		<div className='card animate__animated animate__zoomIn'>
			<img src={image} alt={title} />
			<p>{title}</p>
		</div> 
	);
};

GifGridItem.propTypes = {
	title: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired
}

export default GifGridItem;
