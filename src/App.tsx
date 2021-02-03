import * as React from "react";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { ObsidianConfig } from ".";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotePage from "./Note";

export default function App(props: ObsidianConfig) {
  return (
    <ChakraProvider>
      <Flex id="wrapper" flexDirection="column" height="100vh">
        <Header title={props.title || "Obsidian Publish"} />

        <Router>
          <Switch>
            <Route path="/">
              <NotePage config={props} initialNotes={[]} />
            </Route>
          </Switch>
        </Router>
      </Flex>

    </ChakraProvider>
  );
}
