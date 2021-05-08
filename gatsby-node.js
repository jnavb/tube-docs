const componentWithMDXScope = require('gatsby-plugin-mdx/component-with-mdx-scope');

const path = require('path');

const startCase = require('lodash.startcase');

const config = require('./config');

exports.createPages = ({ graphql, actions }) => {
  return Promise.all([
    createDocumentationPages({ graphql, actions }),
    createSnippetPages({ graphql, actions }),
  ]);
};

const createDocumentationPages = ({ graphql, actions }) =>
  graphql(
    `
      {
        allMdx {
          edges {
            node {
              fields {
                id
              }
              tableOfContents
              fields {
                slug
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      console.log(result.errors); // eslint-disable-line no-console
      throw result.errors;
    }
    const { createPage } = actions;

    result.data.allMdx.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug ? node.fields.slug : '/',
        component: path.resolve('./src/templates/docs.js'),
        context: {
          id: node.fields.id,
        },
      });
    });
  });

const createSnippetPages = ({ graphql, actions }) =>
  graphql(
    `
      {
        allJavascriptFrontmatter {
          edges {
            node {
              id
              frontmatter {
                title
                slug
                jsCode
                tubeCode
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      console.log(result.errors); // eslint-disable-line no-console
      throw result.errors;
    }
    const { createPage } = actions;

    result.data.allJavascriptFrontmatter.edges.forEach(({ node }) => {
      const { frontmatter } = node;
      createPage({
        path: frontmatter.slug || '/',
        component: path.resolve('./src/components/IDE/IDE.js'),
        context: { ...frontmatter },
      });
    });
  });

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {
        $components: path.resolve(__dirname, 'src/components'),
        buble: '@philpl/buble', // to reduce bundle size
      },
    },
  });
};

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: '@babel/plugin-proposal-export-default-from',
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent);

    let value = parent.relativePath.replace(parent.ext, '');

    if (value === 'index') {
      value = '';
    }

    if (config.gatsby && config.gatsby.trailingSlash) {
      createNodeField({
        name: `slug`,
        node,
        value: value === '' ? `/` : `/${value}/`,
      });
    } else {
      createNodeField({
        name: `slug`,
        node,
        value: `/${value}`,
      });
    }

    createNodeField({
      name: 'id',
      node,
      value: node.id,
    });

    createNodeField({
      name: 'title',
      node,
      value: node.frontmatter.title || startCase(parent.name),
    });
  }
};
