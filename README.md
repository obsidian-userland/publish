# Homepage

## Quick Start

Go to your vault, create a file `index.html`:

```html
<!DOCTYPE html>
<html lang="en">

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

</html>
```

Then start a static server to preview the site:

```bash
python -m SimpleHTTPServer 3000
```

By default, `README.md` will be load as the main page. If you want to set another file as main page, just set the `mainPage` option to the file name (without the `.md` extentsion):

```diff
const app = new Obsidian({
+ mainPage: 'Start Here', // means `Start Here.md`
  title: `your title`,
  target: document.querySelector('#root')
})
```

## Limitations

This project is in early development. There are some known limitations but they would be resolved later. Since this is a open-source project, pull request is very welcome.

### notes in folder is not supported

Obsidian will automatically find the notes in folder. For example if `Hello.md` is in `docs/Hello`, you can still use `[[Hello]]` to link it instead of declarating the folder name (like `[[docs/Hello]]`, unless file name conflict).

This project doesn't handle this yet. If you have file `Hello.md` in `/docs` but using `[[Hello]]`, it only find the `/Hello.md` instead of `/docs/Hello.md`.

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