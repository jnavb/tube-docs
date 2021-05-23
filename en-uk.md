---
title: 'Aggregator'
---

# Introduction

Using the keyword `aggregate` you can combine several pipes into one array to pass them into the next function

<Warning>This is an experimental feature</Warning>

# Rules

### Indentation

Indentation of nested blocks are always achieved by **four spaces**.

### Break line

Each expression has to be declared always only on a single line.

### Empty lines

It´s required a minimun of one empty line between pipe expressions and invocations.

---
title: 'Functions'
---

# Introduction

Functions are the element for how pipes are composed

# Simple usage

To use a function inside a pipe you only need to type its name. Each function is declared in 
a single line, there cannot be more than one function per line.

# Introduction

If/Else clauses are made of a function predicate and an if/else expression. They work similar as ternary operators except else clauses are optional.

To use them add an indentation level and the keyword `:` followed by a space and the function name.

---
title: 'Overview'
---

Tube is a declarative, completely unneeded, functionalish language that compiles into Javascript.

Tube is a subset of Javascript, you still need some JS code in order to work.

# Motivation

After reading the amazing [super tiny compiler](https://github.com/jamiebuilds/the-super-tiny-compiler) repository I became more interested about compilers. The idea of building one yourself kept growing and this is the result.

The language design it´s influenced by some ideas from Eric Elliot´s book [Composing Software](https://leanpub.com/composingsoftware)

# Idea

Tube aims to be a declarative, verbose language based upon pipes. The key principle is to be able to read those pipes as an english text. For this reason, you still need Javascript to implement this declarative actions.

# Limitations

There are limitations for nested expressions in the majority of features, at this moment only if/else clauses support infinite nested expressions.

This limitations are by design, to restrict some patterns and mantain the main goal of **readability**.

# Project status

Tube was made as a fun side project during four weekends, at this moment is not production ready.

# Online editor

Jump into the online editor to compile and run your tube code on the online [playground](https://tube-lang.netlify.app/playground)

---
title: 'Methods'
---

# Introduction

Methods are the way we can call the functions of an object. To use a method type the function name preceded by the keyword `::`

---
title: 'Pipe Expressions'
---
# Introduction

For reusability purposes you can define pipe expressions to use at IIPEs later on.

A pipe expression starts with the arrow keyword `->` and an identifier.

---
title: 'Pipe Invocations (IIPE)'
---

# IIPE Immediately invoked pipe expression

IIPEs are the main feature of tube language. This are made of another expressions that receive as input the output of the previous one.

# Pipe composition

This are the allowed expressions inside a pipe:

- Pipe expressions
- Function
- If/Else
- Switch
- Union
- Aggregator

# Introduction

Sometimes we may want to trigger some function as a side effect inside the pipe. To convert a function in a side effect wrap it around the keywords `<  >`

---
title: 'Switch'
---

# Introduction

Switch clauses are made of a tuples of function predicates and functions.

To use them add an indentation level and the function predicate wrapped with the keyword `:` and followed by the function.

If you want to define a default case, you can use the keyword `default` or `none` as the function predicate.


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


---
title: 'Arguments'
---

# Introduction

If a function has more than one argument you can partially call it.

The arguments supported are three: string literals, numbers and variables. To use an argument, type the argument after the function name with a space.

### Currying

All functions that are partially called are autocurried by the compiler. To disable the autocurry see [Currying](https://tube-lang.netlify.app/functions/4-currying).

### Arguments Prefix

To improve readability, you can prepend the arguments with a prefix. These prefixes
are **completely optional** and dont affect the output of the program.

Allowed preffixes mostly are english prepositions, those are `each`, `than`, `with`, `without`, `for`, `between`, `by`, `at`, `to`, `until`, `and`, `or`, `below`, `under`, `on`, `since`, `ago`, `past`, `into`, `from`, `about`, `through`, `across` and `after`.


---
title: 'Negation'
---

# Introduction

You can negate a function output prepending one of the negation keywords before the
function name. Negation often comes in handy with [if/else clauses](https://tube-lang.netlify.app/if-else).

Negation keywords are `isnt`, `arent`, `aint`, `negate` and `!`, all of them are equivalent.


---
title: 'Flip'
---

# Introduction

In order to reverse the arguments of a function you can use the keyword `flip`, place it after the function name.

<Limitation>{`Flip isn´t supported for variadic functions due its nature. I.e. (...args) => {...}`}</Limitation>

---
title: 'Currying'
---

# Introduction

All functions that are partially called are autocurried by the compiler.

You can disable this functionality to work with third party libraries already curried or variadic functions.

To disable autocurry use the keyword `...` or `ary` between the function name and the arguments, both keywords are accepted.

---
title: 'Defer and Wrap'
---

# Defer

If you already know all the arguments to invoke a function, you can defer 
its call until the pipe gets invoked. This often is useful on the first function of a pipe.

To defer a function use the keyword `defer` before the function name

# Wrap

Wrapped functions are similar to defer functions but input arguments get passed into the wrapped function.

To wrap a function use the keyword `wrap` before the function name
