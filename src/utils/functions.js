import moment from "moment";
import config from "../../data/SiteConfig";

/**
 * Takes a date and formats it as is in the site config folder
 * @param {date} date to format
 */
const formattedDate = date => moment.utc(date).format(config.dateFormat);

/**
 *
 * @param {*} top
 */
const performScroll = element => {
  element.scrollTo({
    behavior: "smooth"
  });
};

export { formattedDate, performScroll };
