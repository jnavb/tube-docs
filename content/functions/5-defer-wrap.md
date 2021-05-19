---
title: 'Defer and Wrap'
metaTitle: 'Tube | Defer Wrap Syntax'
metaDescription: 'Tube language defer and wrap syntax for functions'
---

# Defer

If you already know all the arguments to invoke a function, you can defer 
its call until the pipe gets invoked. This often is useful on the first function of a pipe.

To defer a function use the keyword `defer` before the function name

# Example

<TubeCode>{`-> getMovies\n    defer fetch with 'http://example.com/movies.json'\n\ngetMovies\n`}</TubeCode>

> Promise {<pending\>}

# Wrap

Wrapped functions are similar to defer functions but input arguments get passed into the wrapped function.

To wrap a function use the keyword `wrap` before the function name

# Example

<TubeCode>{`-> invoke\n    wrap fetch\n\ninvoke with 'http://example.com/movies.json'\n`}</TubeCode>

> Promise {<pending\>}
