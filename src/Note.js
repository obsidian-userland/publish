const React = require("react");
const ChakraProvider = require("@chakra-ui/react").ChakraProvider;
const Flex = require("@chakra-ui/react").Flex;
const Header = require("./components/Header").Header;
const ObsidianConfig = require(".").ObsidianConfig;
const Router = require("react-router-dom").HashRouter;
const Switch = require("react-router-dom").Switch;
const Route = require("react-router-dom").Route;
const NotePage = require("./Note");

function App(props) {
  return React.createElement(
    ChakraProvider,
    null,
    React.createElement(
      Flex,
      { id: "wrapper", flexDirection: "column", height: "100vh" },
      React.createElement(Header, { title: props.title || "Obsidian Publish" }),
      React.createElement(
        Router,
        null,
        React.createElement(
          Switch,
          null,
          React.createElement(
            Route,
            { path: "/" },
            React.createElement(NotePage, { config: props, initialNotes: [] })
          )
        )
      )
    )
  );
}

module.exports = App;
