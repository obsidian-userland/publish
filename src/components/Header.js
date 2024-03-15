const { Box, Flex, Text } = require("@chakra-ui/react");
const React = require("react");

function Header(props) {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      Flex,
      { as: "nav", p: 4, shadow: "sm" },
      React.createElement(Text, { fontWeight: "bold" }, props.title)
    )
  );
}

module.exports = Header;
