---
title: 'Arguments'
metaTitle: 'Tube | Arguments Syntax'
metaDescription: 'Tube language argument syntax for functions'
---

# Introduction

If a function has more than one argument, you can partially call it.

The arguments supported are three: string literals, numbers and variables. To use an argument, type the argument after the function name with a space.

### Currying

All functions that are partially called are autocurried by the compiler. To disable the autocurry see [Currying](https://tube-lang.netlify.app/functions/4-currying).

### Arguments Prefix

To improve readability, you can prepend the arguments with a prefix. These prefixes
are **completely optional** and dont affect the output of the program.

Allowed preffixes mostly are english prepositions, those are `each`, `than`, `with`, `without`, `for`, `between`, `by`, `at`, `to`, `until`, `and`, `or`, `below`, `under`, `on`, `since`, `ago`, `past`, `into`, `from`, `about`, `through`, `across` and `after`.



# Example

Short vs Verbose:

<TubeCode>{`state\ndivide by 2\n`}</TubeCode>

<TubeCode>{`state\ndivide 2\n`}</TubeCode>

<JSCode>{`const state = () => 10
const divide = (a, b) => a / b
`}</JSCode>

> 5

