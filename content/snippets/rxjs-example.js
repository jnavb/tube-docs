export const frontmatter = {
  order: '3',
  title: 'Tube Playground',
  slug: 'rxjs-example',
  linkText: 'Rxjs example',
  jsCode: `const { from: fromArr, defer: deferObservable, forkJoin, merge } = rxjs
const {
  take,
  mapTo,
  map,
  switchMap,
  filter,
  toArray: toArrayFactory,
} = rxjs.operators

const noop = (a) => a
const toArray = toArrayFactory()
const getName = ({ name }) => name
const toStream = switchMap((arr) => fromArr(arr))
const isSnake = ({ type }) => type === 'snake'
`,
  tubeCode: `-> toJson
    ::json

-> invoke
    wrap fetch
    ::then toJson

-> getBaseUrl
    defer noop 'https://60a25463745cd70017576b0b.mockapi.io'    

-> animals
    getBaseUrl
    ::concat '/animals'
    invoke

-> users
    getBaseUrl
    ::concat '/users'
    invoke

-> mockStream
    deferObservable
    toStream

-> snakeNames$
    defer mockStream for animals
    filter ... isSnake
    map ... to getName
    toArray

-> firstUser$
    defer mockStream for users
    take until 1
    map ... to getName
    toArray

-> test
    getBaseUrl
    ::concat '/animals'
    invoke

aggregate snakeNames$ and firstUser$
forkJoin
toStream
::subscribe console.log


noop
`,
};
