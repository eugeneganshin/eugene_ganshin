import React from 'react';

const ProjectWrapper = (props) => {
	const [active, setActive] = React.useState(false);

	const handleOnHover = () => {
		if (active) {
			return props.gif;
		} else {
			return props.img;
		}
	};

	return (
		<div
			onMouseLeave={() => setActive(false)}
			onMouseEnter={() => setActive(true)}
			className="proj_card"
		>
			{handleOnHover()}
			<div className="proj_container">
				<div>
					<p>{props.description}</p>
					<p>{props.tech}</p>
				</div>
				<div>
					{props.links.map((link) => {
						return link;
					})}
				</div>
			</div>
		</div>
	);
};

export default ProjectWrapper;
