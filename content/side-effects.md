---
title: 'Side effects'
metaTitle: 'Tube | Side effects'
metaDescription: 'Syntax of side effects for tube language'
---

# Introduction

Sometimes we may want to trigger some function as a side effect inside the pipe. To convert a function in a side effect, wrap it around the keywords `< >`

# Example


<TubeCode>{`state\n< console.log >\n::join with ', '\n`}</TubeCode>

<JSCode>{`const state = () => ([1, 2, 3])
`}</JSCode>

> [1, 2, 3]

> "1, 2, 3"
