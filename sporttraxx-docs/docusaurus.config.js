/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Sporttraxx",
  tagline:
    "This website is addressed to Sporttraxx Team members. Its aim is to provide a full description of the features of both hardware and software, and a guide of most of the functions and options.",
  url: "https://docs.sporttraxx.net",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "mschndl", // Usually your GitHub org/user name.
  projectName: "sporttraxx-docs", // Usually your repo name.

  noIndex: true,

  i18n: {
    defaultLocale: "en",
    locales: ["en", "it"],
    localeConfigs: {
      en: {
        label: "English",
      },
      it: {
        label: "Italiano",
      },
    },
  },

  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        highlightSearchTermsOnTargetPage: true,
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en", "it"],
        // ```
        // When applying `zh` in language, please install `nodejieba` in your project.
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      // "light" | "dark"
      defaultMode: "dark",
    },
    navbar: {
      logo: {
        alt: "Sporttraxx",
        src: "img/loghi/sl-white.svg",
      },
      items: [
        {
          to: "docs/tracking/sop",
          activeBasePath: "docs/tracking",
          label: "Tracking",
          position: "right",
        },
        {
          to: "docs/timing/timing-before",
          activeBasePath: "docs/timing",
          label: "Timing",
          position: "right",
        },
        {
          to: "docs/results/results-before",
          activeBasePath: "docs/results",
          label: "Results",
          position: "right",
        },
        {
          to: "docs/hardware/hardware-intro",
          activeBasePath: "docs/hardware",
          label: "Hardware",
          position: "right",
        },
        {
          href: "https://docs.google.com/spreadsheets/d/1BNkTl2ejq1C3rnIihCO_W8eVTpJMSzOGK4aEu87oDJM/edit?usp=sharing",
          label: "Updates",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Sporttraxx`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          sidebarCollapsible: false,
          // Please change this to your repo.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/edit/master/website/',
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
