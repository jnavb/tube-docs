---
title: 'Negation'
metaTitle: 'Tube | Negation Syntax'
metaDescription: 'Tube language negation syntax for functions'
---

You can negate a function output prepending one of the negation keywords before the
function name. Negation often comes in handy with [if/else clauses](https://tube-lang.netlify.app/if-else).

Negation keywords are `isnt`, `arent`, `aint`, `negate` and `!`, all of them are equivalent.


# Example

<TubeCode>{`state\nisnt greater than 20\n`}</TubeCode>

<JSCode>{`const state = () => 10
const greater = (a, b) => a < b
`}</JSCode>

> true
