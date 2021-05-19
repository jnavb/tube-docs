---
title: 'Switch'
metaTitle: 'Tube | Switch Expressions Syntax'
metaDescription: 'Syntax of switch expressions for tube language'
---

Switch clauses are made of a tuples of function predicates and functions.

To use them add an indentation level and the function predicate wrapped with the keyword `:` and followed by the function.

If you want to define a default case, you can use the keyword `default` or `none` as the function predicate.

# Example


<TubeCode>{`state\n    : isDog : addTail\n    : isCat : addNineLifes\n`}</TubeCode>

<JSCode>{`const state = () => ({ type: 'DOG' })
const isDog = ({ type }) => type === 'DOG'
const isCat = ({ type }) => type === 'CAT'
const addTail = (state) => ({ ...state, tail: true })
const addNineLifes = (state) => ({ ...state, lifes: 9 })
`}</JSCode>

> { type: 'DOG', tail: true }


# Example with default case


<TubeCode>{`state\n    : isDog : addTail\n    : isCat : addNineLifes\n    : default : addEyes\n`}</TubeCode>

<JSCode>{`const state = () => ({ type: 'BEAR' })
const isDog = ({ type }) => type === 'DOG'
const isCat = ({ type }) => type === 'CAT'
const addTail = (state) => ({ ...state, tail: true })
const addNineLifes = (state) => ({ ...state, lifes: 9 })
const addEyes = (state) => ({ ...state, eyes: true })
`}</JSCode>

> { type: 'BEAR', eyes: true }

