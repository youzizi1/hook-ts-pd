const { override, fixBabelImports, addBabelPlugin } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css"
  }),
  addBabelPlugin([
    "prismjs",
    {
      languages: [
        "javascript",
        "java",
        "kotlin",
        "css",
        "dart",
        "c",
        "go",
        "python",
        "rust",
        "typescript",
        "ruby",
        "php",
        "swift",
        "html",
        "xml",
        "sql",
        "bash"
      ],
      plugins: ["normalize-whitespace"],
      css: false
    }
  ])
);
