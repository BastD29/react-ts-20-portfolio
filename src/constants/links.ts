import i18n from "../i18n/i18n";
import { ABOUT, CONTACT, HOME, LOGIN, REGISTER } from "./routes";

const navLinks = [
  { title: `${i18n.t("links.nav.home")}`, path: HOME },
  { title: `${i18n.t("links.nav.about")}`, path: ABOUT },
  { title: `${i18n.t("links.nav.contact")}`, path: CONTACT },
];

const authLinks = [
  { title: `${i18n.t("links.auth.signin")}`, path: LOGIN },
  { title: `${i18n.t("links.auth.signup")}`, path: REGISTER },
];

export { navLinks, authLinks };
