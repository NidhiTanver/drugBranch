import React from 'react';
import logo from '/home/kav/Pictures/screen2.png';
import './App.scss';

//<img src={logo} alt="Logo" />;
const sectionStyle = {
  width: "50%",
  height: '100px',
  border: '3px solid green',
  backgroundImage: `url(${logo})`
};
function Image() {
  return (
  	<div>
	  	<div style={ sectionStyle }>
	  		this is a div component
	  	</div>
	  	<div className="divImg">
	  	  This is second div for externam image
	  	</div>
  	</div>
  )
}
export default Image;
