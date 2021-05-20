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
      '/', // add trailing slash if enabled above
      '/hello-world',
      '/format',
      '/pipe-invocations',
      '/pipe-expressions',
      '/functions',
      '/methods',
      '/side-effects',
      '/if-else',
      '/switch',
      '/union',
      '/aggregator',
    ],
    collapsedNav: [
      // '/codeblock',
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
    docsLocation: 'https://github.com/jnavb/tube-docs/tree/master/content',
    favicon: 'components/images/favicon.png',
  },
  pwa: {
    enabled: true,
    manifest: {
      name: 'Tube Docs',
      short_name: 'Tube Docs',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icon: 'src/components/images/pwa-512.png',
    },
  },
};

module.exports = config;
