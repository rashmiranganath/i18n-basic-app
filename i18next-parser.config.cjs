module.exports = {
  defaultNamespace: "translation",
  lexers: {
    js: ["JsxLexer"],
    default: ["JavascriptLexer"],
  },
  locales: ["en", "kn"],
  output: "public/locales/$LOCALE/$NAMESPACE.json",
  input: ["src/*.tsx"],
};
