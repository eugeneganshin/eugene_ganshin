import React from "react";
import {
  Telegram,
  EnvelopeFill,
  Telephone,
  Github,
} from "react-bootstrap-icons";
import "./contact.css";

import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const mail = (
    <a style={{ color: "#3a58e9" }} href="mailto: e.s.ganshin.work@gmail.com">
      <EnvelopeFill size={30}></EnvelopeFill>
    </a>
  );

  const telegram = (
    <a style={{ color: "#3a58e9" }} href="tg://resolve?domain=eugeneganshin">
      <Telegram size={30}></Telegram>
    </a>
  );
  const github = (
    <a
      style={{ color: "#3a58e9" }}
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/eugeneganshin"
    >
      <Github size={30}></Github>
    </a>
  );
  const phone = (
    <a style={{ color: "#3a58e9" }} href="tel:79088364925">
      <Telephone size={30}></Telephone>
    </a>
  );

  return (
    <div className="sticky" id="contact">
      <div className="contact_empty"></div>
      <div className="contact_list">
        <div></div>
        <div className="contact_icon">{mail}</div>
        <div className="contact_text_link">
          <a href="mailto: e.s.ganshin.work@gmail.com">{t("contacts.email")}</a>
        </div>
        <div></div>
      </div>
      <div className="contact_list">
        <div></div>
        <div className="contact_icon">{telegram}</div>
        <div className="contact_text_link">
          <a href="tg://resolve?domain=eugeneganshin">{t("contacts.tg")}</a>
        </div>
        <div></div>
      </div>
      <div className="contact_list">
        <div></div>
        <div className="contact_icon">{phone}</div>
        <div className="contact_text_link">
          <a href="tel:+79088364925">{t("contacts.tel")}</a>
        </div>
        <div></div>
      </div>
      <div className="contact_list">
        <div></div>
        <div className="contact_icon">{github}</div>
        <div className="contact_text_link">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/eugeneganshin"
          >
            {t("contacts.github")}
          </a>
        </div>
        <div></div>
      </div>
      <div className="contact_empty"></div>
    </div>
  );
};

export default Contact;
