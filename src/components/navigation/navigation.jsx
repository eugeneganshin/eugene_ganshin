import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import "./navigation.css";

const Navigation = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="nav">
      <span onClick={() => changeLanguage(t("lang"))} className="logo">
        {t("lang")}
      </span>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>
      <ul className="menu">
        <li>
          <Link
            className="link"
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            style={{ cursor: "pointer" }}
          >
            <span>{t("nav.skills")}</span>
          </Link>
        </li>
        {/* <li>
					<Link
						className="link"
						activeClass="active"
						to="projects"
						spy={true}
						smooth={true}
						offset={0}
						duration={500}
					>
						<span>{t('nav.projects')}</span>
					</Link>
				</li>
				<li>
					<Link
						className="link"
						activeClass="active"
						to="contact"
						spy={true}
						smooth={true}
						offset={0}
						duration={500}
					>
						<span>{t('nav.contact')}</span>
					</Link>
				</li> */}
        <li>
          <a href={require("./resume.pdf")}>{t("nav.cv")}</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
