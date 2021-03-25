/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Sporttraxx',
  tagline: 'This website is addressed to Sporttraxx Team members. Its aim is to provide a full description of the features of both hardware and software, and a guide of most of the functions and options.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'mschndl', // Usually your GitHub org/user name.
  projectName: 'sporttraxx-docs', // Usually your repo name.

  noIndex: true,
  
  plugins: [
    [require.resolve('@cmfcmf/docusaurus-search-local'), {
      indexBlog: false,
      language: "en",
    }]
  ],

  themeConfig: {
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark'
    },
    navbar: {
      logo: {
        alt: 'Sporttraxx',
        src: 'img/loghi/sl-white.svg',
      },
      items: [
        {
          to: 'docs/tracking/tracking-before',
          activeBasePath: 'docs',
          label: 'Tracking',
          position: 'right',
        },
        {
          to: 'docs/timing/timing-before',
          activeBasePath: 'docs',
          label: 'Timing',
          position: 'right',
        },
        {
          to: 'docs/results/results-before',
          activeBasePath: 'docs',
          label: 'Results',
          position: 'right',
        },
        {
          to: 'docs/hardware/hardware-intro',
          activeBasePath: 'docs',
          label: 'Hardware',
          position: 'right',
        },
        {
          href: 'https://google.com',
          label: 'Updates',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Sporttraxx`,
    },
    sidebarCollapsible: false,
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
