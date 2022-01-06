import React from 'react';
import Tilt from 'react-tilt';
import brainpng from './brain.png';
import './Logo.css';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			 <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: '150px', width: '150px' }} >
	      		<div className="Tilt inner pa3 center"> <img style={{paddingTop: '5px'}} src={brainpng} alt='logo'/> </div>
	    	</Tilt>
		</div>
	);
}

export default Logo;