import React from 'react';
import { useTranslation } from 'react-i18next';
import './projects.css';

import ProjectWrapper from './ProjectWrapper/ProjectWrapper';
import windowDimensions from '../../ui/trackWindowDimension';

const Projects = () => {
	const { t, i18n } = useTranslation();
	const { width } = windowDimensions();

	const altem = t('projects.easymail.description');
	const altut = t('projects.ustours.description');
	const altburger = t('projects.burger.description');

	const emgithub = (
		<a href="https://serene-lowlands-14249.herokuapp.com" target="_blank" key="emgif">
			<img id="github_logo" alt="github logo" src={require('./images/logos/github.png')} />
		</a>
	);
	const emexternal = (
		<a href="https://github.com/dumihuvud/easy-mail.git" target="_blank" key="emex">
			<img id="external_logo" alt="external logo" src={require('./images/logos/link.png')} />
		</a>
	);

	const utgithub = (
		<a href="https://github.com/dumihuvud/ustours.git" target="_blank" key="utgif">
			<img id="github_logo" alt="github logo" src={require('./images/logos/github.png')} />
		</a>
	);
	const utexternal = (
		<a href="https://shielded-hamlet-43748.herokuapp.com" target="_blank" key="utex">
			<img id="external_logo" alt="external logo" src={require('./images/logos/link.png')} />
		</a>
	);

	const burgergithub = (
		<a href="https://github.com/dumihuvud/The-Burger-Builder.git" target="_blank" key="burex">
			<img id="github_logo" alt="github logo" src={require('./images/logos/github.png')} />
		</a>
	);

	const handleGifs = () => {
		const empng = (
			<img className="project_picture" alt={altem} src={require('./images/easymail/em.png')} />
		);
		const emgif = (
			<img className="project_picture" alt={altem} src={require('./images/easymail/em.gif')} />
		);
		const utpng = (
			<img className="project_picture" alt={altut} src={require('./images/ustours/ut.png')} />
		);
		const utgif = (
			<img className="project_picture" alt={altut} src={require('./images/ustours/ut.gif')} />
		);

		const burgerpng = (
			<img
				className="project_picture"
				alt={altburger}
				src={require('./images/burger/burger.png')}
			/>
		);

		const burgergif = (
			<img
				className="project_picture"
				alt={altburger}
				src={require('./images/burger/burger.gif')}
			/>
		);

		if (width < 769) {
			return {
				empng: emgif,
				emgif: emgif,
				utpng: utgif,
				utgif: utgif,
				burgerpng: burgergif,
				burgergif: burgergif,
			};
		}

		return {
			empng: empng,
			emgif: emgif,
			utpng: utpng,
			utgif: utgif,
			burgerpng: burgerpng,
			burgergif: burgergif,
		};
	};

	const { empng, emgif, utpng, utgif, burgerpng, burgergif } = handleGifs();

	return (
		<div className="sticky" id="projects">
			<div className="proj__left"></div>
			<div className="proj__empty"></div>
			<div className="proj__empty"></div>
			<div className="proj__right"></div>
			<div className="proj__first">
				<ProjectWrapper
					img={empng}
					gif={emgif}
					description={t('projects.easymail.description')}
					tech={t('projects.easymail.tech_stack')}
					links={[emgithub, emexternal]}
				/>
			</div>
			<div className="proj__second">
				<ProjectWrapper
					img={utpng}
					gif={utgif}
					description={t('projects.ustours.description')}
					tech={t('projects.ustours.tech_stack')}
					links={[utgithub, utexternal]}
				/>
			</div>
			<div className="proj__third">
				<ProjectWrapper
					img={burgerpng}
					gif={burgergif}
					description={t('projects.burger.description')}
					tech={t('projects.burger.tech_stack')}
					links={[burgergithub]}
				/>
			</div>
		</div>
	);
};

export default Projects;
