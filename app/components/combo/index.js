/**
 * Module dependencies
 */
import React from 'react';
import './styles.scss';

const Combo = () => (
	<React.Fragment>
		<div className="combo">
			<img src='https://via.placeholder.com/300x200' alt="COMBO-IMG" />
			<div className="combo__data-container">
				<div className="combo__title">
					<p>combo title</p>
					<p>$4</p>
				</div>
				<div className="combo__subtitle">
					<p>Available in 4 sizes</p>
					<p>Machine embroidery: 7.83" x 7.60"</p>
				</div>
			</div>
		</div>
	</React.Fragment>
);

export default Combo;
