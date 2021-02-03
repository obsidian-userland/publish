import * as React from "react";
import App from "./App";
import { render } from "react-dom";
import "regenerator-runtime/runtime.js";

export type ObsidianConfig = {
  title?: string;
  base?: string;
  mainPage?: string;
  noteClassName?: string;
  target: HTMLElement;
};

class Obsidian {
  constructor(private config: ObsidianConfig) {
    config.base = config.base || '/'
    config.mainPage = config.mainPage || 'README'
    render(React.createElement(App, config), config.target);
  }
}

// @ts-expect-error
module.exports = Obsidian