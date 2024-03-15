const React = require("react");
const { ChakraProvider, Flex } = require("@chakra-ui/react");
const { Header } = require("./components/Header");
const { ObsidianConfig } = require(".");
const { HashRouter: Router, Switch, Route, Link } = require("react-router-dom");
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
