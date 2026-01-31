# ⚡ HyprJSON API

*Last Sync: 2026-01-31 14:11:20*

## 📌 Navigation
- [Core](#core)
- [Node](#node)

---
## Core
**Source:** `./core/init.js`

### Manifest
These are optional tags on the main script that helps define the app:
Key | Value | Description
--- | --- | ---
import | StringList | A space seperated list that imports script tags into the app.
example:
```html
<script src="path/to/hyprjson.min.js" import="/index.js https://example.com/example.js"></script>
```

---
## Node
**Source:** `./node/style.js`

### Styles
Styles can be set in bulk or one by one:
```json
{
"style":"color:blue;background:red",
"style.color":"blue",
"style.background":"red"
}
```

---
