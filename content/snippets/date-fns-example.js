export const frontmatter = {
  order: '1',
  title: 'Tube Playground',
  slug: 'date-fns-example',
  linkText: 'Date fns example',
  jsCode: `const createDate = date => new Date(date)
const first = arr => arr[0]
const {
    addDays,
    format,
    isBefore,
    addYears,
    subYears,
    locale = null
} = dateFns
`,
  tubeCode: `createDate for '1995-12-17T03:24:00'
addDays flip 5
isBefore flip
    : addYears flip 10
    : subYears flip 10
format flip  to 'dd MMMM yyyy' without locale
::split by 'T'
first
`,
};
