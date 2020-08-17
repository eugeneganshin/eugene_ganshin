import React from 'react';

import './App.css';

import Info from './info/info';
import Skills from './skills/skills';
import Projects from './projects/projects';
import Contact from './contact/contact';
import Navigation from './navigation/navigation';

export default function App() {
	return (
		<div className="App">
			<div id="north"></div>
			<div id="east"></div>
			<div id="south"></div>
			<div id="west"></div>
			<Navigation />
			<div className="main">
				<Info />
				<Skills />
				<Projects />
				<Contact />
			</div>
		</div>
	);
}
