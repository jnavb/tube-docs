---
title: 'Unions'
metaTitle: 'Tube | Union Syntax'
metaDescription: 'Syntax of unions for tube language'
---

# Introduction

Sometimes you may want to proccess several properties with different functions and merge them. You can accomplish this with the union keyword `U`.

The outputs of the functions preceeded by the union keyword are merged into one by different means:

- Arrays -> concat
- Object -> spread
- Function -> not supported
- Number -> add
- Bigint -> add
- boolean -> ||


<Warning>This is an experimental feature</Warning>


# Example with arrays

<TubeCode>{`state\n    U getArr1\n    U getArr2\n`}</TubeCode>

<JSCode>{`const state = () => ({ arr1: [1, 2, 3], arr2: [4, 5, 6] })
const getArr1 = ({ arr1 }) => arr1
const getArr2 = ({ arr2 }) => arr2
`}</JSCode>

> [1, 2, 3, 4, 5, 6]

# Example with objects

<TubeCode>{`state\n    U getObj1\n    U getObj2\n`}</TubeCode>

<JSCode>{`const state = () => ({ obj1: { a: 1 }, obj2: { a: 3 } })
const getObj1 = ({ obj1 }) => obj1
const getObj2 = ({ obj2 }) => obj2
`}</JSCode>

> { a: 3 }
