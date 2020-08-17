import React from 'react';
import './contact.css';

import { useTranslation } from 'react-i18next';

const Contact = () => {
	const { t, i18n } = useTranslation();

	const mail = (
		<a href="mailto: e.s.ganshin@yandex.ru">
			<img alt="email logo" src={require('./logos/mail.png')} />
		</a>
	);

	const telegram = (
		<a href="tg://resolve?domain=Dumhuvud">
			<img alt="telegram logo" src={require('./logos/telegram.png')} />
		</a>
	);
	const github = (
		<a target="_blank" href="https://github.com/dumihuvud">
			<img alt="github logo" src={require('./logos/github.png')} />
		</a>
	);
	const phone = (
		<a href="tel:79088364925">
			<img alt="phone logo" src={require('./logos/phone(1).png')} />
		</a>
	);

	return (
		<div className="sticky" id="contact">
			<div className="contact_empty"></div>
			<div className="contact_list">
				<div></div>
				<div className="contact_icon">{mail}</div>
				<div className="contact_text_link">
					<a href="mailto: e.s.ganshin.work@gmail.com">{t('contacts.email')}</a>
				</div>
				<div></div>
			</div>
			<div className="contact_list">
				<div></div>
				<div className="contact_icon">{telegram}</div>
				<div className="contact_text_link">
					<a href="tg://resolve?domain=Dumhuvud">{t('contacts.tg')}</a>
				</div>
				<div></div>
			</div>
			<div className="contact_list">
				<div></div>
				<div className="contact_icon">{phone}</div>
				<div className="contact_text_link">
					<a href="tel:79088364925">{t('contacts.tel')}</a>
				</div>
				<div></div>
			</div>
			<div className="contact_list">
				<div></div>
				<div className="contact_icon">{github}</div>
				<div className="contact_text_link">
					<a target="_blank" href="https://github.com/dumihuvud">
						{t('contacts.github')}
					</a>
				</div>
				<div></div>
			</div>
			<div className="contact_empty"></div>
		</div>
	);
};

export default Contact;
