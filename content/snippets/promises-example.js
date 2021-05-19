export const frontmatter = {
  order: '1',
  title: 'Pomises example',
  slug: 'promises-example',
  linkText: 'Promises example',
  jsCode: `const printSuccess =
  () => console.log('Success!')`,
  tubeCode: `-> toJson
    ::json

-> invoke
    wrap fetch
    ::then

-> request
    defer invoke 'url'

request
::then console.log
::then printSuccess
::catch console.error


`,
};
