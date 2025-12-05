/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cien API Documentation',
  tagline: 'Cien API field reference and data dictionary',
  favicon: 'img/favicon.ico',

  // ✅ Your real public URL
url: 'https://cienai.github.io',
baseUrl: '/docs/',
organizationName: 'cienai',
projectName: 'cien-api-docs',

  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
  [
    'classic',
    {
      docs: {
        routeBasePath: '/',   // docs appear at /docs/*
        sidebarPath: require.resolve('./sidebars.js'),
      },
      blog: false,
    }
  ]
]

  themeConfig: {
    navbar: {
      title: 'Cien API',
      logo: {
        alt: 'Cien AI Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'apiSidebar',
          position: 'left',
          label: 'API Docs',
        },
        {
          href: 'https://github.com/cienai/cien-api-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} Cien`,
    },
  },
};

export default config