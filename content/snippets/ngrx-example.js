export const frontmatter = {
  order: '4',
  title: 'Tube Playground',
  slug: 'ngrx-example',
  linkText: 'Ngrx Netflix example',
  jsCode: `const { of, interval, } = rxjs
const {
  take,
  map,
  switchMap,
  debounceTime,
  catchError
} = rxjs.operators

/*
    youtu.be/AslncyG8whg?t=1826
*/

const noop = a => a

const queryFullfilled = payload => ({
    type: 'QUERY_FULLFILLED',
    payload
})

const queryRejected = payload => ({
    type: 'QUERY_FULLFILLED',
    payload
})


`,
  tubeCode: `-> action$
    interval 1000
    take 4

-> ajaxCall
    defer of 'User: 537'

-> query$
    ajaxCall
    map ... to queryFullfilled
    catchError ... to queryRejected

action$
debounceTime ... 500
switchMap ... query$
::subscribe console.log




























noop
`,
};
