import React from "react";
import "./info.css";
import { useTranslation } from "react-i18next";
import {
  Telegram,
  EnvelopeFill,
  Telephone,
  Github,
} from "react-bootstrap-icons";

import Logo from "./logo/Logo";

const Info = () => {
  const { t, i18n } = useTranslation();

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
    <a style={{ color: "#3a58e9" }} href="tel:+79088364925">
      <Telephone size={30}></Telephone>
    </a>
  );

  return (
    <div className="sticky" id="info">
      <div className="logo_wrapper">
        <Logo />
        <div className="icons">
          {telegram} {github} {mail} {phone}
        </div>
      </div>
      <div className="text_wrapper">
        <div></div>
        <div className="text">
          <h1>{t("info.greetings")}</h1>
          <p>{t("info.my_name_is")}</p>
          <p>{t("info.what_do_i_do")}</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
