<<<<<<< Updated upstream
# Homepage

## Quick Start

Go to your vault, create a file `index.html`:
=======
<h1 align="center">✍ (Markdown) Publish</h1>

<p align="center">
  <img src="https://img.shields.io/github/languages/code-size/semanticdata/publish" />
  <img src="https://img.shields.io/github/repo-size/semanticdata/publish" />
  <img src="https://img.shields.io/github/commit-activity/t/semanticdata/publish" />
  <img src="https://img.shields.io/github/last-commit/semanticdata/publish" />
  <img src="https://img.shields.io/website/https/semanticdata.github.io/publish.svg" />
</p>

## Overview

Open source [Obsidian Publish](https://obsidian.md/publish) alternative. Fork of [obsidian-userland/publish](https://github.com/obsidian-userland/publish).

## Table of Contents

<details>
<summary>Show/Hide</summary>

- [Overview](#overview)
- [Table of Contents](#table-of-contents)
- [Getting Started](#getting-started)
- [Limitations](#limitations)
  - [1. Folders are not currently supported](#1-folders-are-not-currently-supported)
  - [2. References are not currently supported](#2-references-are-not-currently-supported)
- [Acknowledgements and Attributions](#acknowledgements-and-attributions)
- [License](#license)

</details>

## Getting Started

Within your vault, create `index.html`:
>>>>>>> Stashed changes

```html
<!DOCTYPE html>
<html lang="en">
<<<<<<< Updated upstream

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>@obsidian-userland/publish</title>
  <script src="https://cdn.jsdelivr.net/npm/@obsidian-userland/publish/dist/index.js"></script>
</head>

<body>
  <div id="root"></div>

  <script>
    const app = new Obsidian({
      title: `your title`,
      target: document.querySelector('#root')
    })
  </script>
</body>

=======
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Site Title</title>
    <meta name="description" itemprop="about" content="Site description." />
    <script src="https://cdn.jsdelivr.net/npm/@obsidian-userland/publish/dist/index.js"></script>
  </head>

  <body>
    <div id="root"></div>

    <script>
      const app = new Obsidian({
        mainPage: "homepage",
        title: `Site Title`,
        target: document.querySelector("#root"),
      });
    </script>
  </body>
>>>>>>> Stashed changes
</html>
```

Then start a static server to preview the site:

<<<<<<< Updated upstream
```bash
python -m SimpleHTTPServer 3000
```

By default, `README.md` will be load as the main page. If you want to set another file as main page, just set the `mainPage` option to the file name (without the `.md` extentsion):

```diff
const app = new Obsidian({
+ mainPage: 'Start Here', // means `Start Here.md`
=======
<!-- python -m SimpleHTTPServer 3000 # deprecated, use next line -->

```bash
python -m http.server 3000
# Open http://localhost:3000/ in your browser.
```

By default, `README.md` will be loaded as the main page. If you want to set another file as main page, just set the `mainPage` option to the file name (without the `.md` extension):

```diff
const app = new Obsidian({
+ mainPage: 'homepage', // means `homepage.md`
>>>>>>> Stashed changes
  title: `your title`,
  target: document.querySelector('#root')
})
```

## Limitations

<<<<<<< Updated upstream
This project is in early development. There are some known limitations but they would be resolved later. Since this is a open-source project, pull request is very welcome.

### notes in folder is not supported
=======
This project hasn't been updated in around 2 years. There are some known limitations.

### 1. Folders are not currently supported
>>>>>>> Stashed changes

Obsidian will automatically find the notes in folder. For example if `Hello.md` is in `docs/Hello`, you can still use `[[Hello]]` to link it instead of declarating the folder name (like `[[docs/Hello]]`, unless file name conflict).

This project doesn't handle this yet. If you have file `Hello.md` in `/docs` but using `[[Hello]]`, it only find the `/Hello.md` instead of `/docs/Hello.md`.

<<<<<<< Updated upstream
So keep all notes flatly.

### References  is not supported

It needs compilation to find the references of the notes. In order to keep it simple, we don't support it yet. But it is a priority feature.

# API Reference

## new Obsidian(config: ObsidianConfig)

### target

DOM element target to be rendered to.

### title

Note title

### base

Default: `/`

The base path.

### mainPage

Default: `README`
=======
So keep all notes flat within a directory/folder.

### 2. References are not currently supported

It needs compilation to find the references of the notes. In order to keep it simple, we don't support this yet.

## Acknowledgements and Attributions

This project is a fork of [obsidian-userland/publish](https://github.com/obsidian-userland/publish). It is only possible because of their work. Thank you.

The icons used thorought my projects come from [UXWing](https://uxwing.com/license/), [Remix Icon](https://remixicon.com/license/), and/or [Lucide](https://lucide.dev/license/). These are kindly provided under different licenses. Please visit their sites to learn more.

## License

Source code in this repository is available under the [MIT License](LICENSE).
>>>>>>> Stashed changes
