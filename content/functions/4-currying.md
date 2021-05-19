---
title: 'Currying'
metaTitle: 'Tube | Currying Syntax'
metaDescription: 'Tube language currying syntax for functions'
---

All functions that are partially called are autocurried by the compiler.

You can disable this functionality to work with third party libraries already curried or variadic functions.

To disable autocurry use the keyword `...` or `ary` between the function name and the arguments, both keywords are accepted.

# Example disable currying

<TubeCode>{`state\nprepend ... with 'John' and '!'\n`}</TubeCode>

<JSCode>{`const state = () => 'Hello'
const prepend = (...values) => (str) => str + values.join('')
`}</JSCode>

> Hello John!

