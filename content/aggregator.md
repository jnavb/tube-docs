---
title: 'Aggregator'
metaTitle: 'Tube | Aggregator Syntax'
metaDescription: 'Syntax of aggregator expressions for tube language'
---

# Introduction

Using the keyword `aggregate` you can combine several pipes into one array to pass them into the next function

<Warning>This is an experimental feature</Warning>

# Example

<TubeCode>{`-> pipe1\n    defer noop 'Hello'\n\n-> pipe2\n    defer noop 'World'\n\naggregate pipe1 and pipe2\n::join with ' '\n\n`}</TubeCode>

<JSCode>{`const noop = a => a
`}</JSCode>

> Hello World

