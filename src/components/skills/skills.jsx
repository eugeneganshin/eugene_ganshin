import React from 'react';
import './skills.css';
import { useTranslation } from 'react-i18next';

const Skills = () => {
	const { t, i18n } = useTranslation();

	return (
		<div className="sticky" id="skills">
			<div className="frontend">
				<h2 className="skills_name">{t('skills.frontend')}</h2>
				<p>{t('skills.frontend_tech.js')}</p>
				<p>{t('skills.frontend_tech.react')}</p>
				<p>{t('skills.frontend_tech.template_lang')}</p>
			</div>
			<div className="backend">
				<h2 className="skills_name">{t('skills.backend')}</h2>
				<p>{t('skills.backend_tech.server')}</p>
				<p>{t('skills.backend_tech.tg')}</p>
				<p>{t('skills.backend_tech.websocket')}</p>
			</div>
			<div className="other_skills">
				<h2 className="skills_name">{t('skills.other')}</h2>
				<p>{t('skills.other_tech.git')}</p>
				<p>{t('skills.other_tech.components')}</p>
				<p>{t('skills.other_tech.languages')}</p>
			</div>
		</div>
	);
};

export default Skills;
