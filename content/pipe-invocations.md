---
title: 'Pipe Invocations (IIPE)'
metaTitle: 'Tube | Pipe Invocations Syntax'
metaDescription: 'Syntax of pipe invocations for tube language'
---

# IIPE Immediately invoked pipe expression

IIPEs are the main feature of tube language. These are made of other expressions that receive as input the output of the previous one.

# Pipe composition

These are the allowed expressions inside a pipe:

- Pipe expressions
- Function
- If/Else
- Switch
- Union
- Aggregator

# Example 1

The next IIPE is made of two functions:

<TubeCode>{`state
addOne
`}</TubeCode>


<JSCode>{`const state = () => 1
const addOne = v => v + 1
`}</JSCode>

> 2

# Example 2

The next IIPEs are sequentally invoked:

<TubeCode>{`getOne\n\ngetTwo\n`}</TubeCode>

<JSCode>{`const getOne = () => 1
const getTwo = () => 2
`}</JSCode>


> 1

> 2

# Example 3

<TubeCode>{`state\ngetA\ngetC\n`}</TubeCode>

<JSCode>{`const state = () => ({ a: { c: 1 }, b: 2 })
const getA = ({ a }) => a
const getC = ({ c }) => c
`}</JSCode>


> 1
