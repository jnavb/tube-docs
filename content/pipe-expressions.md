---
title: 'Pipe Expressions'
metaTitle: 'Tube | Pipe Expressions Syntax'
metaDescription: 'Syntax of pipe expressions for tube language'
---

For reusability purposes you can define pipe expressions to use at IIPEs later on.

A pipe expression starts with the arrow keyword `->` and an identifier.

# Example

<TubeCode>{`-> foo\n    getOne\n\nfoo\n\nfoo\n`}</TubeCode>

<JSCode>{`const getOne = () => 1
`}</JSCode>

> 1

> 1
