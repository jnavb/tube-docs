const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://tube.io',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: '',
    logoLink: 'https://github.com/jnavb/TUBE',
    title: '',
    githubUrl: 'https://github.com/jnavb/TUBE',
    helpUrl: '',
    tweetText: '',
    social: '',
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'Compiler', link: 'https://github.com/jnavb/TUBE' }],
    frontline: false,
    ignoreIndex: false,
    title: '',
  },
  siteMetadata: {
    title: 'Tube Documentation | TUBE language',
    description: 'Documentation for tube language',
    ogImage: null,
    docsLocation: 'https://github.com/jnavb/tube-docs/content',
    favicon: 'components/images/favicon.png',
  },
  pwa: {
    enabled: false,
    manifest: {
      name: 'Tube Docs',
      short_name: 'Tube Docs',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/components/images/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
