const config = {
  siteTitle: "Kaz Yamada's very average website", // Site title.
  siteTitleShort: "Kaz Yamada", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Kaz Yamada", // Alternative site title for SEO.
  siteLogo: "/logos/kaz.jpg", // Logo used for SEO and manifest.
  siteUrl: "https://kazyamada.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "A personal website built with Gatsby Advanced Starter.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  googleAnalyticsID: "", // GA tracking ID.
  disqusShortname: "https-kazyamada", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "MMMM DD, YYYY", // Date format for display.
  userName: "Kaz Yamada", // Username to display in the author segment.
  userEmail: "kaz.yamada@outlook.com", // Email used for RSS feed's author segment
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Sydney, Australia", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription: "An average person living his average life.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/kaz-yamada",
      iconClassName: "github",
      image: "/logos/GitHub-Mark-Light-64px.png",
    },
    {
      label: "Codepen",
      url: "https://codepen.io/kaz-yamada",
      iconClassName: "codepen",
      image: "/logos/codepen-icon.png",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/kaz-yamada/",
      iconClassName: "linkedin",
      image: "/logos/LI-In-Bug.png",
    },
  ],
  menuLinks: [
    {
      name: "My Projects",
      link: "/#projects",
    },
    {
      name: "Blog",
      link: "/blog/",
    },
    {
      name: "About",
      link: "/about/",
    },
  ],
  copyright: "Copyright © 2019. Kaz Yamada", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#44d5da", // Used for setting manifest and progress theme colors.
  backgroundColor: "#ffffff", // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
