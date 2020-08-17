import React from 'react';
import Tilt from 'react-tilt';
import custom_no_lips from './custom_no_lips.png';
import './Logo.css';

const Logo = () => {
	return (
		<Tilt
			id="Tilt"
			className="Tilt"
			options={{ max: 10 }}
			style={{ height: 309, width: 310, backgroundColor: '#fccbd1' }}
		>
			<img alt="logo" src={custom_no_lips} />
		</Tilt>
	);
};

export default Logo;
