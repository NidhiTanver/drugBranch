import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import ShowMore from 'react-show-more';

class Radio extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      longText: 'Dance theory is the philosophy underpinning contemporary dance, including formal ideologies, aesthetic concepts, and technical attributes. ... As dance is a ubiquitous element of culture, dance theory attempts to determine the instinctual nature of dance, and what makes various movements appear natural or forced. Dance theory is the philosophy underpinning contemporary dance, including formal ideologies, aesthetic concepts, and technical attributes. ... As dance is a ubiquitous element of culture, dance theory attempts to determine the instinctual nature of dance, and what makes various movements appear natural or forced. Dance theory is the philosophy underpinning contemporary dance, including formal ideologies, aesthetic concepts, and technical attributes. ... As dance is a ubiquitous element of culture, dance theory attempts to determine the instinctual nature of dance, and what makes various movements appear natural or forced. Dance theory is the philosophy underpinning contemporary dance, including formal ideologies, aesthetic concepts, and technical attributes. ... As dance is a ubiquitous element of culture, dance theory attempts to determine the instinctual nature of dance, and what makes various movements appear natural or forced. Dance theory is the philosophy underpinning contemporary dance, including formal ideologies, aesthetic concepts, and technical attributes. ... As dance is a ubiquitous element of culture, dance theory attempts to determine the instinctual nature of dance, and what makes various movements appear natural or forced. Dance theory is the philosophy underpinning contemporary dance, including formal ideologies, aesthetic concepts, and technical attributes. ... As dance is a ubiquitous element of culture, dance theory attempts to determine the instinctual nature of dance, and what makes various movements appear natural or forced.',
      name: 'nidhi'
		}
	}
  render() {
  	return (
  		<div>
  		  <p>Some text here...</p>
  		  <ShowMore
          lines={3}
          more='Show more'
          less='Show less'
          anchorClass=''
        >
        {this.state.longText}
      </ShowMore>
  		</div>
  	);
  }
}
export default Radio;
