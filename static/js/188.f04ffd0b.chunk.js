(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[188],{251:function(a,e){!function(a){var e=/(^(?:\s*(?:\*\s*)*)).*[^*\s].*$/m,n=/#\s*\w+(?:\s*\([^()]*\))?/.source,s=/(?:[a-zA-Z]\w+\s*\.\s*)*[A-Z]\w*(?:\s*<mem>)?|<mem>/.source.replace(/<mem>/g,(function(){return n}));a.languages.javadoc=a.languages.extend("javadoclike",{}),a.languages.insertBefore("javadoc","keyword",{reference:{pattern:RegExp(/(@(?:exception|throws|see|link|linkplain|value)\s+(?:\*\s*)?)/.source+"(?:"+s+")"),lookbehind:!0,inside:{function:{pattern:/(#\s*)\w+(?=\s*\()/,lookbehind:!0},field:{pattern:/(#\s*)\w+/,lookbehind:!0},namespace:{pattern:/\b(?:[a-z]\w*\s*\.\s*)+/,inside:{punctuation:/\./}},"class-name":/\b[A-Z]\w*/,keyword:a.languages.java.keyword,punctuation:/[#()[\],.]/}},"class-name":{pattern:/(@param\s+)<[A-Z]\w*>/,lookbehind:!0,inside:{punctuation:/[.<>]/}},"code-section":[{pattern:/(\{@code\s+)(?:[^{}]|\{(?:[^{}]|\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*\})+?(?=\s*\})/,lookbehind:!0,inside:{code:{pattern:e,lookbehind:!0,inside:a.languages.java,alias:"language-java"}}},{pattern:/(<(code|pre|tt)>(?!<code>)\s*)[\s\S]+?(?=\s*<\/\2>)/,lookbehind:!0,inside:{line:{pattern:e,lookbehind:!0,inside:{tag:a.languages.markup.tag,entity:a.languages.markup.entity,code:{pattern:/.+/,inside:a.languages.java,alias:"language-java"}}}}}],tag:a.languages.markup.tag,entity:a.languages.markup.entity}),a.languages.javadoclike.addSupport("java",a.languages.javadoc)}(Prism)}}]);
//# sourceMappingURL=188.f04ffd0b.chunk.js.map