---
title: 'Flip'
metaTitle: 'Tube | Flip Syntax'
metaDescription: 'Tube language flip syntax for functions'
---

# Introduction

In order to reverse the arguments of a function you can use the keyword `flip`, place it after the function name.

<Limitation>{`Flip isn´t supported by variadic functions due its nature. I.e. (...args) => {...}`}</Limitation>

# Example

<TubeCode>{`state\nappend flip with 'World'\n`}</TubeCode>

<JSCode>{`const state = () => 'Hello'
const append = (a, b) => a + b
`}</JSCode>

> HelloWorld
