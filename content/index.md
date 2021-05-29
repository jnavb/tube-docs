---
title: 'Overview'
metaTitle: 'Tube Language | Home'
metaDescription: 'Learn and code tube!'
---

<p align="center">
  <img src="https://raw.githubusercontent.com/jnavb/tube/master/assets/logo.png" alt="tube-logo" width="120px" height="120px"/>
</p>

Tube is a declarative, completely unneeded, functionalish language that transpiles into Javascript.

<Note>
 Tube is a subset of Javascript, you still need some JS code in order to work.
</Note>

# Installation

<JSCode>{`$ npm i tube-lang
`}</JSCode>

# Motivation

After reading the amazing [super tiny compiler](https://github.com/jamiebuilds/the-super-tiny-compiler) repository I became more interested in compilers. The idea of building one yourself kept growing and this is the result.

The language design is influenced by some ideas from Eric Elliot´s book [Composing Software](https://leanpub.com/composingsoftware)
# Idea

Tube aims to be a declarative, verbose language based upon pipes. The key principle is to be able to read those pipes as an english text. For this reason, you still need Javascript to implement these declarative actions.

# Limitations

There are limitations for nested expressions in the majority of features, at this moment only if/else clauses support infinite nested expressions.

These [limitations](https://en.wikipedia.org/wiki/Creative_limitation) are designed, to restrict some patterns and mantain the main goal of **readability**.

# Project status

Tube was made as a fun side project over four weekends, at the moment it is not production ready.


# Online editor

Jump into the online editor to compile and run your tube code on the online [playground](https://tube-lang.netlify.app/playground)
