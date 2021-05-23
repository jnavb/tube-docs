---
title: 'If/Else'
metaTitle: 'Syntax Highlighting is the meta title tag for this page'
metaDescription: 'This is the meta description for this page'
---

# Introduction

If/Else clauses are made of a function predicate and an if/else expression. They work similar as ternary operators except else clauses are optional.

To use them, add an indentation level and the keyword `:` followed by a space and the function name.

# Example If


<TubeCode>{`state\ngreat than 20\n    : add 20\n`}</TubeCode>

<JSCode>{`const state = () => 10
const great = (a, b) => a < b
const add = (a, b) => a + b
`}</JSCode>

> 10

# Example If/else


<TubeCode>{`state\ngreat than 20\n    : add 20\n    : add 40\n`}</TubeCode>

<JSCode>{`const state = () => 10
const great = (a, b) => a < b
const add = (a, b) => a + b
`}</JSCode>

> 50

# Example nested If/else


<TubeCode>{`state\ngreat than 20\n    : add 20\n    : great than 5\n        : add 5\n        : add 10\n`}</TubeCode>

<JSCode>{`const state = () => 10
const great = (a, b) => a < b
const add = (a, b) => a + b
`}</JSCode>

> 15
