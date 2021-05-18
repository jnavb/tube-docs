export const defineTubeAceMode = () => {
  defineTubeMode();
  defineTubeModeHighlightRules();
};

const defineTubeMode = () =>
  ace.define(
    'ace/mode/tube',
    ['require', 'exports', 'ace/lib/oop', 'ace/mode/text', 'ace/mode/tube_highlight_rules'],
    (acequire, exports) => {
      const oop = acequire('ace/lib/oop');
      const TextMode = acequire('ace/mode/text').Mode;
      const TubeHighlightRules = acequire('ace/mode/tube_highlight_rules').TubeHighlightRules;

      let Mode = function() {
        this.HighlightRules = TubeHighlightRules;
      };

      oop.inherits(Mode, TextMode);

      exports.Mode = Mode;
    }
  );

const defineTubeModeHighlightRules = () =>
  ace.define(
    'ace/mode/tube_highlight_rules',
    ['require', 'exports', 'ace/lib/oop', 'ace/mode/text_highlight_rules'],
    (acequire, exports) => {
      const oop = acequire('ace/lib/oop');
      const TextHighlightRules = acequire('ace/mode/text_highlight_rules').TextHighlightRules;

      const TubeHighlightRules = function TubeHighlightRules() {
        this.$rules = new TextHighlightRules().getRules();
        this.$rules = {
          start: [
            {
              token: 'invalid.illegal',
              regex: /{|}|\[|\]|\(|\)/,
            },
            {
              token: 'storage.type',
              regex: /->/,
            },
            {
              token: 'variable.parameter.prefixes',
              regex: /(each|than|with|without|for|between|by|at|to|until|and|or|below|under|on|since|ago|past|into|from|about|through|across|after)(?=\s|$)/,
            },
            {
              token: 'keyword.alias',
              regex: /\u2B82/,
            },
            {
              token: 'keyword',
              regex: /:|< | >|isnt|arent|aint|negate|U |default|none|defer |aggregate |wrap |! |\.\.\.|ary|flip/,
            },
            {
              token: 'entity.name.function',
              regex: /(?<=-> )[a-zA-Z0-9.\$]*/,
            },
            {
              token: 'string',
              regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']",
            },
            {
              token: 'constant.numeric',
              regex: /(\b|[+\-\.])[\d_]+(?:(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)(?=[^\d-\w]|$)/,
            },
            {
              token: 'constant.language.boolean',
              regex: '\\b(?:true|false|null|undefined)\\b',
            },
            {
              token: 'text',
              regex: /[^\s,:\[\]\{\}]+/,
            },
          ],
          mlStringPre: [
            {
              token: 'indent',
              regex: /^ *$/,
            },
            {
              token: 'indent',
              regex: /^ */,
              onMatch: function(val, state, stack) {
                var curIndent = stack[1];

                if (curIndent >= val.length) {
                  this.next = 'start';
                  stack.shift();
                  stack.shift();
                } else {
                  stack[1] = val.length - 1;
                  this.next = stack[0] = 'mlString';
                }
                return this.token;
              },
              next: 'mlString',
            },
            {
              defaultToken: 'string',
            },
          ],
          mlString: [
            {
              token: 'indent',
              regex: /^ *$/,
            },
            {
              token: 'indent',
              regex: /^ */,
              onMatch: function(val, state, stack) {
                var curIndent = stack[1];

                if (curIndent >= val.length) {
                  this.next = 'start';
                  stack.splice(0);
                } else {
                  this.next = 'mlString';
                }
                return this.token;
              },
              next: 'mlString',
            },
            {
              token: 'string',
              regex: '.+',
            },
          ],
        };
      };

      oop.inherits(TubeHighlightRules, TextHighlightRules);

      exports.TubeHighlightRules = TubeHighlightRules;
    }
  );
