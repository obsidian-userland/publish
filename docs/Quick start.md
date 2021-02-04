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
$ python -m SimpleHTTPServer 3000
```

By default, `REAME.md` will be load as the main page. If you want to set another file as main page, just set the `mainPage` option to the file name (without the `.md` extentsion):

```diff
const app = new Obsidian({
+ mainPage: 'Start Here', // means `Start Here.md`
  title: `your title`,
  target: document.querySelector('#root')
})
```

