import moment from "moment";
import config from "../../data/SiteConfig";

/**
 * Takes a date and formats it as is in the site config folder
 * @param {date} date to format
 */
const formattedDate = (date) => moment(date).format(config.dateFormat);

/**
 *
 * @param {*} top
 */
const performScroll = (element) => {
  element.scrollTo({
    behavior: "smooth",
  });
};

const setLocalStorage = (id, value) => {
  if (typeof window !== "undefined") {
    const windowGlobal = window;
    windowGlobal.localStorage.setItem(id, JSON.stringify(value));
  } else {
    localStorage.setItem(id, JSON.stringify(value));
  }
};

const getLocalStorage = (id) => {
  if (typeof window !== "undefined") {
    const windowGlobal = window;
    return JSON.parse(windowGlobal.localStorage.getItem(id));
  }
  return undefined;
};

export { formattedDate, performScroll, setLocalStorage, getLocalStorage };
