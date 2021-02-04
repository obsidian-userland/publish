# Limtations

This project is in early development. There are some known limitaion but they would be resolved later. Since this is a open-source project, pull request is very welcome.

### notes in folder is not supported

Obsidian will automatically find the notes in folder. For example if `Hello.md` is in `docs/Hello`, you can still use `[[Hello]]` to link it instead of declarating the folder name (like `[[docs/Hello]]`, unless file name conflict). 

This project doesn't handle this yet. If you have file `Hello.md` in `/docs` but using `[[Hello]]`, it only find the `/Hello.md` instead of `/docs/Hello.md`.

So keep all notes flatly.

### References  is not supported

It needs compilation to find the references of the notes. In order to keep it simple, we don't support it yet. But it is a priority feature.