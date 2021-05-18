export const frontmatter = {
  order: '3',
  title: 'Tube Playground',
  slug: 'csv-example',
  linkText: 'CSV example',
  jsCode:
    'const { tail, head, zipObject, template } = _;\nconst wrapObject = (key, obj) => ({ [key]: obj });\n\n/*\n    Based on \n    jrsinclair.com/articles/2019/elegant-error-handling-with-the-js-either-monad\n*/\n\nclass Left {\n  constructor(val) {\n    this._value = val;\n  }\n\n  map() {\n    return this;\n  }\n\n  join() {\n    return this;\n  }\n\n  chain() {\n    return this;\n  }\n\n  ap() {\n    return this;\n  }\n\n  toString() {\n    const str = this._value.toString();\n    return \'Left(\' + str + \')\';\n  }\n\n  static of(val) {\n    return new Left(val);\n  }\n}\n\nclass Right {\n  constructor(val) {\n    this._value = val;\n  }\n\n  map(fn) {\n    return new Right(fn(this._value));\n  }\n\n  join() {\n    if (this._value instanceof Left || this._value instanceof Right) {\n      return this._value;\n    }\n    return this;\n  }\n\n  chain(fn) {\n    return fn(this._value);\n  }\n\n  ap(otherEither) {\n    const functionToRun = otherEither._value;\n    return this.map(functionToRun);\n  }\n\n  toString() {\n    const str = this._value.toString();\n    return \'Right(\' +str + \')\';\n  }\n\n  static of(val) {\n    return new Right(val);\n  }\n}\n\nfunction left(x) {\n  return Left.of(x);\n}\n\nfunction right(x) {\n  return Right.of(x);\n}\n\nfunction either(leftFunc, rightFunc, e) {\n  return e instanceof Left ? leftFunc(e._value) : rightFunc(e._value);\n}\n\nfunction liftA2(func) {\n  return function runApplicativeFunc({ a, b }) {\n    return b.ap(a.map(func));\n  };\n}\n\nfunction splitFields(row) {\n  return row.replace(/"(.*)"/, "$1").split(\'","\');\n}\n\nfunction zipRow(headerFields) {\n  return function zipRowWithHeaderFields(fieldData) {\n    const lengthMatch = headerFields.length == fieldData.length;\n    return !lengthMatch\n      ? left(new Error("Row has an unexpected number of fields"))\n      : right(zipObject(headerFields, fieldData));\n  };\n}\n\nfunction addDateStr(messageObj) {\n  const errMsg = "Unable to parse date stamp in message object";\n  const months = [\n    "January",\n    "February",\n    "March",\n    "April",\n    "May",\n    "June",\n    "July",\n    "August",\n    "September",\n    "October",\n    "November",\n    "December",\n  ];\n  const d = new Date(messageObj.datestamp);\n  if (isNaN(d)) {\n    return left(new Error(errMsg));\n  }\n\n  const datestr = d.getDate() + \' \' + months[d.getMonth()] + d.getFullYear();\n  return right({ datestr, ...messageObj });\n}\n\nconst rowToMessage = template(`<li class="Message Message--<%= viewed %>">\n  <a href="<%= href %>" class="Message-link"><%= content %></a>\n  <time datetime="<%= datestamp %>"><%= datestr %></time>\n<li>`);\n\nconst showError = template(`<li class="Error"><%= message %></li>`);\n\nfunction processRow(headerFields, row) {\n  const rowObjWithDate = right(row)\n    .map(splitFields)\n    .chain(zipRow(headerFields))\n    .chain(addDateStr);\n  return either(showError, rowToMessage, rowObjWithDate);\n}\n\nfunction splitCSVToRows(csvData) {\n  return csvData.indexOf("\\n") < 0\n    ? left(new Error("No header row found in CSV data"))\n    : right(csvData.split("\\n"));\n}\nfunction processRows(headerFields) {\n  return function processRowsWithHeaderFields(dataRows) {\n    // Note this is Array map, not Either map.\n    return dataRows.map((row) => processRow(headerFields, row));\n  };\n}\n\nfunction showMessages(messages) {\n  return \'<ul class="Messages">\' + messages.join("\\n") + \'</ul>\';\n}\n\nconst csvData = () => `"datestamp","content","viewed","href"\n"2018-10-27T05:33:34+00:00","@madhatter invited you to tea","unread","https://example.com/invite/tea/3801"\n"2018-10-26T13:47:12+00:00","@queenofhearts mentioned you in \'Croquet Tournament\' discussion","viewed","https://example.com/discussions/croquet/1168"\n"2018-10-25T03:50:08+00:00","@cheshirecat sent you a grin","unread","https://example.com/interactions/grin/88"`;\n',
  tubeCode: `-> processRowsWithHeaderFields
    ::map head
    ::map splitFields
    wrapObject with 'a'

-> retrieveDataRows
    ::map tail
    wrapObject with 'b'

-> processRowsA
    liftA2 processRows

csvData
splitCSVToRows
    U processRowsWithHeaderFields
    U retrieveDataRows
processRowsA
either showError or showMessages

`,
};
