import "../styles/modern-normalize.css";
import "../styles/style.css";
import "../styles/components/header.css";
import "../styles/components/hero.css";
import "../styles/components/about.css";
import "../styles/components/work.css";
import "../styles/components/contact.css";
import "../styles/components/footer.css";

import "../styles/utils.css";

import darkMode from "./utils/themeSwitcher";

import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
  duration: 1000,
  offset: 100,
});

darkMode();
