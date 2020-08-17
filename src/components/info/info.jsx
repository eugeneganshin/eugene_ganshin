import React from 'react';
import './info.css';
import { useTranslation } from 'react-i18next';

import Logo from './logo/Logo';

const Info = () => {
	const { t, i18n } = useTranslation();

	return (
		<div className="sticky" id="info">
			<div className="logo_wrapper">
				<Logo />
			</div>
			<div className="text_wrapper">
				<div></div>
				<div className="text">
					<h1>{t('info.greetings')}</h1>
					<p>{t('info.my_name_is')}</p>
					<p>{t('info.what_do_i_do')}</p>
				</div>
				<div></div>
			</div>
		</div>
	);
};

export default Info;
