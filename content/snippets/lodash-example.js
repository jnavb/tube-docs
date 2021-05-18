export const frontmatter = {
  order: '2',
  title: 'Tube Playground',
  slug: 'lodash-fns-example',
  linkText: 'Lodash example',
  jsCode: `const { set, get } = _

const johnId = "123"
const mayId = "245"

const bookings = () => ({
  [johnId]: {
    id: "123",
    client: {
      id: "7835",
      name: "John Doe",
      email: "john.doe@test.com",
      type: "normal",
    },
    room: {
      type: "standard",
      beds: 2,
    },
    extras: {},
  },
  [mayId]: {
    id: "245",
    client: {
      id: "6592",
      name: "May Doe",
      email: "may.doe@test.com",
      type: "normal",
    },
    room: {
      type: "standard",
      beds: 3,
    },
    extras: {},
  },
})

const wrapObject = (key, obj) => ({ [key]: obj })

const addExtras = (...extras) => (booking) => ({
  ...booking,
  extras: {
    ...booking.extras,
    ...extras.reduce((acc, v) => ({ ...acc, [v]: true }), {}),
  },
})
`,
  tubeCode: `-> upgradeRoom
    set ... 'rooms.type'

-> upgradeClient
    set ... 'client.type'

-> toPremium
    upgradeRoom ... to 'suite'
    upgradeClient ... to 'vip'
    addExtras ... 'minibar' and 'massagist'

-> toPremium
    upgradeRoom ... to 'suite'
    upgradeClient ... to 'vip'
    addExtras ... 'minibar' and 'massagist'

-> updateJohnBooking
    get ... johnId
    toPremium
    wrapObject with johnId

-> updateMayBooking
    get ... mayId
    addExtras ... 'roomService'
    wrapObject with mayId


bookings
    U updateJohnBooking
    U updateMayBooking

`,
};
