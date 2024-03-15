const React = require("react");
const App = require("./App");
const { render } = require("react-dom");
require("regenerator-runtime/runtime.js");

class Obsidian {
  constructor(config) {
    config.base = config.base || "/";
    config.mainPage = config.mainPage || "README";
    render(React.createElement(App, config), config.target);
  }
}

module.exports = Obsidian;
